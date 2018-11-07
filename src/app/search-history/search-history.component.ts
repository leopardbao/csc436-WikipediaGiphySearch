import { Component, OnInit } from '@angular/core';
import { SearchHistory } from '../models/search-history';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  historyRecords: SearchHistory[];

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyRecords = this.historyService.getRecords();
    console.log(this.historyRecords);
  }
  
}
