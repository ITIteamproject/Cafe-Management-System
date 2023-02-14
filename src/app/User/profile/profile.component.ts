import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{
  userInfo = [];
  token:any = localStorage.getItem('token');
  constructor(private http: ProfileService) {}

  ngOnInit(){
    this.http.getUserInfo().subscribe({
      next: (res)=> {
        console.log(res)
      },
      error: (err) => {
        console.log(err);
        
      }
    })
  }

}
