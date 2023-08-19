import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './Components/header/header.component';
import {  RouterModule } from '@angular/router';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SelectComponent } from './Components/select/select.component';
import { CartService } from '../cart/Services/cart.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,

  ],
  imports: [
    RouterModule ,
    CommonModule ,
    FormsModule
  ] ,
  exports : [
    HeaderComponent ,
    SpinnerComponent ,
    SelectComponent ,
    FormsModule ,
    RouterModule

  ]
})
export class SheardModule { }
