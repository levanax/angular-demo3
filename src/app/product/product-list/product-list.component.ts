import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, MissionInteractionService, ProductService } from '../../core';
import { ProductModule } from '../product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(
    private missionInteractionService: MissionInteractionService,
    private productService: ProductService
  ) {}
  displayEditDialog: boolean = false;
  product: Product;
  selectProduct: Product;
  newProduct: boolean;
  products: Product[];
  cols: any[];

  ngOnInit() {
    console.debug('ngOnInit ...');
    this.missionInteractionService.showMenuTools(true);

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'name', header: 'name' },
      { field: 'spec', header: 'spec' },
      { field: 'weight', header: 'weight' },
      { field: 'remark', header: 'remark' }
    ];
    this.refreshList();
  }
  refreshList() {
    this.productService.getProducts().subscribe(res => {
      if (res.code === 'ok') {
        this.products = res.data;
      }
    });
  }

  showDialogToAdd() {
    this.newProduct = true;
    this.product = {
      id: 0,
      name: '',
      spec: '',
      weight: '',
      remark: ''
    };
    this.displayEditDialog = true;
  }
  save() {
    if (this.newProduct) {
      this.productService.addProduct(this.product).subscribe(res => {
        if (res.code === 'ok') {
          this.refreshList();
        }
      });
    } else {
      this.productService.updateProduct(this.product).subscribe(res => {
        if (res.code === 'ok') {
          this.refreshList();
        }
      });
    }
    this.displayEditDialog = false;
  }
  delete() {
    if (!this.newProduct) {
      this.productService.deleteProduct(this.product.id).subscribe(res => {
        if (res.code === 'ok') {
          this.refreshList();
        }
      });
    }
    this.displayEditDialog = false;
  }
  onRowSelect(event) {
    this.newProduct = false;
    this.product = this.copyProduct(event.data);
    this.displayEditDialog = true;
  }
  copyProduct(product: Product): Product {
    let result: Product = {
      id: 0,
      name: '',
      spec: '',
      weight: '',
      remark: ''
    };
    for (let key in product) {
      result[key] = product[key];
    }
    return result;
  }
}
