import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  imports: [CommonModule, StoreRoutingModule, TableModule],
  declarations: [StoreListComponent]
})
export class StoreModule {}
