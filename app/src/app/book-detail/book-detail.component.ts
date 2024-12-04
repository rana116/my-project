import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-book-detail',
  standalone: false,
  
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})

export class BookDetailComponent implements OnInit {
  book:any;
  constructor(private route: ActivatedRoute,
     private bookService: BookService,
     private authService: AuthService,
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.bookService.getBookById(id).subscribe((data)=>{
      this.book = data;
    });
  }

  addToCart(){
    if(!this.authService.isLoggedIn()){
      alert("you need to login first to add items to your cart");
      return;
    }
     this.bookService.addToCart(this.book._id).subscribe(() => {
         alert("Book added to cart!");
     });
   
  }

}
  


