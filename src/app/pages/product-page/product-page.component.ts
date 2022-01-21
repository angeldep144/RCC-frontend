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
	inCartBtn: boolean = true;
	
	constructor (private activatedRoute: ActivatedRoute, private apiService : ApiService) {}
	
	onQuantityInput = (event : any) : void => {
		//todo allow backspacing but when unfocus set to 1 if still blank
		//todo quantityInput should be updated automatically
		
		event.target.value = Math.max (1, event.target.value);
		
		this.quantityInput = event.target.value;
	}
	
	addToCart = (quantityInput : number) : void => {
		this.inCartBtn = false;
		
		this.apiService.createCartItem (this.product.id, this.quantityInput, (body : any) : void => {
			this.cartMessage = true;
			
			setTimeout (() => {
				this.cartMessage = false;
			}, 3000);
		});
	}
	
	ngOnInit () : void {
		this.activatedRoute.params.subscribe (paramaters => {
			this.apiService.getProduct (parseInt (paramaters ["productId"]), (body : any) : void => {
				this.product = body.data;
			});
		});
	}
}