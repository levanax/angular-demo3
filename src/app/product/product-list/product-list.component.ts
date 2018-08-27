import { Component, OnInit } from '@angular/core';
import { Product } from '../../core';
import { MatTableDataSource } from '@angular/material/table';

const data: Product[] = [
  { id: 1, name: '电阻', spec: '10欧', weight: '0.3g', remark: '' }
];

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'spec', 'weight', 'remark'];
  constructor() {}

  dataSource = new MatTableDataSource<Product>(data);

  ngOnInit() {}
}
