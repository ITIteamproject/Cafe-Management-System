import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/Services/api-service.service';
import { CartService } from 'src/Services/cart.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList = [];
  searchVar: string = '';
  totalItem: number = 0;
  constructor(private api: ApiServiceService, private cart: CartService) {}
  ngOnInit(): void {
    this.totalItem = this.cart.getItemCart();
    this.api.getProduct().subscribe((res) => {
      this.productList = res;
      this.totalItem = this.cart.getItemCart();

      this.productList.forEach((element: any) => {
        Object.assign(element, { quantity: 1, total: element.price });
        // this.cart.getItemCart();
      });
    });
  }
  addToCart(item: any) {
    this.cart.addtoCart(item);
    this.totalItem = this.cart.getItemCart();
  }
}
