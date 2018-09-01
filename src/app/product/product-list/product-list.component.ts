import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product, ProductService } from '../../core';
import { ProductModule } from '../product.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}
  displayEditDialog: boolean = false;
  product: Product;
  selectProduct: Product;
  newProduct: boolean;
  products: Product[];
  cols: any[];

  ngOnInit() {
    console.debug('ngOnInit ...');

    this.cols = [
      { field: 'id', header: '编号' },
      { field: 'name', header: '名称' },
      { field: 'spec', header: '规格' },
      { field: 'weight', header: '重量' },
      { field: 'remark', header: '备注' }
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
