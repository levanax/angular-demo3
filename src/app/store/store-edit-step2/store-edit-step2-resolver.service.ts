import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ActivatedRoute
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { StoreService, ProductService, Product } from '../../core';

@Injectable({
  providedIn: 'root'
})
export class StoreEditStep2ResolverService implements Resolve<Product> {
  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService,
    private router: Router
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    return this.ps.getProduct(route.params['productID']).pipe(
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
