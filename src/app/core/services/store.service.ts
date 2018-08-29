import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private apiService: ApiService) {}
  getStores(): Observable<any> {
    return this.apiService.get('/stores');
  }
}
