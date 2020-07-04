import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent,
  },
  {
     path: 'employee',
    loadChildren: './module/employee/employee.module#EmployeeModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
