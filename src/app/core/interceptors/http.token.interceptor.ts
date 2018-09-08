import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { JwtService, MissionInteractionService } from '../services';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Message } from 'primeng/components/common/message';

@Injectable({
  providedIn: 'root'
})
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private jwtService: JwtService,
    private missionInteractionService: MissionInteractionService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headersConfig = {
      'Content-Type': 'application/json'
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['authorization'] = token;
    }
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request).pipe(catchError((error, caught) => {
      if (error) {
        let errMessage: Message;
        switch (error.status) {
          case 401:
            errMessage = {
              severity: 'warn',
              summary: '系统提示',
              detail: '未授权访问，请重新登入！'
            };
            this.router.navigateByUrl('user/login');
            break;
          case 403:
            errMessage = {
              severity: 'warn',
              summary: '系统提示',
              detail: '无权限访问！'
            };
            break;
          case 0:
            errMessage = {
              severity: 'error',
              summary: '网络错误',
              detail: '未连接至服务器，请检查网络连接！'
            };
            break;
        }
        if (errMessage) this.missionInteractionService.notification(errMessage);
      }
      return of(error);
    }) as any);
  }
}
