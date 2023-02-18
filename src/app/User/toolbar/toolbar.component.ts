import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  isAuth: any;
  bool = false;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.isAuth = localStorage.getItem('logged');
    if (this.auth.checkAuth()) this.bool = true;
    else this.bool = false;

    // localStorage.setItem('logged', 'false');
    //console.log(this.isAuth);
    // this.auth.authChange.subscribe((res) => {
    //   this.isAuth = res;
    // });
  }
  Logout() {
    this.bool = false;
    localStorage.setItem('logged', 'false');
  }
  Login() {
    this.bool = true;
    localStorage.setItem('logged', 'true');
  }
}
