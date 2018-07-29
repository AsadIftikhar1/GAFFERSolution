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

  pages:any;  //The response will save in this object or array any type

  displayedColumns = ['id','title', 'slug','createdAt','updatedAt'];
  
  //These columns name should be present while showing otherwise it will gave errors
  //and they should be in a same sequence

  dataSource = new PageDataSource(this.page); 
  //Data Source is something through which 
  //the data will be shown on client side using Angular Material

  constructor(private page:PageService) { }
//here page is something which is getting everything from
//PageService and now we can PageService anywhere to get response
  
ngOnInit() {
    this.page.getPages()     //it is saying getPages method from pageService
    .subscribe(res => {
      console.log(res);
      this.pages = res;
    }, err => {
      console.log(err);
    })
  }
  // http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
  //it is same as this its come in init or constructor whenever a response needs to be saved

}
//here we are saying that after this function is render disconnect 
//Data Source Extends should be of the same name the Component but in Capital letters
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