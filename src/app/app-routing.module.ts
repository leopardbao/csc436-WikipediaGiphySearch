import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchHistoryComponent} from './search-history/search-history.component';
import {SearchPageComponent} from './search-page/search-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: SearchPageComponent },
  { path: 'history', component: SearchHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
