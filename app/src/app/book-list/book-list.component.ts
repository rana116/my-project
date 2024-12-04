import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: false,
  
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  constructor(private bookService: BookService){}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }
}
  