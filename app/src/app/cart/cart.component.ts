import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems:any[] = [];
  totalPrice: number =0;
  constructor(private cartService: CartService){}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((data: any)=> {
      this.cartItems = data.items;
      this.calculateTotalPrice();
    });;
  }

  calculateTotalPrice(){
    this.totalPrice = this.cartItems.reduce((total, item)=>{
      return total + (item.bookId.price * item.quantity);
    }, 0);
  }

  removeFromCart(bookId:string){
    this.cartService.removeFromCart(bookId).subscribe(()=>{
      this.cartItems = this.cartItems.filter(item => item.bookId._id !== bookId);
      this.calculateTotalPrice();
    });
  }
}
