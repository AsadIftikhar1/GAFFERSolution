import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {

  categories={};

  constructor(private route:ActivatedRoute,private category:CategoryService, private router: Router,private _toastr:ToastrService) { }

  ngOnInit() {
    this.getCategoryDetails(this.route.snapshot.params['id']);
    
  }

  getCategoryDetails(id) {
    this.category.getCategory(id)
      .subscribe(data => {
        console.log(data);
        this.categories = data;
      }, err => {
        console.log(err);
      });
  }
  deleteCategory(id) {
    this.category.deleteCategory(id)
      .subscribe(res => {
          this.router.navigate(['/admin/categories']);
          this._toastr.success('Category has been Deleted');

        }, (err) => {
          this.handleError(err);
          console.log(err);
        }
      );
  }
  
  private handleError(err){
    console.log(err);
    this._toastr.error('Could not process request');
  }

}
