import { Component, OnInit } from '@angular/core';
import { EmployeeService, EmplyeeDetilsMessage } from '../employee.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empList = [];
  msg:EmplyeeDetilsMessage;
  
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmployees();
    this.msg = this.empService.getEmptyMessage();
  }

  sendInfo(evt) {
    console.log("Publishing....");
    console.log("*** " + evt.target.innerText);
    this.msg.name = evt.target.innerText;
    this.msg.message = "" + Date.now();
    this.empService.getPublisher().next(this.msg);
    console.log("Published Succesfully....")
    console.log(evt);
  }

}
