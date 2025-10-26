
import { Signup } from './auth/components/signup/signup';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Login } from './auth/components/login/login';
import { AppRoutingModule } from './app-routing-module';
import { DemoAngularMaterailModule } from './DemoAngularMaterailModule';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    DemoAngularMaterailModule,
    ReactiveFormsModule,
    FormsModule,
    Login,
    Signup,
  ],
})
export class AppModule {}
