import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL = 'http://localhost:3000/api/books'; //depends on mongo ig

  constructor(private httpClient:HttpClient) { }

  getBooks(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(this.apiURL);
  }

  getBookById(id: string): Observable<Book>{
    return this.httpClient.get<Book>(`${this.apiURL}/${id}`);
  }

  //add book
  // createBook(bookData: any){
  //   return this.httpClient.post(this.apiURL, bookData);
  // }

  addToCart(bookId:string): Observable<any>{
    return this.httpClient.post(`http://localhost :5000/api/cart/add`, {bookId});
  }

}
