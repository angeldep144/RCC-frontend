import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  domain:string = "http://localhost:9000";

  constructor(private httpCli: HttpClient) { }

  login(username:string,password:string)
  {
    return this.httpCli.post<any>(`this.domain/session`,{
      "username":username,
      "password":password
    })
  }
}
