import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  Validators,
  Validator,
  ValidationErrors,
  FormGroup,
  NG_VALIDATORS,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  myForm: any;
  password1 :any;
  password2 :any;
  constructor(
    private serve: AuthService,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}

  OnSubmit(f: NgForm) {
    const reg = f.value;

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
          console.log('ok')
          this.router.navigateByUrl('/home');
        },
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
