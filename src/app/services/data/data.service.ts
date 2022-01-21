import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { User } from 'src/app/models/User';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	public user : User = <User> {};
	
	public products : Product [] = [];
	
	constructor () {
		this.user = localStorage ["user"] || {};
	}
}