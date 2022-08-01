import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
import { Newadmin } from '../newadmin';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newadmin: Newadmin = new Newadmin();
  errMsg: any;
  successMsg: any;
  getparamid: any;
  //bicycleForm!: FormGroup
  constructor(private api: ApiserviceService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.getparamid = this.router.snapshot.paramMap.get('name');
    if (this.getparamid) {
      this.api.getSingleData(this.getparamid).subscribe((res) => {
        console.log(res, 'Selected updated data');
        this.bicycleForm.patchValue({
          name: res.data[0].name,
          cost: res.data[0].cost,
          category: res.data[0].category,
          description: res.data[0].description
        })
      })
    }

  }

  bicycleSubmit() {
    //console.log(this.bicycleForm.value);
    if (this.bicycleForm.valid) {
      console.log(this.bicycleForm.value);
      this.api.createData(this.bicycleForm.value).subscribe((res) => {
        console.log(res, 'Bicycle Added sucessfully')
        this.bicycleForm.reset();
        this.successMsg = res.message;
      })
    }
    else {
      this.errMsg = 'All Fields are Required';
    }
  }

  updateBicycle() {
    if (this.bicycleForm.valid) {
      this.api.updateData(this.bicycleForm.value, this.getparamid).subscribe((res) => {
        console.log(res, 'Data Uploaded')
        this.successMsg = res.message;
      })
    } else {
      this.errMsg = 'All fields are Required';
    }
  }

  bicycleForm = new FormGroup({
    'name': new FormControl('', Validators.required),
    'cost': new FormControl('', Validators.required),
    'category': new FormControl('', Validators.required),
    'description': new FormControl('', Validators.required)
  })
  AdminNew() {
    console.log(this.newadmin)
  }

}
