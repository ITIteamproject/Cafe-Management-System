import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
