import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories:any;

  displayedColumns = ['id','title', 'slug'];
 dataSource = new CategoryDataSource(this.category);

  constructor(private category:CategoryService) { }

  ngOnInit() {
    this.category.getCategories()
    .subscribe(res => {
      console.log(res);
      this.categories = res;
    }, err => {
      console.log(err);
    })
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