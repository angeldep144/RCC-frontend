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
	public subtotal : number = 0;
	public sales : number = 0;
	public total : number = 0;
	
	constructor (public dataService : DataService, private apiService : ApiService) {}
	
	ngOnInit () : void {
		this.apiService.getCartItems ((body : any) : void => {
			this.dataService.user.cart = body.data;
			
			//todo refactor
			this.dataService.updateUser (this.dataService.user);
		});
	}
	
	ngDoCheck () : void {
		this.subtotal = 0;
		this.sales = 0;
		this.total = 0;
		
		for (let i = 0; i < this.dataService.user.cart.length; i++) {
			if (this.dataService.user.cart [i].product.salePrice) {
				this.sales += (this.dataService.user.cart [i].product.price - this.dataService.user.cart [i].product.salePrice) * this.dataService.user.cart [i].quantity;
			}
			
			this.subtotal += this.dataService.user.cart [i].product.price * this.dataService.user.cart [i].quantity;
			
			this.total += (this.dataService.user.cart [i].product.salePrice || this.dataService.user.cart [i].product.price) * this.dataService.user.cart [i].quantity;
		}
	}
}
