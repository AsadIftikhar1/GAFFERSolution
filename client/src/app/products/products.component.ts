import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import {Http,Response} from '@angular/http';
// import 'rxjs/add/operators/map';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title='PRODUCTS'
  private apiUrl = "http://localhost:3000/admin/products";
  private apiUrl2 = "http://localhost:3000/admin/categories";
  private apiUrl3 = "http://localhost:3000/products";

  data:any =[];
  data2:any =[];


  constructor(private route:ActivatedRoute, private router: Router,private http:Http) {
    this.getProducts();
    this.getData();
    this.getCategories();
    this.getCat();
   
   }

   
  getData(){
      return this.http.get(this.apiUrl)
      .pipe(map((res:Response)=>res.json()))
  }
  getProducts(){
    this.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
  getCat(){
    return this.http.get(this.apiUrl2)
    .pipe(map((res:Response)=>res.json()))
}
 getCategories(){
  this.getCat().subscribe(data2=>{
    console.log(data2);
    this.data2=data2;
  })
}
getProdCat(category: string): Observable<any>{
  const url= `${this.apiUrl3}/${category}`;
  return this.http.get(url)
  .pipe(map((res:Response)=>res.json())
  )
}


}
