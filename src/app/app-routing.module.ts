import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/Components/cart/cart.component';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/Components/product-details/product-details.component';

const routes: Routes = [
  {path: 'cart' , component: CartComponent} ,
  {path : 'product' , component : AllProductsComponent} ,
  {path: 'productDetails/:id' , component : ProductDetailsComponent} ,
  {path : '**' , redirectTo : 'product' , pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
