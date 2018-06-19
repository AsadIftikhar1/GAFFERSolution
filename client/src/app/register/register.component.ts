import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl,Validators} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //To GEt data from the form we have use here Reactive Form

  registerForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.email,Validators.required]),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    cpass:new FormControl(null,Validators.required)

  })
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit() {
  }
  moveToLogin(){
    this.router.navigate(['/login']);
  }
  //To call the service and pass our form Values to our Express Server

  register(){
    if(!this.registerForm.valid || (this.registerForm.controls.password.valid!=this.registerForm.controls.cpass.valid)){
      console.log('It is a invlalid form');
      return;
    }
    this.userService.register(JSON.stringify(this.registerForm.value))
    .subscribe(
      data=>{console.log(data); this.router.navigate(['/login']);},
      error=>console.log(error)
    )
    // console.log(JSON.stringify(this.registerForm.value));
  }
}
