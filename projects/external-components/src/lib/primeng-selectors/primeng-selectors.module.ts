import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PasswordExternalComponent } from './components/password-external/password-external.component';
import { TextExternalComponent } from './components/text-external/text-external.component';
import { TableExternalComponent } from './components/table-external/table-external.component';
import {TableModule} from 'primeng/table';
import { DropdownExternal } from './components/dropdown-external/dropdown-external.component';
import { ChartsExternalComponent } from './components/charts-external/charts-external.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { ToggleButton, ToggleButtonModule } from 'primeng/togglebutton';
import {ChartModule} from 'primeng/chart';


@NgModule({
  declarations: [
    PasswordExternalComponent,
    TextExternalComponent,
    TableExternalComponent,
    DropdownExternal,
    ChartsExternalComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, PasswordModule, InputTextModule, 
    TableModule, DropdownModule, ToggleButtonModule, ChartModule, NgxPaginationModule
  ],
  exports: [
    PasswordExternalComponent,
    TextExternalComponent,
    TableExternalComponent,
    TableModule,
    DropdownExternal,
    ChartsExternalComponent, PasswordModule, DropdownModule,
    DashboardComponent
  ],
  entryComponents: [
    ToggleButton
  ]
})
export class PrimengSelectorsModule { }

//Create BaseProperties class for hmi-external
