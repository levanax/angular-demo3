import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
@NgModule({
  imports: [CommonModule, MenuModule],
  declarations: [],
  exports: [MenuModule]
})
export class ShareModule {}
