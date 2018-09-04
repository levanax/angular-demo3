import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(
    protected apiService: ApiService,
    private jwtService: JwtService
  ) {}

  login(data: { loginID: string; password: string }): Observable<any> {
    return this.apiService.post('/user/login', data).pipe(
      tap(res => {
        if (res.code === 'ok') {
          this.isLoggedIn = true;
          this.jwtService.saveToken(res.data.token);
        }
      })
    );
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}
