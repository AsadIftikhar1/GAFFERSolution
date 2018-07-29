import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup, FormControl, Validators,FormBuilder,NgForm } from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    // loginForm:FormGroup=new FormGroup({
    //      username:new FormControl(null,Validators.required),
    //      password:new FormControl(null,Validators.required)
    // })
  constructor(private router:Router,
              private user:UserService,
               private formBuilder:FormBuilder) { }

               loginForm:FormGroup;

               username:string='';
               password:string='';

  ngOnInit() {

  this.loginForm=this.formBuilder.group({
    'username':[null,Validators.compose([
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(20),
    ])],
    'password':[null,Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
    ])]
  })
  }
  //This is doing nothing just on Login Component when the 
  //User click Register button it takes it to Register Page

  moveToRegister(){
      this.router.navigate(['/register']);
  }
  //Now we have to Bind this function in our Html file
  login(form:NgForm){
    if(!this.loginForm.valid){
      console.log('Invalid');
      return;
    }
    // console.log(JSON.stringify(this.loginForm.value));
    
    //Calling the function from the Service

    this.user.login(JSON.stringify(form))
    .subscribe(
      data=>{console.log(data);this.router.navigate(['/products']);},
      error=>console.error(error)
        )
  }
}
