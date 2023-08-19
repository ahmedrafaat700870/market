import { Injectable } from '@angular/core';
import { cartItem, productModel } from 'src/app/products/Components/all-products/all-products.component';

@Injectable({
  providedIn: 'root'
})
export class CartService implements ICart {

  private allData !: cartItem[]  ;

  constructor()
  {
    this.getDataFromLocalStorage();
  }


  public addProductToCart(cart_item: cartItem): void
  {

    if(this.allData === null || this.allData === undefined || this.allData.length === 0)
    {
      this.allData = [];
      this.allData.push(cart_item);
    } else if(this.allData.some(s => s.product.id === cart_item.product.id))
    {
      console.log('2');
      // this product  exits before .
      this.updateProductInCart(cart_item);

    } else {
      console.log('3');
      // this product not exits before .
      this.allData.push(cart_item);
    }

    this.saveDataOnLocalStorage();

  }
  public removeFromCart(product: cartItem) : void
  {

    if(this.allData === null || undefined)
      return;

    this.allData = this.allData.filter(data => data.product.id === product.product.id)

    this.saveDataOnLocalStorage();

  }

  public updateProductInCart(product : cartItem) : void
  {
    let index_up_product : number = this.allData.findIndex(x =>x.product.id === product.product.id);

    if(index_up_product === -1)
      alert('not found this product in cart');
    else {
      this.allData[index_up_product]

      this.allData[index_up_product].product.image = product.product.image ;
      this.allData[index_up_product].product.description = product.product.description ;
      this.allData[index_up_product].product.price = product.product.price ;
      this.allData[index_up_product].product.title = product.product.title;
      this.allData[index_up_product].qty += product.qty;
    }
  }

  public getAllProductFromCart() : any [] | null
  {
    return this.allData;
  }



  private getDataFromLocalStorage() : void {
    console.log('getDataFromLocalStorage');

    if('cart' in localStorage)
      this.allData = JSON.parse(localStorage.getItem('cart') as string) as unknown as any[];
    else
    {
      localStorage.setItem('cart' , JSON.stringify([]));
      this.allData = [];
    }

  }

  private saveDataOnLocalStorage() : void
  {

    if(this.allData === null || undefined)
      return;

    let savedData = JSON.stringify(this.allData);

    localStorage.setItem('cart' , savedData);
  }

}
export interface ICart {
   addProductToCart(product: cartItem): void ;

   removeFromCart(product: cartItem) : void ;

   updateProductInCart(product : cartItem) : void ;

   getAllProductFromCart() : any [] | null ;

}




