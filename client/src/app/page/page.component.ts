import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../page.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Http,Response} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private apiUrl = "http://localhost:3000/admin/pages";  

  pages={};
  constructor(private route:ActivatedRoute,private page:PageService, private router: Router,private http:Http) { }

  ngOnInit() {
    this.getPages();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiUrl)
    .pipe(map((res:Response)=>res.json()))
  }
  getPages(){
    this.getData().subscribe(pages=>{
      console.log(pages);
      this.pages=pages;
    })
    }
}
