import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModule } from './Matrial.module';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './User/profile/profile.component';
import { HomeComponent } from './User/home/home.component';
import { ToolbarComponent } from './User/toolbar/toolbar.component';
import { ContactUsComponent } from './User/contact-us/contact-us.component';
import { CartComponent } from './User/Component-Products/cart/cart.component';
import { ProductsComponent } from './User/Component-Products/products/products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ProfileComponent,
    HomeComponent,
    ToolbarComponent,
    ContactUsComponent,
    CartComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatrialModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
