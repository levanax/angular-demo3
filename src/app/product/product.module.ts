import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, ProductRoutingModule, MatTableModule],
  declarations: [ProductListComponent]
})
export class ProductModule {}
