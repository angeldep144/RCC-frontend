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
          if (body.message.includes ("Unauthorized")) {
            localStorage.removeItem ("userId");
          }
          
          else {
            alert (body.message);
          }
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
  
  createSession = (identifier : string, password : string, callback? : Function, errorCallback? : Function) => {
    this.handleResponse (this.post ("session", {
      identifier: identifier,
      password: password
    }), callback, errorCallback);
  }
  
  deleteSession = (callback? : Function) => {
    this.handleResponse (this.delete ("session"), callback);
  }
  
  //user
  
  createUser = (user : User, callback? : Function) => {
    this.handleResponse (this.post ("user", user), callback);
  }
  
  getUsers = (callback? : Function) : void => {
    this.handleResponse (this.get ("user"), callback);
  }
  
  //todo don't use any
  updateUser = (userData : any, callback? : Function) : void => {
    this.handleResponse (this.put ("user/" + userData.id.toString (), userData), callback);
  }
  
  //post
  
  createPost = (body : string, images : ImageData [], callback? : Function) : void => {
    this.handleResponse (this.post ("post", {
      body: body,
      images: images
    }), callback);
  }
  
  getPost = (postId : number, callback? : Function) : void => {
    this.handleResponse (this.get ("post/" + postId.toString ()), callback);
  }
  
  getPosts = (page : number, callback? : Function) : void => {
    this.handleResponse (this.get ("post?page=" + page.toString ()), callback);
  }
  
  getUserPosts = (userId : number, page : number, callback? : Function) : void => {
    this.handleResponse (this.get ("post/user?userId=" + userId.toString () + "&page=" + page.toString ()), callback);
  }
  
  //comment
  
  createComment = (postId : number, body : string, callback? : Function) : void => {
    this.handleResponse (this.post ("comment", {
      postId: postId,
      body: body
    }), callback);
  }
  
  //postlike
  
  createPostLike = (postId : number, callback? : Function) : void => {
    this.handleResponse (this.post ("postlike/", {
      postId: postId
    }), callback);
  }
  
  deletePostLike = (postId : number, callback? : Function) => {
    this.handleResponse (this.delete ("postlike/" + postId.toString ()), callback);
  }

  // password reset (aka Forgot Password?)

  resetPassword = (email : string, callback? : Function, errorCallback? : Function) => {
    this.handleResponse (this.post ("reset-password", {email: email}), callback, errorCallback);
  }

  changePassword = (token : string, password: string, callback? : Function, errorCallback? : Function) => {
    this.handleResponse (this.put ("reset-password", {token: token, password: password}), callback, errorCallback);
  }
}