import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeelistComponent
  },
  {
    path: 'employeeadd',
    component: EmployeeaddComponent
  },
  {
    path: 'employeeadd/:id',
    component: EmployeeaddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
