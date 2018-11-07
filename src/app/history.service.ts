import { Injectable } from '@angular/core';
import { SearchHistory } from './models/search-history'

@Injectable()
export class HistoryService {
  searchRecords: SearchHistory[]

  constructor() {
    this.searchRecords = [];
  }

  addHistory(searchWords: string) {
    var currentdate = new Date(); 
    var timestamp = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    var record = new SearchHistory(timestamp, searchWords);
    this.searchRecords.push(record);
  }

  getRecords() {
    return this.searchRecords;
  }
}
