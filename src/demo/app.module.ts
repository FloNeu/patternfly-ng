//import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SampleExampleModule } from '../app/sample/examples/sample-example.module';

// Main areas
//  import example modules

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    SampleExampleModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
