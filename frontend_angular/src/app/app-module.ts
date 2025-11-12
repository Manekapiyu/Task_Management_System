
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Login } from './auth/components/login/login';
import { AppRoutingModule } from './app-routing-module';
import { DemoAngularMaterailModule } from './DemoAngularMaterailModule';
import { provideHttpClient } from '@angular/common/http';
import { Signup } from './auth/components/signup/signup';
import { AuthService } from './auth/services/auth/auth.service';


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
   providers: [
    provideHttpClient(),
  ],
})
export class AppModule { }
