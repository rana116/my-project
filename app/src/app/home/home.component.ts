import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit, OnDestroy {
  books: any[] = [];
  constructor(private bookService: BookService){}

  currentIndex = 0;
  intervalId: any; 

  slides = [
    { 
      src: '/images/sale.jpg', 
      alt: 'Image 1',
      captionTitle: 'END YEAR OFFERS!', 
    },
    { 
      src: '/images/car4.jpg', 
      alt: 'Image 2', 
      captionTitle: 'TOP SUGGESTIONS', 
      // captionText: 'This is the caption for the second slide.' 
    },
    { 
      src: '/images/car1.jpg', 
      alt: 'Image 3', 
      captionTitle: 'RECENT ARRIVALS', 
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide(); 
    this.bookService.getBooks().subscribe((data)=>{
      this.books = data;
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); 
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide(); 
    }, 3000); // the speed
  }

  goToSlide(index: number): void {
    this.currentIndex = index; 
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length; 
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length; 
  }
}
