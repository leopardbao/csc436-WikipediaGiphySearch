import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GiphyService {
    constructor(private http: Http) {
    }

    search(query: string) {
        let url = `https://api.giphy.com/v1/gifs/search?api_key=ekFpRkUDEQSkmUjKpdUKokgt0FNoXRGU&limit=20&offset=0&rating=G&lang=en&q=${query}`;
        return this.http.get(url)
            .toPromise()
            .then(
                res => {
                  let result = [];
                  result = res.json().data;
                  return result; 
                },
            );
    }
}
