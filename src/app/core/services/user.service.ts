import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(protected apiService: ApiService) {}

  login(data: { loginID: string; password: string }): Observable<any> {
    return this.apiService.post('/user/login', data);
  }
}
