import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth/auth.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {Login2Component} from './login/login2/login2.component';


@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, Login2Component],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
