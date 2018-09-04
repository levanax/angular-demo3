import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors';

import {
  UserService,
  ApiService,
  ProductService,
  JwtService
} from './services';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    UserService,
    ApiService,
    ProductService,
    JwtService
  ]
})
export class CoreModule {}
