import { Injectable } from '@angular/core';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root',
})
export class DatasharingService {
  public userImage: string;
  constructor(private http: ProfileService) {
    this.http.getUserImage(localStorage.getItem('token')).subscribe({
      next: (res) => {
        this.userImage = res['userImage'];
      },
      error: err => {
        console.log(err)
      }
    });
  }
}
