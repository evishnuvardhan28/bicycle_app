import { Component, OnInit } from '@angular/core';
import { Updatedata } from '../updatedata';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updatedata: Updatedata= new Updatedata();
  constructor() { }

  ngOnInit(): void {
  }
  Dataupdate(){
    console.log(this.updatedata)
  }

}
