import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatToolbarModule } from '@angular/material/toolbar';

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
import { MatchingDirective } from './matching.directive';
import { FooterComponent } from './User/footer/footer.component';
import { AboutComponent } from './User/about/about.component';
import { ErrorComponent } from './error/error.component';
import { ToastrModule, ToastContainerModule } from 'ngx-toastr';
import { ToastService, AngularToastifyModule } from 'angular-toastify';

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
    MatchingDirective,
    FooterComponent,
    AboutComponent,
    ErrorComponent,

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
    ReactiveFormsModule,
    MatToolbarModule,
    AngularToastifyModule,
    ToastContainerModule,
    ToastrModule.forRoot({timeOut: 3500,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,}),
      
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
