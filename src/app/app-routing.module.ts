import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BiycycleDashComponent } from './bicycle-dash/biycycle-dash.component';
import { BookingComponent } from './booking/booking.component';
import { BookingreportComponent } from './bookingreport/bookingreport.component';
import { ChoiceComponent } from './choice/choice.component';
import { DatailsComponent } from './datails/datails.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewComponent } from './new/new.component';
import { SignupComponent } from './signup/signup.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
      path:'', redirectTo:'homepage', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'biycycle', component:BiycycleDashComponent
  },
  {
    path:'admin', component:AdminComponent
  },
  
  {
    path:'new', component:NewComponent
  },
  {
    path:'new/:name', component:NewComponent
  },
  {
    path:'homepage', component:HomepageComponent
  },
  {
    path:'user-login', component:UserLoginComponent
  },
  
  {
    path:'choice', component:ChoiceComponent
  },
  {
    path:'booking', component:BookingComponent
  },
  {
    path:'bookingreport', component:BookingreportComponent
  },
  {
    path:'details', component:DatailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
