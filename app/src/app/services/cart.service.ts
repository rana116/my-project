import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:5000/api/cart/add';

  constructor(private httpClient: HttpClient) {}

  getCart(){
    return this.httpClient.get(this.apiUrl);
  }
  removeFromCart(bookId: string){
    return this.httpClient.post(`${this.apiUrl}/remove`, {bookId});
  }
}
