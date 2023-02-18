import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatasharingService {

  constructor() { }

  public userImage: string = 'http://localhost:3000/defProfileImage.png';
}