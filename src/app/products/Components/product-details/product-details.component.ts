import { Component, EventEmitter, Input, Output } from '@angular/core';
import { cartItem, productModel } from '../all-products/all-products.component';
import { ProductsModule } from '../../products.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../Services/product.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  private id!: number;
  public loading : boolean = false;
  constructor(route: ActivatedRoute, private services: ProductService) {
    this.id = route.snapshot.paramMap.get('id') as unknown as number;

    if (this.id === null || this.id === undefined) return;

    this.getProductById();
  }

  private getProductById(): void {
    this.loading = true;
    this.services.getById(this.id as unknown as number).subscribe(
      (res: productModel) => {
    this.loading = false;

        this.data = res;
      },


      (error: Error) => {
        this.loading = false;
        alert(error);
      }
    );
  }
  @Input() data!: productModel;
  @Output() addItem: EventEmitter<any> = new EventEmitter();

  public qty: number = 1;
  public addProduct: boolean = false;
  public add(event: Event): void {
    const isValid = this.validateNumber(this.qty);
    if (!isValid) {
      alert('this data is not valid!');
      return;
    }

    let itemToCart: cartItem = new cartItem();
    itemToCart.qty = this.qty;
    itemToCart.product = this.data;

    this.addItem.emit(itemToCart);
    this.changeStatAddProduct(null!);
  }

  private validateNumber(num: number | string) {
    let isValid: boolean = true;

    if (!+num) isValid = false;

    if ((num as unknown as number) <= 0) isValid = false;

    return isValid;
  }

  public changeStatAddProduct(event: Event) {
    this.addProduct = !this.addProduct;
  }
}
