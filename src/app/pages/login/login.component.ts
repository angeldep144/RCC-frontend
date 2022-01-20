import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from 'src/app/services/api/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMsg: string = "";
  identifier: string = "";
  passwordInput: string = "";

  
  constructor(private apiServ:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  loginUser()
  {

    //console.log(this.apiServ.createSession(this.identifier,this.passwordInput))
    this.apiServ.createSession(this.identifier,this.passwordInput,undefined,(body:any)=>{
      console.log(body.error);
      this.errMsg = "wrong username or password";
      
      if(body.success){
        this.router.navigate(["/"])
      }
    })
    
  }

}
