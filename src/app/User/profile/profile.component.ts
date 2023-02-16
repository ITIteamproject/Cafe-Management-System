import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userInfo: any;
  userImage: any;
  imageFile: File;
  gender: string;
  message: string;
  userOrders: any;
  token: any = localStorage.getItem('token');
  ordersColumns = ['name', 'price', 'status', 'amount', 'totalPrice', 'cancel']

  constructor(private http: ProfileService) { }

  onChange(event: any) {
    this.imageFile = event.target.files[0]
    console.log(this.imageFile)
  }

  changeUserImage() {

    this.http.updateUserImage(this.token, this.imageFile).subscribe({ //
      next: (res) => {
        console.log(res);
        this.userImage = res['userImage']
        location.reload()
      },
      error: (err) => {
        console.log(err)
      }
    })

  }

  cancelOrder(orderId: string) {
    this.http.cancelUserOrder(this.token, orderId).subscribe({
      next: res => {
        console.log(res)
        location.reload()
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnInit() {

    // get user info request
    this.http.getUserInfo(this.token).subscribe({
      next: (res) => {
        this.userInfo = res
      },
      error: (err) => {
        console.log(err);
      }
    })

    // get user image request
    this.http.getUserImage(this.token).subscribe({
      next: (res) => {
        this.userImage = res['userImage']
      },
      error: (err) => {
        console.log(err)
      }
    })

    // get user orders
    this.http.getUserOrders(this.token).subscribe({
      next: res => {
        this.userOrders = res;
      },
      error: err => {
        console.log(err);

      }
    })
  }

  changePasswd(oldPassword, newPassword, repeatPassword): number {
    if (newPassword !== repeatPassword) return -1;

    const pw = {
      oldPassword,
      newPassword
    }

    this.http.changePassword(this.token, pw).subscribe({
      next: (res) => {
      },
      error: (err) => {
        console.log(err)
      }
    })

    return 1;
  }

  genderChanged(val) {
    this.gender = val;
  }

  changeInfo(username: string, email: string) {
    const info = {
      username,
      email,
      gender: this.gender
    }

    this.http.changeUserInfo(this.token, info).subscribe({
      next: (res) => {
        this.message = 'info updated successfully'
      },
      error: (err) => {
        this.message = 'something went wrong'
        console.log(err)
      }
    })
  }

}
