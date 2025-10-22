import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing-module';
import { Signup } from './auth/components/signup/signup';
import { DemoAngularMaterailModule } from './DemoAngularMaterailModule';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DemoAngularMaterailModule,
    Signup
  ]
})
export class AppModule { }
