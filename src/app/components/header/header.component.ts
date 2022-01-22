import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	public darkTheme : boolean = false;
	
	constructor (public router : Router, private apiService : ApiService, public dataService : DataService) {}
	
	logout = () : void => {
		this.apiService.deleteSession ((body : any) : void => {
			this.dataService.updateUser (<User> {});
		});
	};
	
	setDarkTheme = (enabled : boolean) : void => {
		this.darkTheme = enabled;
		
		localStorage ["darkTheme"] = enabled;
		
		document.documentElement.style.setProperty ("--theme-background-color", this.darkTheme ? "rgba(0, 0, 0, .3)" : "rgba(255, 255, 255, .75)");
		document.documentElement.style.setProperty ("--theme-foreground-color", this.darkTheme ? "white" : "black");
	};
	
	ngOnInit () : void {
		this.setDarkTheme (localStorage ["darkTheme"] === "true");
	}
}