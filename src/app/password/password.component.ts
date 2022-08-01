import { Component, OnInit } from '@angular/core';
import { Passwordchange } from '../passwordchange';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordchange: Passwordchange= new Passwordchange(); 
  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){
    console.log(this.passwordchange)
  }

}
