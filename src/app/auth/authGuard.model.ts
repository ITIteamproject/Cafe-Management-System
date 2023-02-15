// import {
//   CanActivate,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
//   Router,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// export class authGuard implements CanActivate {
//   constructor(private serve: AuthService, private router: Router) {}
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     var Varx = localStorage.getItem('logged');
//     let bool;
//     if (Varx == 'true') bool = true;
//     else bool = false;
//     if (bool) {
//       return bool;
//     } else {
//       this.router.navigateByUrl('/login');
//     }
//   }
// }
