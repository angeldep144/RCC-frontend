import { Product } from 'src/app/models/Product';

export interface User {
	id : number;
	firstName : string;
	lastName : string;
	username : string;
	password : string;
	cart : Product [];
};