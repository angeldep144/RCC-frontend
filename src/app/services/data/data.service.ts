import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	public products : Product [] = [];
	
	constructor () {}
}