import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/models/Transaction';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
	selector: 'app-receipt',
	templateUrl: './receipt.component.html',
	styleUrls: ['./receipt.component.css'],
	host: {
		class: "page flexColumnTop extraLargeGap"
	}
})
export class ReceiptComponent implements OnInit {
	public transaction : Transaction = <Transaction> {};
	
	constructor (private activatedRoute : ActivatedRoute, private apiService : ApiService) {}
	
	ngOnInit () : void {
		this.activatedRoute.params.subscribe (paramaters => {
			this.apiService.getTransaction (parseInt (paramaters ["transactionId"]), (body : any) : void => {
				body.data.items = JSON.parse (body.data.items);
				
				this.transaction = body.data;
			});
		});
	}
}
