import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private serve: AuthService) { }
  
  OnSubmit(f: NgForm) {
    console.log(f.value)
    this.serve.login({
      email: f.value.email,
      password: f.value.password,
    });
  }
}
