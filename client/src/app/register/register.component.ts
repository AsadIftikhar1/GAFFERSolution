import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl,Validators,FormBuilder,NgForm} from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //To GEt data from the form we have use here Reactive Form

  // registerForm:FormGroup=new FormGroup({
  //   name:new FormControl(null,Validators.required),
  //   email:new FormControl(null,[Validators.email,Validators.required]),
  //   username:new FormControl(null,Validators.required),
  //   password:new FormControl(null,Validators.required),
  //   cpass:new FormControl(null,Validators.required)

  // })
  constructor(private router:Router,
    private userService:UserService,
    private formBuilder:FormBuilder,) { }

    registerForm:FormGroup;

    name:string='';
    email:string='';
    username:string='';
    password:string='';
    cpass:string='';

  ngOnInit() {
    
    this.registerForm=this.formBuilder.group({
      'name':[null,Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
        // Validators.pattern('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
      ])],
      'email':[null,Validators.compose([
        Validators.required,
        Validators.minLength(13),
        Validators.maxLength(27),
      ])],
      'username':[null,Validators.compose([
        Validators.required,
        Validators.minLength(14),
        Validators.maxLength(20),
      ])],
      'password':[null,Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ])],
      'cpass':[null,Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ])]
    })
  }
  // textValidator(control){
  //   if(control.value.length<4){
  //     return{
  //       'username':true
  //     };
  //   }
  // }
  moveToLogin(){
    this.router.navigate(['/login']);
  }
  //To call the service and pass our form Values to our Express Server

  register(form:NgForm){
    if(!this.registerForm.valid || (this.registerForm.controls.password.valid!=this.registerForm.controls.cpass.valid)){
      console.log('It is a invlalid form');
      return;
    }
    this.userService.register(JSON.stringify(form))
    .subscribe(
      data=>{console.log(data); 
    },
      error=>console.log(error)
    )
    console.log(JSON.stringify(this.registerForm.value));
    this.router.navigate(['/login']);
  }

}
