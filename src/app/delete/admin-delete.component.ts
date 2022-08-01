import { Component, OnInit } from '@angular/core';
import { Deletedata } from '../deletedata';


@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {
  deletedata: Deletedata= new Deletedata();
  constructor() { }

  ngOnInit(): void {
  }
  dataDelete(){
    console.log(this.deletedata)
  }

}
