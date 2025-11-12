import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './auth/components/login/login';
import { Signup } from './auth/components/signup/signup';
import { Home } from './home/home';
 

export const routes: Routes = [
   { path: '', component: Home},
  {path:"login",component:Login},
  {path:"signup",component:Signup},
  {path:"admin" ,loadChildren:()=>import("./modules/admin/admin-module").then(e=> e.AdminModule)},
   {path:"employee" ,loadChildren:()=>import("./modules/employee/employee-module").then(e=> e.EmployeeModule)},
  


];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
