import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
	selector: 'app-cart-item',
	templateUrl: './cart-item.component.html',
	styleUrls: ['./cart-item.component.css'],
	host: {
		style: "width: 100%;"
	}
})
export class CartItemComponent implements OnInit {
	@Input ()
	public cartItem : CartItem = <CartItem> {};

	constructor () {}

	ngOnInit () : void {
		
	}
}
