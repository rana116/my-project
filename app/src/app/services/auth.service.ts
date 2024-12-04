import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/auth';

  constructor(private httpClient: HttpClient) {}

  login(username:string, password:string){
    return this.httpClient.post(`${this.apiUrl}/login`, {username, password});
  }

    
  register(username:string, password:string){
    return this.httpClient.post(`${this.apiUrl}/register`, {username, password});
  }

  isLoggedIn(){
    return !!localStorage.getItem('token'); //check if token exists
  }

  logout(){
    localStorage.removeItem('token');
  }
}
