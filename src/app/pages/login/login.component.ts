import { Component, OnInit } from '@angular/core';
import {ApiService} from 'src/app/services/api/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usernameInput: string = "";
  passwordInput: string = "";

  constructor(private apiServ:ApiService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.apiServ.createSession(this.usernameInput,this.passwordInput)
  }

}
