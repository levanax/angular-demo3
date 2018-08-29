import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'user/login', pathMatch: 'full' },
  { loadChildren: './user/user.module#UserModule', path: 'user' },
  { loadChildren: './product/product.module#ProductModule', path: 'product' },
  { loadChildren: './store/store.module#StoreModule', path: 'store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
