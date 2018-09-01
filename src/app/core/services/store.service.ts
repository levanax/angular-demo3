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
      storeRecord[i].instructionsText =
        storeRecord[i].instructions === 'export' ? '出库' : '入库';
    }
    return storeRecord;
  }
  getStoreRecords(): Observable<StoreRecord> {
    return this.apiService.get('/stores/records');
  }
}
