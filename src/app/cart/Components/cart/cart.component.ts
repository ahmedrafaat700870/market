import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { cartItem } from 'src/app/products/Components/all-products/all-products.component';
import { CartService } from 'src/app/sheard/Services/cart.service';
import { SCartService } from 'src/app/cart/Services/SCartService';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})

export class CartComponent implements OnInit {
  constructor(
    private cartServices: CartService,
    private SCartService: SCartService,
    private router:Router
  ) {}


  public success : boolean = false;

  public totalAmount: number = 0;
  public products: cartItem[] = [];
  ngOnInit(): void {
    this.products = this.cartServices.getAllProductFromCart();
    this.calcTotalCart();
    console.clear();
  }

  public detectChange(): void {
    this.cartServices.updateAllProduct(this.products);
    this.calcTotalCart();
  }

  public plusProduct(index: number): void {
    this.products[index].qty++;
    let isValid = this.validateInput(this.products[index].qty);
    if (!isValid) {
      this.products[index].qty--;
      return;
    }
    this.cartServices.updateAllProduct(this.products);
    this.calcTotalCart();
  }
  minsProduct(index: number): void {
    this.products[index].qty--;
    let isValid = this.validateInput(this.products[index].qty);
    if (!isValid) {
      this.products[index].qty++;
      return;
    }
    this.cartServices.updateAllProduct(this.products);
    this.calcTotalCart();
  }

  private calcTotalCart() {
    this.totalAmount = 0;
    this.products.forEach((pr) => {
      this.totalAmount += pr.product.price * pr.qty;
    });
  }
  public clearAllCart(): void {
    this.products = [];
    this.cartServices.updateAllProduct(this.products);
    this.calcTotalCart();
  }
  public removeProduct(index: number): void {
    this.products.splice(index, 1);
    this.cartServices.updateAllProduct(this.products);
    this.calcTotalCart();
  }
  private validateInput(qty: number): boolean {
    let isValid = true;

    if (qty <= 0) isValid = false;

    return isValid;
  }

  public makeOrder(): void {
    this.SCartService.sendOrder(this.products).subscribe(
      (res: any) => {
        this.success = true;
        this.clearAllCart();
        this.router.navigate(['./SomewhereElse']);
      },
      (err: Error) =>
      {

      }
    );

    // here send request make order .
  }
}
