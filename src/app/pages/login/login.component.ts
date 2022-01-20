import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usernameInput: string = "";
  passwordInput: string = "";

  constructor(private apiServ:ApiServiceService) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.apiServ.login(this.usernameInput,this.passwordInput).subscribe(responseBody=>{
      console.log(responseBody);
    })
  }

}
