import { Component, OnInit } from '@angular/core';
import {PageService} from '../page.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  pages:any;

  displayedColumns = ['id','title', 'slug','createdAt','updatedAt'];
dataSource = new PageDataSource(this.page);

  constructor(private page:PageService) { }

  ngOnInit() {
    this.page.getPages()
    .subscribe(res => {
      console.log(res);
      this.pages = res;
    }, err => {
      console.log(err);
    })
  }


}
export class PageDataSource extends DataSource<any> {
  constructor(private page: PageService) {
    super()
  }

  connect() {
    return this.page.getPages();
  }

  disconnect() {

  }
}