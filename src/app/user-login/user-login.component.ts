import { Component, OnInit } from '@angular/core';
import { Userlogin } from '../userlogin';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userlogin: Userlogin= new Userlogin();
  constructor() { }

  ngOnInit(): void {
  }
  Loginuser(){
    console.log(this.userlogin)
  }
}
