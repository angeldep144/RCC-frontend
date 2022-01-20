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
  router: any;
  
  user:User=<User>{}

  constructor(private apiServ:ApiService) { }

  ngOnInit(): void {
  }

  registerUser(){
    let formData:FormData = new FormData();
    formData.append("username", (this.usernameInput));
    formData.append("password", (this.passwordInput));
    formData.append("firstname", (this.firstNameInput));
    formData.append("lastname", (this.lastNameInput));
    formData.append("email",(this.emailInput));

    /*
    this.apiServ.register(formData).subscribe({next: (responseBody: { data: any; }) => {
      console.log(responseBody);
      if(responseBody.data){
        this.router.navigate(["../"]);
      }
    },
    error: (badRequest: { error: { response: string; }; }) => {
      this.errMessage = badRequest.error.response;
    }})
    */
  }

}
