import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { WikipediaService } from './wikipedia.service';
import { GiphyService } from './giphy.service';
import { HistoryService } from './history.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchHistoryComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    WikipediaService,
    GiphyService,
    HistoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
