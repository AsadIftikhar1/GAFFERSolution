import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000/admin/categories";
const apiUrl2 = "http://localhost:3000/admin/categories/details-category";
const apiUrl5 = "http://localhost:3000/admin/categories/delete-category";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  getCategories(): Observable<any> {

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

 getCategory(id: string): Observable<any>{
  const url= `${apiUrl2}/${id}`;
  return this.http.get(url,httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError)
  )
}
deleteCategory(id: string): Observable<{}> {
  const url = `${apiUrl5}/${id}`;
  return this.http.get(url, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}
}

