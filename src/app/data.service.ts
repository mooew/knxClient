import { Injectable } from '@angular/core';

import { DataPoint } from './hero';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService {

  constructor(
    private http: HttpClient
  ) {}

  private dataUrl = 'http://10.0.211.155:9000/getTemperature';  // URL to web api

  getData (): Observable<DataPoint[]> {
    //console.log(this.http.get<DataPoint[]>(this.dataUrl))
    return this.http.get<DataPoint[]>(this.dataUrl)
    .pipe(
      //tap(data => this.log(`fetched data`)),
      catchError(this.handleError('getData', []))
    );
  }

  /*
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
/** Log a HeroService message with the MessageService */
private log(message: string) {
  //this.messageService.add('DataService: ' + message);
}

}
