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
  

  constructor() { }

  ngOnInit(): void {
  }

  registerUser(){

  }

}
