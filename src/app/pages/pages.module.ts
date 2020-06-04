import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';

import { NgxMaskModule } from 'ngx-mask-2';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    NgxMaskModule.forRoot(),
    HttpClientModule
  ]
})
export class PagesModule {
}
