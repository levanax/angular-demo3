import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    protected apiService: ApiService
  ) {}

  login(data: { loginID: string; password: string }): Observable<any> {
    return this.apiService.post('/user/login', data);
  }
}
