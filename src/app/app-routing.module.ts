import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/signup/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { AboutComponent } from './User/about/about.component';
import { CartComponent } from './User/Component-Products/cart/cart.component';
import { ProductsComponent } from './User/Component-Products/products/products.component';
import { ContactUsComponent } from './User/contact-us/contact-us.component';
import { HomeComponent } from './User/home/home.component';
import { ProfileComponent } from './User/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: SignupComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactUsComponent, canActivate: [AuthGuard] },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] }
  // { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
