import { Injectable } from '@angular/core';
import { ApiBase } from './api-base.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

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
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let url = 'http://192.168.7.128:8080/user/login';
    return this.httpClient
      .post(url, data, httpOptions)
      .toPromise()
      .then(res => {
        console.debug(res);
      })
      .catch(this.handleError);
  }
}
