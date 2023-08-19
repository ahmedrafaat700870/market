import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { SheardModule } from '../sheard/sheard.module';
import { CartItemComponent } from './Components/cart-item/cart-item.component';



@NgModule({
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule ,
    SheardModule
  ]
})
export class CartModule { }
