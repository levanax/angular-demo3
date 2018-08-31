import { Component, OnInit } from '@angular/core';
import {
  MissionInteractionService,
  StoreService,
  ProductService,
  Product,
  StoreRecord
} from '../../core';

@Component({
  selector: 'app-store-records',
  templateUrl: './store-records.component.html',
  styleUrls: ['./store-records.component.css']
})
export class StoreRecordsComponent implements OnInit {
  constructor(private storeService: StoreService) {}
  storeRecords: StoreRecord[];
  ngOnInit() {
    this.storeService.getStoreRecords().subscribe((res: any) => {
      this.storeRecords = res.data;
    });
  }
}
