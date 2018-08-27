import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string;
  constructor(private httpClient: HttpClient) {
    this.baseURL = 'http://192.168.7.128:8080';
  }

  processError(error: any) {
    return throwError(error.error);
  }
  post(path: string, data: Object = {}): Observable<any> {
    const httpOptions = {
      dataType: 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.httpClient
      .post(`${this.baseURL}${path}`, data, httpOptions)
      .pipe(catchError(this.processError));
  }
}
