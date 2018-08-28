import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(protected apiService: ApiService) {}
  getProducts(): Observable<any> {
    return this.apiService.get('/products');
  }
  addProduct(product: Product): Observable<any> {
    return this.apiService.post('/products', product);
  }
  updateProduct(product: Product): Observable<any> {
    return this.apiService.put('/products', product);
  }
  deleteProduct(productID: number): Observable<any> {
    return this.apiService.delete(`/products/${productID}`);
  }
}
