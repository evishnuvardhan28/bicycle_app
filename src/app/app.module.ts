import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BiycycleDashComponent } from './bicycle-dash/biycycle-dash.component';
import { AdminComponent } from './admin/admin.component';
import { NewComponent } from './new/new.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';

import { ChoiceComponent } from './choice/choice.component';
import { BookingComponent } from './booking/booking.component';
import { CancelComponent } from './cancel/cancel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingreportComponent } from './bookingreport/bookingreport.component';
import { ApiserviceService } from './apiservice.service';
import { DatailsComponent } from './datails/datails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BiycycleDashComponent,
    AdminComponent,
    NewComponent,
    HomepageComponent,
    UserLoginComponent,
    
    ChoiceComponent,
    BookingComponent,
    CancelComponent,
    BookingreportComponent,
    DatailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
