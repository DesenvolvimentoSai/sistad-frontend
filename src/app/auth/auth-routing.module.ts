import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AuthComponent} from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login/login2/login2.component';
import { PagesModule } from '../pages/pages.module';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login2/:cpf', component: Login2Component },
  { path: 'members', loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
