import { Component, OnInit } from '@angular/core';
import {
  MissionInteractionService,
  StoreService,
  ProductService,
  Product
} from '../../core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-store-edit-step1',
  templateUrl: './store-edit-step1.component.html',
  styleUrls: ['./store-edit-step1.component.css']
})
export class StoreEditStep1Component implements OnInit {
  cols: any[];
  products: Product[];
  selectedProducts: Product[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cols = [
      { field: 'id', header: '编号' },
      { field: 'name', header: '名称' },
      { field: 'spec', header: '规格' },
      { field: 'weight', header: '重量' },
      { field: 'remark', header: '备注' }
    ];
    this.route.data.subscribe((data: { products: Product[] }) => {
      if (data.products) {
        this.products = data.products;
      }
    });
  }
  doBack(event) {
    this.router.navigateByUrl('store/list');
  }

  doNext(event) {
    console.log(this.selectedProducts);
    this.router.navigateByUrl('store/edit/step2');
  }
}
