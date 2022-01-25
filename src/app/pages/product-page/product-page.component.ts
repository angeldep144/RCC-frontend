import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api/api.service';
import { DataService } from 'src/app/services/data/data.service';

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
	inCart: boolean = false;

	userRole: string = "USER";
	
	constructor (private activatedRoute: ActivatedRoute, private apiService : ApiService, private dataService : DataService, private router: Router) {}
	

	onQuantityInput = (event : any) : void => {
		//todo allow backspacing but when unfocus set to 1 if still blank
		//todo quantityInput should be updated automatically
		
		event.target.value = Math.max (1, event.target.value);
		
		this.quantityInput = event.target.value;
	}
	
	addToCart = (quantityInput : number) : void => {
		this.inCart = true;
		
		this.apiService.createCartItem (this.product.id, this.quantityInput, (body : any) : void => {
			
			this.dataService.user.cart = body.data;
			localStorage ["user"] = JSON.stringify(this.dataService.user);
			
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
				
				if (this.dataService.user.username) {
					for (let i = 0; i < this.dataService.user.cart.length; i++) {
						if (this.product.id === this.dataService.user.cart [i].product.id) {
							this.inCart = true;
							
							break;
						}
					}
				}
			});
		});

		/* ADMIN TEAM ADDITION */
		console.log(this.dataService);
		if (this.dataService.user){
			this.userRole = this.dataService.user.role.role;
		}
	}

	/* ADMIN TEAM ADDITION */
	editProduct(id: number) {
		this.router.navigate([`/admin/${this.product.id}`]);
	}
}