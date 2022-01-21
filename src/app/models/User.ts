import { Product } from 'src/app/models/Product';
import { CartItem } from './CartItem';

export interface User {
	id : number;
	firstName : string;
	lastName : string;
	username : string;
	password : string;
	email: string;
	cart : CartItem [];
};