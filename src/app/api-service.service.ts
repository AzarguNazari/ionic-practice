import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Post} from "./common/post.model";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }

    return throwError('Something went wrong. Please try again later.');
  }

  public getPostById(postId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/${postId}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // public post(endpoint: string, data: any): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //
  //   return this.http.post(`${this.apiUrl}/${endpoint}`, data, { headers })
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }
}
