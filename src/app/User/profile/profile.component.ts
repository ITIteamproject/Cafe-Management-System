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
  token: any = localStorage.getItem('token');

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

  ngOnInit() {

    // get user info request
    this.http.getUserInfo(this.token).subscribe({
      next: (res) => {
        console.log(res)
        this.userInfo = res
      },
      error: (err) => {
        console.log(err);
      }
    })

    // get user image request
    this.http.getUserImage(this.token).subscribe({
      next: (res) => {
        console.log(res);
        this.userImage = res['userImage']
      },
      error: (err) => {
        console.log(err)
      }
    })


  }

}
