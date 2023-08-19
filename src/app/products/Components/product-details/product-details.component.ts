import { Component, EventEmitter, Input, Output } from '@angular/core';
import { productModel } from '../all-products/all-products.component';
import { ProductsModule } from '../../products.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  @Input() data!: productModel;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  public qty : any = '1';
  public addProduct: boolean = false;
  public add(event: any): void {
    console.log('qty : ' , this.qty);
    this.addItem.emit(this.data);
    this.changeStatAddProduct(null!);
  }
  public changeStatAddProduct(event: Event) {
    this.addProduct = !this.addProduct;
  }
}
