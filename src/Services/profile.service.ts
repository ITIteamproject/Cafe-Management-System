import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseURL = 'http://localhost:3000/profile'
  private orderURL = 'http://localhost:3000/orders'

  constructor(private http: HttpClient) { }

  getUserInfo(token: any) {
    const headers = new HttpHeaders({
      'Authorization': token
    })
    return this.http.get(this.baseURL, { headers })
  }

  getUserImage(token: any) {
    const headers = new HttpHeaders({
      'Authorization': token
    })
    return this.http.get(this.baseURL + '/userImage', { headers })
  }

  updateUserImage(token: any, file: any): Observable<Object> {
    const headers = new HttpHeaders({
      'authorization': token
    })
    const formData = new FormData();
    formData.append('userImage', file, file.name)
    return this.http.patch(this.baseURL + '/userImage', formData, { headers })
  }

  changePassword(token: string, pw: object) {
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    })
    return this.http.patch(this.baseURL + '/changepassword', pw, { headers });
  }

  changeUserInfo(token: string, userInfo) {
    const headers = new HttpHeaders({
      'Authorization': token,
      'Content-Type': 'application/json'
    })
    return this.http.patch(this.baseURL, userInfo, { headers })
  }

  getUserOrders(token: string) {
    const headers = new HttpHeaders({
      'Authorization': token
    })
    return this.http.get(this.orderURL, { headers })
  }

  cancelUserOrder(token: string, orderId: string) {
    const headers = new HttpHeaders({
      'Authorization': token
    })
    return this.http.delete(`${this.orderURL}/?orderId=${orderId}`, {headers})
  }

  
}
