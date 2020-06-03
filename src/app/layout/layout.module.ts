import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SettingsComponent} from './settings/settings.component';

import { NgxMaskModule } from 'ngx-mask-2';
// import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent
  ]
})
export class LayoutModule {
}
