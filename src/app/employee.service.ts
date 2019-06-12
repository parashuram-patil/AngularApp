import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() {
    console.log("EmployeeService Initialized")
  }
  
  employees = ["Akshay" , "Tanmay" , "Pratik"];
  
  getEmployees(){
    return this.employees;
  }
}
