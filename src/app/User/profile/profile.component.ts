import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
  userInfo = {};
  token:any = localStorage.getItem('token');

  constructor(private http: ProfileService) {

  }

  ngOnInit(){
    console.log(this.token)
    this.http.getUserInfo(this.token).subscribe({
      next: (res)=> {
        console.log(res)
        this.userInfo = res
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
