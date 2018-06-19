import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm:FormGroup=new FormGroup({
      email:new FormControl(null,[Validators.email,Validators.required]),
      password:new FormControl(null,Validators.required)
    })
  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {
  
  }
  //This is doing nothing just on Login Component when the 
  //User click Register button it takes it to Register Page

  moveToRegister(){
      this.router.navigate(['/register']);
  }
  //Now we have to Bind this function in our Html file
  login(){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }
    // console.log(JSON.stringify(this.loginForm.value));
    this.user.login(JSON.stringify(this.loginForm.value))
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/user']);},
      error=>console.error(error)
        )
  }
}
