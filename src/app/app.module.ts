import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeModule } from './shared/filters/pipe.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PipeModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
