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
      .post(`${environment.baseURL}${path}`, data, httpOptions)
      .pipe(catchError(this.processError));
  }
}
