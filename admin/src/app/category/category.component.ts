import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any;

  displayedColumns = ['id','title', 'slug','createdAt','updatedAt'];
  dataSource = new CategoryDataSource(this.category);


  constructor(private category:CategoryService,
              private _toastr:ToastrService) { }

  ngOnInit() {
  }

}
export class CategoryDataSource extends DataSource<any> {
  constructor(private category: CategoryService) {
    super()
  }

  connect() {
    return this.category.getCategories();
  }

  disconnect() {

  }
}