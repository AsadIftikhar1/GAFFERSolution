import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "http://localhost:3000/admin/pages";
const apiUrl2 = "http://localhost:3000/admin/pages/details-page";
const apiUrl3 = "http://localhost:3000/admin/pages/add-page";
const apiUrl4 = "http://localhost:3000/admin/pages/edit-page";
const apiUrl5 = "http://localhost:3000/admin/pages/delete-page";


@Injectable({
  providedIn: 'root'
})

export class PageService {

  constructor(private http: HttpClient,
              private _toastr:ToastrService) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      this.handlEError(error);
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  getPages(): Observable<any> {

    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
 getPage(id: string): Observable<any>{
  const url= `${apiUrl2}/${id}`;
  return this.http.get(url,httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError)
  )
}
postPage(data):Observable<any>{
  return this.http.post(apiUrl3,data,httpOptions)
  .pipe(
    catchError(this.handleError)
  )
}

getPagee(id: string): Observable<any>{
  const url= `${apiUrl4}/${id}`;
  return this.http.get(url,httpOptions).pipe(
    map(this.extractData),
    catchError(this.handleError)
  )
}

updatePage(id:string,data): Observable<any> {

  const url= `${apiUrl4}/${id}`;
  
  return this.http.post(apiUrl4,data,httpOptions)
  .pipe(
    catchError(this.handleError)
  )
}

deletePage(id: string): Observable<{}> {
  const url = `${apiUrl5}/${id}`;
  return this.http.get(url, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
}
private handlEError(err){
  console.log(err);
  this._toastr.error('Cannot connect to server');
}
}
