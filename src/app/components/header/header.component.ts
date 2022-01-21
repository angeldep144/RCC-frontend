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
	constructor (public router : Router, private apiService : ApiService, public dataService : DataService) {}
	
	logout = () : void => {
		this.apiService.deleteSession ((body : any) : void => {
			this.dataService.updateUser (<User> {});
		});
	};
	
	ngOnInit () : void {}
}