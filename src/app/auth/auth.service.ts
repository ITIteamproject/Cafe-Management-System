import { Injectable } from '@angular/core';
import { authData } from './auth.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: any ;

  registerUser(authData: authData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }
  login(authData: authData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString(),
    };
  }
  logout() {
    this.user = null;
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }

  
  constructor() {}
}
