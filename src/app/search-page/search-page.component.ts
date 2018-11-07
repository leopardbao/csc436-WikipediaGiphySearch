import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
import { WikipediaService } from '../wikipedia.service';
import { HistoryService } from '../history.service';
import { Wikipedia } from '../models/wikipedia';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchText: string;
  wikipediaResults: Wikipedia[];
  giphyResults: Object[];
  isShow: boolean;
  constructor(private wikipediaService: WikipediaService,
    private historyService: HistoryService,
    private giphyService: GiphyService, ) { 
      this.wikipediaResults = [];
      this.giphyResults = [];
      this.isShow = false;
    }

  ngOnInit() {
  }

  search(): void {
    this.wikipediaResults = [];
    this.giphyResults = [];
    Promise.all([
      this.wikipediaService
      .search(this.searchText),

      this.giphyService
      .search(this.searchText)

    ])
    .then(([wikiResult, giphyResult])=>{
      this.wikipediaResults = wikiResult;
      this.giphyResults = giphyResult;
      this.isShow = true;
    })
    this.historyService.addHistory(this.searchText);
    
  }

}
