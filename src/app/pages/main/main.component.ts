import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css'],
	host: {
		class: "page flexColumnTop"
	}
})
export class MainComponent implements OnInit {
	constructor (public dataService : DataService, private apiService : ApiService) {}
	
	searchQuery : string = "";
	
	ngOnInit () : void {}
	
	search = () : void => {
		if (this.searchQuery === "") {
			return;
		}
	};
}
