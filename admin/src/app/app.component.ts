import { Component } from '@angular/core';
// import {PageService} from './page.service';

@Component({
  
  selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ["../assets/public/css/adminstyle.css",
            "../assets/public/css/demo.css",
          "../assets/public/css/style.css"
        ,"../assets/public/css/stylesheet.css"],
  // providers:[PageService]
})
export class AppComponent {
  title = 'app';
}
