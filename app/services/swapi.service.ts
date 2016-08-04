// Observable Version
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

@Injectable()
export class SwapiService {
  constructor(private http: Http) { }

  private baseUrl = 'https://swapi.co/api/';

  get(what: string, index: number, wookiee: boolean): Observable<any> {

    let completeUrl: string = this.baseUrl;


    if (what !== 'root') {
      completeUrl += what + '/' + index + '/';
    }

    if (wookiee === true) {
      completeUrl += '?format=wookiee'
    }

    console.log(completeUrl);

    return this.http.get(completeUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}