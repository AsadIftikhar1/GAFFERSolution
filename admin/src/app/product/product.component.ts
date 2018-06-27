import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any;

  displayedColumns = ['id','title','images' ,'slug','desc','category','price','createdAt','updatedAt'];
  dataSource = new ProductDataSource(this.product);
  bb
  constructor(private product:ProductService) { }

  ngOnInit() {
    this.product.getProducts()
    .subscribe(res => {
      console.log(res);
      this.products = res;
    }, err => {
      console.log(err);
    })
  }


}
export class ProductDataSource extends DataSource<any> {
  constructor(private product: ProductService) {
    super()
  }

  connect() {
    return this.product.getProducts();
  }

  disconnect() {

  }
}