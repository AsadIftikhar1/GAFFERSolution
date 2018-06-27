import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Http,Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private apiUrl = "http://localhost:3000/cart/add/";
  data:any={};
  cart:any={};

  constructor(private http:Http,private router: Router,private route:ActivatedRoute) { 
  }

    
  ngOnInit() {
    this.getCart(this.route.snapshot.params['title'])
    .subscribe((res) => { console.log(res)}) 

    
    }
  getCart(title: string): Observable<any>{
    const url= `${this.apiUrl}${title}`;
    console.log(title)
  
    return this.http.get(url)
    .pipe(
      map((res:Response) => res.json()))
  }
  // getCarts(title:string) {
  //   this.cart.getCart(title)
  //     .subscribe(data => {
  //       console.log(data);
  //       this.data = data;
  //     }, err => {
  //       console.log(err);
  //     });
  //   }
  }

