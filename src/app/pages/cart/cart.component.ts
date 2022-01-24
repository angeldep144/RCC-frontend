import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
	host: {
		class: "page flexColumnTop extraLargeGap"
	}
})
export class CartComponent implements OnInit {
	constructor (public dataService : DataService, private apiService : ApiService) {}

	ngOnInit () : void {
		this.apiService.getCartItems ((body : any) : void => {
			this.dataService.user.cart = body.data;
			
			//todo refactor
			this.dataService.updateUser (this.dataService.user);
		});
	}
}
