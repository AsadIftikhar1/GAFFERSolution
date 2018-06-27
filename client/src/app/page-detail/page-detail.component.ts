import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Http,Response} from '@angular/http';
import {PageService} from '../page.service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})

export class PageDetailComponent implements OnInit {
 
  private apiUrl="http://localhost:3000/pages"

  pages={};
  // data={};

  constructor(private route:ActivatedRoute,private page:PageService,private router: Router,private http:Http) { }

  ngOnInit() {
    this.getpage(this.route.snapshot.params['title']);
    // console.log(this.pages.title);

  }
  getpage(title) {
    this.page.getPage(title)
      .subscribe(data => {
        console.log(data);
        this.pages = data;
      }, err => {
        console.log(err);
      });
  }

}
