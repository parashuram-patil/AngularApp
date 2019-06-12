import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empList = [];
  
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmployees();
  }

}
