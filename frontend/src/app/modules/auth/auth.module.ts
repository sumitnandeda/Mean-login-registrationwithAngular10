import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [LoginComponent, ForgetPasswordComponent, PageNotFoundComponent, RegistrationComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
