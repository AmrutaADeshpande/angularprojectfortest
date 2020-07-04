import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { FormsModule } from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [EmployeeaddComponent, EmployeelistComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule { }
