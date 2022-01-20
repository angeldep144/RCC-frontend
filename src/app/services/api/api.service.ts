import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "src/app/models/User";
import { environment } from "src/environments/environment";

@Injectable ({
	providedIn: "root"
})
export class ApiService {
	constructor (private httpClient : HttpClient, private router : Router) {}
	
	handleResponse = async (response : Observable <any>, callback? : Function, errorCallback? : Function) : Promise <any> => {
		const handler = async (body : any) : Promise <any> => {
			//todo remove, for debugging/presentation
			console.log (body);
			
			if (body.success) {
				if (typeof callback !== "undefined") {
					await callback (body);
				}
			}
			
			else {
				if (typeof errorCallback !== "undefined") {
					errorCallback (body);
				}
				
				else {
					alert (body.message);
				}
			}
			
			if (body.redirect !== undefined && body.redirect !== null) {
				this.router.navigate ([body.redirect]);
			}
		};
		
		//send body from response to handler (HttpErrorResponses keep body in error.error)
		response.subscribe ({
			next: handler,
			
			error: (error : HttpErrorResponse) : void => {
				handler (error.error);
			}
		});
	}
	
	get = (path : string) : Observable <any> => {
		return this.httpClient.get (environment.apiBaseUrl + path, {
			withCredentials: true
		});
	}
	
	post = (path : string, body : any) : Observable <any> => {
		return this.httpClient.post (environment.apiBaseUrl + path, body, {
			withCredentials: true
		});
	}
	
	put = (path : string, body : any) : Observable <any> => {
		return this.httpClient.put (environment.apiBaseUrl + path, body, {
			withCredentials: true
		});
	}
	
	delete = (path : string) : Observable <any> => {
		return this.httpClient.delete (environment.apiBaseUrl + path, {
			withCredentials: true
		});
	}
	
	//session
	
	createSession = (identifier : string, password : string, callback? : Function, errorCallback? : Function) : void => {
		this.handleResponse (this.post ("session", {
			identifier: identifier,
			password: password
		}), callback, errorCallback);
	}

	
	deleteSession = (callback? : Function, errorCallback? : Function) : void => {
		this.handleResponse (this.delete ("session"), callback, errorCallback);
	}
	
	//product
	
	getProducts = (searchQuery : string, page : number, callback? : Function, errorCallback? : Function) : void => {
		this.handleResponse (this.get ("post?searchQuery=" + searchQuery + "&page=" + page), callback, errorCallback);
	}

	register = (user: User, callback? : Function, errorCallback? : Function) : void => {
		this.handleResponse (this.post("user",{
			user:user
		}

		))
	}
}