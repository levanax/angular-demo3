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
  },
  {
    /**
     * https://angular.cn/guide/router#refactor-the-routing-configuration-into-a-emrouting-moduleem
     * The ** path in the last route is a wildcard. The router will select this route if the requested URL doesn't match any paths for routes defined earlier in the configuration. This is useful for displaying a "404 - Not Found" page or redirecting to another route
     */
    path: '**',
    redirectTo: 'user/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
