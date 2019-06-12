import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empranking',
  templateUrl: './empranking.component.html',
  styleUrls: ['./empranking.component.css']
})
export class EmprankingComponent implements OnInit {

  empList = [];
  
  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmployees();
  }

}
