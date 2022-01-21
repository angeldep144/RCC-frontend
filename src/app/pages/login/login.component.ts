import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApiService} from 'src/app/services/api/api.service'
import { DataService } from 'src/app/services/data/data.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	errMsg: string = "";
	identifier: string = "";
	passwordInput: string = "";
	
	constructor(private apiServ:ApiService, private dataService : DataService, private router:Router) { }

	ngOnInit(): void {
	}

	loginUser(){
		this.apiServ.createSession(this.identifier,this.passwordInput, (body : any) : void => {
			localStorage ["user"] = JSON.stringify (body.data);
			
			this.dataService.user = body.data;
		}, (body:any)=>{
			console.log(body.error);
			this.errMsg = "wrong username or password";
		});
	}
}
