import { Injectable } from '@angular/core';
import { ApiBase } from './api-base.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService extends ApiBase {
  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }
  login(data: { loginID: string; password: string }) {
    console.debug(data);
    const httpOptions = {
      dataType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let url = 'http://192.168.7.128:8080/user/login';
    return this.httpClient
      .post(url, JSON.stringify(data), httpOptions)
      .pipe(catchError(this.handleError))
      .subscribe(
        data => {
          console.debug(data);
        },
        err => {
          console.debug(err);
        }
      );
  }
  converFormData(data) {
    let result = [];
    for (let key in data) {
      result.push(key + '=' + data[key]);
    }
    return result.join('&');
  }
}
