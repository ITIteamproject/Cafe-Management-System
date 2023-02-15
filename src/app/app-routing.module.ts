import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { CartComponent } from './User/Component-Products/cart/cart.component';
import { ProductsComponent } from './User/Component-Products/products/products.component';
import { ContactUsComponent } from './User/contact-us/contact-us.component';
import { HomeComponent } from './User/home/home.component';
import { ProfileComponent } from './User/profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SignupComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'products',
    component: ProductsComponent,
  },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
