import { Injectable } from '@angular/core';
import { ApiUserService } from './api/api-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiUserService: ApiUserService) {}
  login(data: { loginID: string; password: string }) {
    this.apiUserService.login(data);
  }
}
