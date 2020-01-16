import { Component, OnInit } from '@angular/core';
import { EmployeeService, EmplyeeDetilsMessage } from '../employee.service';

@Component({
  selector: 'app-empbirthday',
  templateUrl: './empbirthday.component.html',
  styleUrls: ['./empbirthday.component.css']
})
export class EmpbirthdayComponent implements OnInit {

  empList = [];
  version = "";
  msg:EmplyeeDetilsMessage;
  finalMessage = "No Message yet.";

  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmployees();

    this.empService.getVersion().subscribe(result => {
      console.log(result);
      this.version = result.version
    });

    this.empService.getSuscriber().subscribe(result => {
      this.msg = result;
      this.setMessage();
    });
  }

  setMessage() {
    this.finalMessage = "Message From " + this.msg.name + ": " + this.msg.message;
    console.log("*** Message Recieved : + " + this.finalMessage)
  }

}
