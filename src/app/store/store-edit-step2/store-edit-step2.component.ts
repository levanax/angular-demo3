import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import {
  MissionInteractionService,
  StoreService,
  ProductService,
  Product
} from '../../core';

@Component({
  selector: 'app-store-edit-step2',
  templateUrl: './store-edit-step2.component.html',
  styleUrls: ['./store-edit-step2.component.css']
})
export class StoreEditStep2Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let r: any = this.activatedRoute.snapshot.queryParamMap.get('productID');
    console.log(r);

    this.activatedRoute.data.subscribe((data: { product: Product }) => {
      if (data.product) {
      }
    });
  }

  doBack(event) {
    this.router.navigateByUrl('store/edit/step1');
  }
  doSubmit(event) {}
}
