import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import {
  MissionInteractionService,
  StoreService,
  ProductService,
  Product,
  StoreRecord
} from '../../core';
import { Message } from 'primeng/components/common/message';

@Component({
  selector: 'app-store-edit-step2',
  templateUrl: './store-edit-step2.component.html',
  styleUrls: ['./store-edit-step2.component.css']
})
export class StoreEditStep2Component implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storeService: StoreService,
    private missionInteractionService: MissionInteractionService
  ) {}

  visibleConfirmView: boolean = false;
  product: Product;
  storeRecord: StoreRecord;
  storeRecordTemp: any = {};
  ngOnInit() {
    let r: any = this.activatedRoute.snapshot.queryParamMap.get('productID');
    console.log(r);

    this.activatedRoute.data.subscribe((data: { product: Product }) => {
      if (data.product) {
        this.product = data.product;
      }
    });
  }

  doBack(event) {
    this.router.navigateByUrl('store/edit/step1');
  }
  doSubmit(event) {
    this.visibleConfirmView = true;
  }
  doComfirmSubmit() {
    this.visibleConfirmView = false;
    this.storeRecord = {
      productID: this.product.id,
      userID: 1,
      instuctions: this.storeRecordTemp.instuctions,
      quantity: this.storeRecordTemp.quantity,
      price: this.storeRecordTemp.price,
      remark: this.storeRecordTemp.remark
    };
    this.storeService
      .postStoreRecord(this.storeRecord)
      .subscribe((res: any) => {
        if (res.code === 'ok') {
          this.router.navigateByUrl('/store/list');
          let message: Message = {
            key: 'tc',
            severity: 'success',
            summary: '系统提示',
            detail: '成功更新库存'
          };
          this.missionInteractionService.notification(message);
        }
      });
  }
}
