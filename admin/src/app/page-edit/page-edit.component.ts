import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PageService } from '../page.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private page: PageService, private formBuilder: FormBuilder) { }

  pageForm:FormGroup;
  id:string='';
  title:string='';
  content:string='';
  slug:string='';

  ngOnInit() {
    this.getPage(this.route.snapshot.params['id']);
    this.pageForm=this.formBuilder.group({
      // 'id':[null,Validators.required],
      'title' : [null, Validators.required],
      'slug' : [null, Validators.required],      
      'content' : [null, Validators.required],
    })
  }
  getPage(id) {
    this.page.getPagee(id).subscribe(data => {
      this.id = data.id;
      this.pageForm.setValue({
        id:data.id,
        title: data.title,
        slug: data.slug,
        content: data.content,
        
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.page.updatePage(this.id, form)
      .subscribe(res => {
          let id = res['id'];
          this.router.navigate(['/admin/pages/details-page', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
  PageDetails() {
    this.router.navigate(['/admin/pages/details-page', this.id]);
  }
}
