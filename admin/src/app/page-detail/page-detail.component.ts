import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PageService} from '../page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent implements OnInit {

  pages={};

  constructor(private route:ActivatedRoute,private page:PageService, private router: Router) { }

  ngOnInit() {
    this.getPageDetails(this.route.snapshot.params['id']);
    
  }

    getPageDetails(id) {
      this.page.getPage(id)
        .subscribe(data => {
          console.log(data);
          this.pages = data;
        }, err => {
          console.log(err);
        });
    }
    deletePage(id) {
      this.page.deletePage(id)
        .subscribe(res => {
            this.router.navigate(['/admin/pages']);
          }, (err) => {
            console.log(err);
          }
        );
    }
}
