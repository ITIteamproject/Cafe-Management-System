import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  public grandTotal!: number;
  counter = 0;
  constructor(private cart: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cart.getProducts().subscribe((res) => {
      this.product = res;
      console.log(res);
    });
    this.grandTotal = this.getTotalPrice();
  }
  getTotalPrice(): number {
    let x = 0;
    this.product.map((a: any) => {
      x += a.total*a.quantity;
    });
    return x;
  }

  removeItem(item: any) {
    this.cart.removeCart(item);
    this.grandTotal = this.grandTotal - (item.total*item.quantity);
  }
  emptyCart() {
    this.cart.removeAll();
    this.grandTotal = 0;
  }
  save() {

    const orderedItems = this.product.map((item) => {
      console.log(item);
      item.total = item.price * item.quantity;
      return item;
    });    
    this.cart.saveOrders(orderedItems, localStorage.getItem('token')).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('/profile');
      this.cart.removeAll();
    });
  }
  addI(item: any) {
    item.quantity++;
     this.grandTotal = this.getTotalPrice();
  }
  removeI(item: any) {
    if (item.quantity > 1) item.quantity--;
    this.grandTotal = this.getTotalPrice();
  }
}
