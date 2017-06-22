import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmptyStateExampleComponent } from '../app/empty-state/examples/empty-state-example.component';
import { FilterExampleComponent } from '../app/filters/examples/filter-example.component';
import { SampleExampleComponent } from '../app/sample/examples/sample-example.component';
import { SearchHighlightExampleComponent } from '../app/pipes/examples/search-highlight-example.component';
import { SortExampleComponent } from '../app/sort/examples/sort-example.component';
import { ToastNotificationExampleComponent } from '../app/notification/examples/toast-notification-example.component';
import { ToastNotificationListExampleComponent } from '../app/notification/examples/toast-notification-list-example.component';
import { WelcomeComponent } from './components/welcome.component';

const routes: Routes = [{
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  }, {
    path: 'emptystate',
    component: EmptyStateExampleComponent
  }, {
    path: 'filters',
    component: FilterExampleComponent
  }, {
    path: 'sample',
    component: SampleExampleComponent
  }, {
    path: 'searchhighlight',
    component: SearchHighlightExampleComponent
  }, {
    path: 'sort',
    component: SortExampleComponent
  }, {
    path: 'toastnotification',
    component: ToastNotificationExampleComponent
  }];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
