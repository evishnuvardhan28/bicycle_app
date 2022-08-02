import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  apiUrl="  https://1f5d3bc863.execute-api.us-east-1.amazonaws.com/dev/bicycles";
  delUrl="  https://1f5d3bc863.execute-api.us-east-1.amazonaws.com/dev/bicycles";
  deUrl="https://1f5d3bc863.execute-api.us-east-1.amazonaws.com/dev/booking";
  bookUrl=" https://1f5d3bc863.execute-api.us-east-1.amazonaws.com/dev/booking";
  baddUrl=" https://1f5d3bc863.execute-api.us-east-1.amazonaws.com/dev/bicycles";
  constructor(private http:HttpClient) { }
  //Get all data
  getAllUser():Observable<any>{
    return this.http.get(`${this.apiUrl}`);
  }

  createData(data:any):Observable<any>{
    console.log(data,'Data Created')
    return this.http.post(`${this.apiUrl}`,data);
  }

  createBooking(data:any):Observable<any>{
    console.log(data, 'Data Created')
    return this.http.post(`${this.bookUrl}`,data);
  }
  
  getAllBooking():Observable<any>{
    return this.http.get(`${this.bookUrl}`);
  }

  deleteBooking(id:any):Observable<any>{
    let ids = id;
    return this.http.delete(`${this.deUrl}/${ids}`);
  }

  deleteData(name:any):Observable<any>{
    let names = name;
    return this.http.delete(`${this.delUrl}/${names}`);
  }

  updateData(data:any, name:any):Observable<any>{
    let names = name;
    return this.http.put(`${this.deUrl}/${names}`,data)
  }

  getSingleData(name:any):Observable<any>{
    let names = name;
    return this.http.get(`${this.apiUrl}/${names}`);
  }
}
