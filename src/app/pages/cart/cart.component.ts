import { Component, OnInit } from '@angular/core';
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
	constructor (public dataService : DataService) {}

	ngOnInit (): void {}
}
