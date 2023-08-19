import { Component, Input } from '@angular/core';
import { cartItem, productModel } from 'src/app/products/Components/all-products/all-products.component';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() public product !: cartItem;
}
