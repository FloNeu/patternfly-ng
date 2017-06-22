//import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Main areas
//  import example modules
import { EmptyStateExampleModule } from '../app/empty-state/examples/empty-state-example.module';
import { FilterExampleModule } from '../app/filters/examples/filter-example.module';
import { SampleExampleModule } from '../app/sample/examples/sample-example.module';
import { SearchHighlightExampleModule } from '../app/pipes/examples/search-highlight-example.module';
import { SortExampleModule } from '../app/sort/examples/sort-example.module';
import { NotificationExampleModule } from '../app/notification/examples/notification-example.module';
import { WelcomeComponent } from './components/welcome.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    EmptyStateExampleModule,
    FilterExampleModule,
    FormsModule,
    HttpModule,
    NotificationExampleModule,
    SampleExampleModule,
    SearchHighlightExampleModule,
    SortExampleModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
