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
	
	constructor (private activatedRoute: ActivatedRoute, private apiService : ApiService) {}

	ngOnInit () : void {
		this.activatedRoute.params.subscribe (paramaters => {
			this.apiService.getProduct (parseInt (paramaters ["productId"]), (data : any) : void => {
				this.product = data.data;
			});
		});
	}
}