import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url="http://localhost:8081"

  constructor(private http:HttpClient) { }

  // getUser(){
  //   return this.http.get(`${this.url}/getusers`);
  // }

  //add user
  public addUser(user: any){
    return this.http.post(`${this.url}/user/`,user);
  }
}
