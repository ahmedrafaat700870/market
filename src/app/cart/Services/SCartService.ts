import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartItem, productModel } from 'src/app/products/Components/all-products/all-products.component';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SCartService {

  constructor(private http: HttpClient) { }

  public sendOrder (cartOrder : cartItem[]) : Observable<any>
  {

    return this.http.post( environment.apiUrl + 'carts' , this.filterProductsToOrder(cartOrder));
  }


  private filterProductsToOrder(cartOrder: cartItem[]) : orderModel
  {
    let order: orderModel ;
    order = new orderModel();
    order.date =  new Date();
    order.userId = 1 ;
    cartOrder.forEach(cartItem => {
      let addItem : productOrder = new productOrder();
      addItem.id = cartItem.product.id ;
      addItem.qty = cartItem.qty;
      console.log(addItem);

      order.products.push(addItem);
    });
    return order;
  }
}

export class orderModel {
  userId !: number;
  date !: Date ;
  products:productOrder[]  = [];
}

class productOrder {
  id !:number;
  qty!: number;
}
