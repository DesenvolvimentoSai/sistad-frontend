import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModule } from './shared/filters/pipe.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
