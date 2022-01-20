import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errMessage: string = "";
  usernameInput: string = "";
  passwordInput: string = "";
  firstNameInput: string = "";
  lastNameInput: string = "";
  emailInput: string = "";
  //apiServ: any;
  //router: any;
  
  user:User=<User>{}

  constructor(private apiServ:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
   
    
    this.user.username = this.usernameInput;
    this.user.password = this.passwordInput;
    this.user.firstName = this.firstNameInput;
    this.user.lastName = this.lastNameInput;
    this.user.email = this.emailInput;

    console.log(this.user.password)
    if(this.user != null)
    {
    this.apiServ.register(this.user,undefined,(message:any)=>{
      this.errMessage = message;
      console.log(message);
      if(message.success){this.router.navigate(['login']);}
    })
    }
  
    
  }

}
