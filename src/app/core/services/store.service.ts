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
  processStoreRecordData(storeRecord: StoreRecord[]): StoreRecord[] {
    let length = storeRecord.length;
    for (let i = 0; i < length; i++) {
      if (storeRecord[i].instructions === 'export') {
        storeRecord[i].instructionsText = '出库';
        storeRecord[i].quantity = 0 - storeRecord[i].quantity;
      } else {
        storeRecord[i].instructionsText = '入库';
      }
    }
    return storeRecord;
  }
  getStoreRecords(): Observable<StoreRecord> {
    return this.apiService.get('/stores/records');
  }
}
