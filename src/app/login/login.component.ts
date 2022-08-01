import { Component, OnInit } from '@angular/core';
import { Adminlogin } from '../Adminlogin';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   
  adminlogin: Adminlogin = new Adminlogin();
  constructor() { }

  ngOnInit(): void {
  }
  loginAdmin(){
    console.log(this.adminlogin);
  }

}
