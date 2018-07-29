import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProdcatService} from '../prodcat.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Http,Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Location } from '@angular/common';


@Component({
  selector: 'app-prodcat',
  templateUrl: './prodcat.component.html',
  styleUrls: ['./prodcat.component.css']
})
export class ProdcatComponent implements OnInit {

  private apiUrl = "http://localhost:3000/admin/products";  
  private apiUrl2 = "http://localhost:3000/admin/categories";
  private apiUrl3 = "http://localhost:3000/products";

  prodcat=[];
  data:any =[];
  data2:any =[];


  constructor(private route:ActivatedRoute,
    private product:ProdcatService, 
    private router: Router,
    private http:Http,
    private location: Location) { }

  ngOnInit() {
    this.getProdcat(this.route.snapshot.params['title']);
    this.getProducts();
    this.getData();
    this.getCategories();
    this.getCat();

  }
  getProdcat(title) {
    this.product.getProduct(title)
      .subscribe(data => {
        console.log(data);
        this.prodcat = data;
      }, err => {
        console.log(err);
      });
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

refreshPage() {
  location.reload()
}
}
