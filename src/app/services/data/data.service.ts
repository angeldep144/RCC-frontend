import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
	// public products : Product [] = [];
	
	public products : Product [] = [
		{
			id: 1,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 0,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 2,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 3,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 0,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 4,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 5,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 6,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 0,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 7,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 0,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 8,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 0,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 9,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 10,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 11,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 12,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 13,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		},
		
		{
			id: 14,
			name: "Roomba",
			description: "Description of the project",
			price: 52.67,
			salePrice: 35.00,
			imageUrl: "",
			stock: 10
		}
	];
	
	constructor () {}
}