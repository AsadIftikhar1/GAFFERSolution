import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import { Router } from '@angular/router';
import {FormControl,FormGroupDirective,FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  constructor(private router:Router,
    private category:CategoryService,
    private formBuilder:FormBuilder,
    private _toastr:ToastrService) { }

  categoryForm:FormGroup;
  
  title:string='';
  slug:string='';

  ngOnInit() {
    this.categoryForm=this.formBuilder.group({
      'title':[null,Validators.required],
      'slug':[null,Validators.required],
    })
  }
onFormSubmit(form:NgForm){
  this.category.postCategory(form)
  .subscribe(res=>{
    let id=res['id'];
    this._toastr.success('Category has been Added Successfully');
    this.router.navigate(['/admin/categories'])
  },(err)=>{
    this.HandleError(err);
console.log(err);
  })
}
private HandleError(err){
  console.log(err);
  this._toastr.error('Could not Respond to Request');
}
}
