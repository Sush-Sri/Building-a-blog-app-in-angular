import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';

import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Idata } from '../data';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product:any): Observable<Idata> {
    return this.httpClient.post<Idata>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id:any): Observable<Idata> {
    return this.httpClient.get<Idata>(this.apiServer + '/products/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Idata[]> {
    return this.httpClient.get<Idata[]>(this.apiServer + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:any, product:string): Observable<Idata> {
    return this.httpClient.put<Idata>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id:string){
    console.log(id)
    return this.httpClient.delete<Idata>(this.apiServer + `/posts/${id}`, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error:any) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}