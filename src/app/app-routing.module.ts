import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  {
    loadChildren: './user/user.module#UserModule',
    path: 'user',
    data: { preload: false }
  },
  {
    loadChildren: './product/product.module#ProductModule',
    path: 'product',
    data: { preload: false }
  },
  {
    loadChildren: './store/store.module#StoreModule',
    path: 'store',
    data: { preload: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
