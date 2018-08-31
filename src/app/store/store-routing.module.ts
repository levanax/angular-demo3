import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreListComponent } from './store-list/store-list.component';
import { StoreEditStep1Component } from './store-edit-step1/store-edit-step1.component';
import { StoreEditStep2Component } from './store-edit-step2/store-edit-step2.component';
import { StoreEditStep1ResolverService } from './store-edit-step1/store-edit-step1-resolver.service';
import { StoreEditStep2ResolverService } from './store-edit-step2/store-edit-step2-resolver.service';
import { StoreRecordsComponent } from './store-records/store-records.component';

const routes: Routes = [
  { path: 'list', component: StoreListComponent },
  {
    path: 'edit/step1',
    component: StoreEditStep1Component,
    resolve: {
      products: StoreEditStep1ResolverService
    }
  },
  {
    path: 'edit/step2',
    component: StoreEditStep2Component,
    resolve: {
      product: StoreEditStep2ResolverService
    }
  },
  {
    path: 'records',
    component: StoreRecordsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreRoutingModule {}
