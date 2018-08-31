import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { StoreRecord } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor(private apiService: ApiService) {}
  getStores(): Observable<any> {
    return this.apiService.get('/stores');
  }
  postStoreRecord(storeRecord: StoreRecord): Observable<StoreRecord> {
    return this.apiService.post('/stores/records', storeRecord);
  }
  getStoreRecords(): Observable<StoreRecord> {
    return this.apiService.get('/stores/records');
  }
}
