// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from 'src/Services/cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css'],
// })
// export class CartComponent implements OnInit {
//   public product: any = [];
//   public grandTotal!: number;

//   constructor(private cart: CartService, private router: Router) {}
//   ngOnInit(): void {
//     this.cart.getProducts().subscribe((res) => {
//       this.product = res;
//       this.grandTotal = this.cart.getTotalPrice();
//     });
//   }
//   removeItem(item: any) {
//     this.cart.removeCart(item);
//   }
//   emptyCart() {
//     this.cart.removeAll();
//   }
//   save() {
//     console.log(this.product);
//     this.cart.saveOrders(this.product, localStorage.getItem('token')).subscribe((a) => {
//       console.log(a);
//       this.router.navigateByUrl('/profile');
//     });
//   }
// }
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
    });
    this.grandTotal = this.getTotalPrice();
    // console.log(this.product);
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
    const x = this.product.map((id) => {
      return id._id;
    });
    this.cart.saveOrders(x, localStorage.getItem('token')).subscribe((a) => {
      console.log(a);
      this.router.navigateByUrl('/profile');
      this.cart.removeAll();
    });
  }
  addI(item: any) {
    item.quantity++;
     this.grandTotal = this.getTotalPrice();
    // this.grandTotal = 0;
    // this.product = this.product.map((res) => {
    //   if (res._id == item._id) {
    //     let quantity = ++res.quantity;
    //     let price = quantity * res.price;
    //     // console.log(price, res);
    //     this.grandTotal += price;
    //     return {
    //       ...res,
    //       quantity: quantity,
    //       total: price,
    //     };
    //   } else {
    //     this.grandTotal += res.price;
    //     return res;
    //   }
    // });

    // console.log(this.product);
  }
  removeI(item: any) {
    if (item.quantity > 1) item.quantity--;
    this.grandTotal = this.getTotalPrice();
    //   //  this.grandTotal = 0;
    //   this.product = this.product.map((res) => {
    //     if (res._id == item._id) {
    //       let quantity = --res.quantity;
    //       let price = quantity * res.price;
    //       // console.log(price, res);
    //       this.grandTotal -= price;
    //       return {
    //         ...res,
    //         quantity: quantity,
    //         total: price,
    //       };
    //     } else {
    //       this.grandTotal -= res.price;
    //       return res;
    //     }
    //   });
    //}
  }
}
