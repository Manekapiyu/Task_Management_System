import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './components/dashboard/dashboard';
import { PostTask } from './components/post-task/post-task';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
      Dashboard,
    PostTask,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
