export class SearchHistory {
    timestamp: string;
    keywords: string;
    constructor(timestamp: string, keywords: string) {
        this.timestamp = timestamp;
        this.keywords =keywords;
    }
}