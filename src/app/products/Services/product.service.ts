import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient)  {}

  getProducts() : Observable<any>  {
    return this.http.get(environment.apiUrl  + 'products');
  }

  getAllCategories() : Observable<any>
  {
    return this.http.get(environment.apiUrl + 'products/categories');
  }

  filterCategories(categoryName : string) : Observable<any>
  {
    return this.http.get(environment.apiUrl + 'products/category/' + categoryName);
  }


  public getById(id : number) : Observable<any>
  {
    return this.http.get(environment.apiUrl + "products/" + id);
  }
}
