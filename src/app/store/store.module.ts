import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './store-list/store-list.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { StoreEditStep1Component } from './store-edit-step1/store-edit-step1.component';
import { StoreEditStep2Component } from './store-edit-step2/store-edit-step2.component';
import { MatRadioModule } from '@angular/material/radio';
import { DialogModule } from 'primeng/dialog';
import { StoreRecordsComponent } from './store-records/store-records.component';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { StoreSummaryComponent } from './store-summary/store-summary.component';
import {CalendarModule} from 'primeng/calendar';
import { StoreSummaryChartComponent } from './store-summary-chart/store-summary-chart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreRoutingModule,
    TableModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    DialogModule,
    DropdownModule,
    InputTextModule,CalendarModule
  ],
  exports: [],
  declarations: [
    StoreListComponent,
    StoreEditStep1Component,
    StoreEditStep2Component,
    StoreRecordsComponent,
    StoreSummaryComponent,
    StoreSummaryChartComponent
  ]
})
export class StoreModule {}
