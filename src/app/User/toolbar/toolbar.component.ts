import { Component, OnInit , HostListener} from '@angular/core';
import { DatasharingService } from 'src/Services/datasharing.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  isAuth: any;
  bool = false;

  constructor(private auth: AuthService, public _datasharing: DatasharingService) { }
  
  ngOnInit(): void {
    this.isAuth = localStorage.getItem('logged');
    if (this.auth.checkAuth()) this.bool = true;
    else this.bool = false;

    // localStorage.setItem('logged', 'false');
    //console.log(this.isAuth);
    // this.auth.authChange.subscribe((res) => {
    //   this.isAuth = res;
    // });
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() { 
    let element = document.querySelector('.navbar') as HTMLElement; 
    if (window.pageYOffset > element.clientHeight) { 
      element.classList.add('scroll'); 
    } else { 
      element.classList.remove('scroll'); 
    } 
  }
  Logout() {
    this.bool = false;
    localStorage.setItem('logged', 'false');
  }
  Login() {
    this.bool = true;
    localStorage.setItem('logged', 'true');
  }
}
