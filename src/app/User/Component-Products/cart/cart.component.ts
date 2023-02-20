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

  constructor(private cart: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cart.getProducts().subscribe((res) => {
      this.product = res;
      this.grandTotal = this.cart.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cart.removeCart(item);
  }
  emptyCart() {
    this.cart.removeAll();
  }
  save() {
    console.log(this.product);
    this.cart.saveOrders(this.product, localStorage.getItem('token')).subscribe((a) => {
      console.log(a);
      this.router.navigateByUrl('/profile');
    });
  }
}
