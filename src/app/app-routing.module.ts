import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Login2Component } from './auth/login/login2/login2.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'login/:erro', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'members', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path:  'login2/:cpf', component: Login2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
