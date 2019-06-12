import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) {
    console.log("EmployeeService Initialized")
  }
  
  employees = ["Akshay" , "Tanmay" , "Pratik"];
  
  getEmployees(){
    return this.employees;
  }

  // return Observable type is not mandatory
  getVersion():Observable<any> {
    return this.httpClient.get("http://www.mocky.io/v2/5d00ac193200002b00f9d68b");
  }
}
