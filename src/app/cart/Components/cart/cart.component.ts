import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/products/Components/all-products/all-products.component';
import { CartService } from 'src/app/sheard/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private cartServices : CartService)
  {

  }

  public products: cartItem[] = [];
  ngOnInit(): void {
    this.products = this.cartServices.getAllProductFromCart();
  }
}
