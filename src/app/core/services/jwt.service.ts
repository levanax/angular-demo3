import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  getToken(): string {
    return window.sessionStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    window.sessionStorage.setItem('jwtToken', token);
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }
}
