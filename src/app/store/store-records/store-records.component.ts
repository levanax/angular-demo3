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
  selectedRows: StoreRecord[];
  tblCols: any[];
  tblPageRows: number = 10;
  instructionsOption: any[];
  ngOnInit() {
    this.instructionsOption = [
      { label: '出/入库', value: null },
      { label: '出库', value: '出库' },
      { label: '入库', value: '入库' }
    ];
    this.tblCols = [
      { field: 'updateDate', header: '日期' },
      { field: 'productName', header: '名称' },
      { field: 'productSpec', header: '规格' },
      { field: 'instructionsText', header: '指令' },
      { field: 'quantity', header: '数量' },
      { field: 'price', header: '单价' },
      { field: 'remark', header: '备注' }
    ];
    this.storeService.getStoreRecords().subscribe((res: any) => {
      if (res.data && res.data.length > 0) {
        this.storeRecords = this.storeService.processStoreRecordData(res.data);
      }
    });
  }
}
