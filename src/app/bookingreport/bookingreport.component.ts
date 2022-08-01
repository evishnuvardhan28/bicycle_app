import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-bookingreport',
  templateUrl: './bookingreport.component.html',
  styleUrls: ['./bookingreport.component.css']
})
export class BookingreportComponent implements OnInit {

  constructor(private api:ApiserviceService) { }
  readUser:any;
  successMsg:any;
  ngOnInit(): void {
    this.api.getAllUser().subscribe((res)=>{
       console.log('Get All Data',res);
       this.readUser=res.data;
    })
  }

  deleteName(name:any){
    this.api.deleteData(name).subscribe((res)=>{
      console.log(res, 'deleted Bicycle Name');
      this.successMsg = res.message;
      this.getAlldata();
    })
  }
  getAlldata() {
    this.api.getAllUser().subscribe((res)=>{
      console.log('Get All Data',res);
      this.readUser=res.data;
   })
  }
}
