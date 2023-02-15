import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseURL = 'http://localhost:3000/profile'

  constructor(private http: HttpClient) { }

  getUserInfo(token: any) {
    const headers = new HttpHeaders({
      'Authorization': token
    })
    return this.http.get(this.baseURL, { headers })
  }


}
