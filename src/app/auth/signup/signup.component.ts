import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
 isexist =false;
  constructor(
    private serve: AuthService,
    private router: Router,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {}

  OnSubmit(f: NgForm) {
    const reg = f.value;
    console.log(reg);
    this.serve
      .register(
        reg.username,
        reg.email,
        reg.password,
        reg.repassword,
        reg.gender
      )
      .subscribe({
        next: (res) => {
          console.log("res")
          console.log(res)
          localStorage.setItem('token', res["accessToken"]);
          localStorage.setItem('logged', 'true');
          this.router.navigateByUrl('/home');
        },
        error:(error)=>{

          this.isexist = error.error;
          console.log("error")
          console.log(error.error)
        }
      });
  }
  login(x: NgForm) {
    const y = x.value;

    this.serve.login(y.email, y.password).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('logged', 'true');
      this.router.navigateByUrl('/home');
    });
  }
  logOut() {
    // this.serve.logOut().subscribe();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
  }
}