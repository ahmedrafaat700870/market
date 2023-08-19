import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

import { HttpClientModule } from '@angular/common/http';
import { SheardModule } from '../sheard/sheard.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule ,
    HttpClientModule,
    SheardModule ,
    FormsModule
  ]

})
export class ProductsModule { }
