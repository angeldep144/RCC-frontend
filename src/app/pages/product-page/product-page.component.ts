import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-product-page',
	templateUrl: './product-page.component.html',
	styleUrls: ['./product-page.component.css'],
	host: {
		class: "page flexColumnTop extraLargeGap"
	}
})
export class ProductPageComponent implements OnInit {
	public product : Product = <Product> {};
	public quantityInput: number = 1;
	cartMessage: boolean = false;
		
	constructor (private activatedRoute: ActivatedRoute, private apiService : ApiService) {}

	ngOnInit () : void {
		this.activatedRoute.params.subscribe (paramaters => {
			this.apiService.getProduct (parseInt (paramaters ["productId"]), (body : any) : void => {
				this.product = body.data;
			});
		});
	}

	ngDoCheck(){

	}

	onQuantityInput(event: any){
		console.log(event.value);
		if (!event.target.value.match ("\d+")) {
			 event.target.value = "1"; 
			} 
	}

	addToCart(quantityInput: number){
		
		console.log(quantityInput, this.product.id);
		//will take in product id and quantity added
		//post request to cart
		//returns message to user, items added to cart
		// if successful, will show method
		this.cartMessage = true;
	}

}