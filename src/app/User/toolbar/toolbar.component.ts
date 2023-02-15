import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  isAuth: any;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.isAuth = localStorage.getItem('logged');
    localStorage.setItem('logged', 'false');
    //console.log(this.isAuth);
    // this.auth.authChange.subscribe((res) => {
    //   this.isAuth = res;
    // });
  }
  Logout() {
    this.isAuth = false;
    localStorage.setItem('logged', 'false');
    console.log(this.isAuth);
  }
  Login() {
    this.isAuth = true;
    localStorage.setItem('logged', 'true');
    console.log(this.isAuth);
  }
}
