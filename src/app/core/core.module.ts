import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { UserService, ApiUserService } from './services';

@NgModule({
  imports: [BrowserModule, CommonModule, HttpClientModule],
  declarations: [],
  providers: [UserService, ApiUserService]
})
export class CoreModule {}
