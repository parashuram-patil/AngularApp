import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

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

  subject: Subject<EmplyeeDetilsMessage> =  new Subject();
  
  getPublisher() {
    return this.subject;
  }

  getSuscriber() {
    return this.subject.asObservable();
  }

  getEmptyMessage(){
    return new EmplyeeDetilsMessage();
  }
}

export class EmplyeeDetilsMessage {
  name = "";
  message = "";
}
