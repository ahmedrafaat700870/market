import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { CartService, ICart } from 'src/app/sheard/Services/cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  ngOnInit(): void {
    console.clear();
    this.GetProducts();
    this.GetCategories();
    this.changeLoadingState();
  }
  constructor(private services:ProductService , private cart : CartService ) {}


  public products: productModel[] =[];
  public categories : string[] = [];
  public isLoading: boolean  = true;

  private changeLoadingState() : void
  {
    this.isLoading = !this.isLoading;
  }
  GetProducts() : void
  {
    this.changeLoadingState();
    this.services.getProducts().subscribe(
      (res : productModel[] ) => {
        this.products = res;
      } , (error: Error) => {
        console.log(error.message);
      }
    ) ;
    this.changeLoadingState();
  }

  GetCategories() : void {
    this.changeLoadingState();
    this.services.getAllCategories().subscribe((res: string[]) => {
      this.categories = res;
    } , (error:Error) => {
      console.log(error.message);
    })
    this.changeLoadingState();

  }
  private GetAllProductsInCategory(CategoryName : string)
  {
    this.changeLoadingState();
    this.services.filterCategories(CategoryName).subscribe((res : productModel []) => {
      this.products = res;
    } , (error: Error) => {
      console.log(error);
    });
    this.changeLoadingState();
  }

  filterCategories(events :  Event) : void
  {
    let valueChanged: string = ( events.target as unknown as EventValue).value ?? null;
    (valueChanged === 'all') ? this.GetProducts() : this.GetAllProductsInCategory(valueChanged);
  }


  public addItemToCart(item : productModel) : void
  {
    console.log('addItemToCart');
    let productItem : cartItem = new cartItem();
    productItem.product = item;
    productItem.qty = 1;
    this.cart.addProductToCart(productItem);
  }
}


export class productModel {
  title!: string;
  price !: number ;
  image!: string ;
  description!: string;
  id!: number;
  qty!:number;
}
export class Error {
  message!: string;
}

export class EventValue
{
  value !: string;
}


export  class cartItem {
  qty !: number;
  product!:productModel;
}
