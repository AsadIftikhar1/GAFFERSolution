import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page.service';
import {FormControl,FormGroupDirective,FormBuilder,FormGroup,NgForm,Validators} from '@angular/forms';

@Component({
  selector: 'app-page-create',
  templateUrl: './page-create.component.html',
  styleUrls: ['./page-create.component.css']
})

export class PageCreateComponent implements OnInit {

  constructor(private router:Router,private page:PageService,private formBuilder:FormBuilder) { }

  pageForm:FormGroup;

  title:string='';
  slug:string='';
  content:string='';

  ngOnInit() {
    this.pageForm=this.formBuilder.group({
      'title':[null,Validators.required],
      'slug':[null,Validators.required],      
      'content':[null,Validators.required],
      
    })
  }
onFormSubmit(form:NgForm){
  this.page.postPage(form)
  .subscribe(res=>{
    let id=res['id'];
    this.router.navigate(['/admin/pages/details-page',id]);
  
  },(err)=>{
    console.log(err);
  })
}
}
