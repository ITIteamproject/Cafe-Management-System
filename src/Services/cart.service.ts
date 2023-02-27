import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private ids = [];
  public cartItemList: any = [];
  public bool = false;
  public index: any;
  public productList = new BehaviorSubject<any>([]);
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.productList.asObservable();
  }

  getItemCart() {
    return this.cartItemList.length;
  }

  addtoCart(product: any) {
    this.cartItemList.map((item: any, index: any) => {
      if (product._id === item._id) {
        this.bool = true;
        this.index = index;
      }
    });
    if (this.bool) {
      this.cartItemList[this.index].quantity += 1;
      this.cartItemList[this.index].total = this.cartItemList[this.index].quantity * this.cartItemList[this.index].price;
      this.bool = false;
    } else this.cartItemList.push(product);

    this.productList.next(this.cartItemList);
  }

  removeCart(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product._id === a._id) {
        this.cartItemList.splice(index, 1);
      }
    });
    this.productList.next(this.cartItemList);
  }
  removeAll() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  saveOrders(items: any, token: any) {
    console.log(items);

    const headers = new HttpHeaders({
      Authorization: token,
    });
    return this.http.post<any>('http://localhost:3000/purchase', items, {
      headers
    });
    
  }
}
