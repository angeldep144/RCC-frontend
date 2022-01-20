import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  apiServ: any;
  router: any;
  

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){
    let formData:FormData = new FormData();
    formData.append("username", (this.usernameInput));
    formData.append("password", (this.passwordInput));
    formData.append("user_first_name", (this.firstNameInput));
    formData.append("user_last_name", (this.lastNameInput));

    this.apiServ.register(formData).subscribe({next: (responseBody: { data: any; }) => {
      console.log("this is reponse")
      console.log(responseBody);
      if(responseBody.data){
        this.router.navigate(["../"]);
      }
    },
    error: (badRequest: { error: { response: string; }; }) => {
      this.errMessage = badRequest.error.response;
    }})

  }

}
