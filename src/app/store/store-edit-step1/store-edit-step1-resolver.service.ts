import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { StoreService, ProductService, Product } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class StoreEditStep1ResolverService implements Resolve<Product[]> {
  constructor(private ps: ProductService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> {
    return this.ps.getProducts().pipe(
      take(1),
      map(res => {
        if (res.code === 'ok') {
          return res.data;
        } else {
          // not found
          return null;
        }
      })
    );
  }
}
