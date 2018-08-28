import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL: string;
  constructor(private httpClient: HttpClient) {}
  httpOptions: any = {
    dataType: 'json',
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  processError(error: any) {
    return throwError(error.error);
  }
  post(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .post(`${environment.baseURL}${path}`, body, this.httpOptions)
      .pipe(catchError(this.processError));
  }
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient
      .get(`${environment.baseURL}${path}`, { params })
      .pipe(catchError(this.processError));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.httpClient
      .put(`${environment.baseURL}${path}`, body, this.httpOptions)
      .pipe(catchError(this.processError));
  }
  delete(path): Observable<any> {
    return this.httpClient
      .delete(`${environment.baseURL}${path}`)
      .pipe(catchError(this.processError));
  }
}
