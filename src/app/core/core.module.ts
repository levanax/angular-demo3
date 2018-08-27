import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService, ApiService } from './services';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [],
  providers: [UserService, ApiService]
})
export class CoreModule {}
