import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  getProduct() {
    return this.http.get<any>('http://localhost:3000/api/products').pipe(
      map((res) => {
        console.log(res.data);
        return res.data;
      })
    );
  }
}
