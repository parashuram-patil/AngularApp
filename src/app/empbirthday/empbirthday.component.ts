import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-empbirthday',
  templateUrl: './empbirthday.component.html',
  styleUrls: ['./empbirthday.component.css']
})
export class EmpbirthdayComponent implements OnInit {

  empList = [];
  version = "";

  constructor(public empService: EmployeeService) { }

  ngOnInit() {
    this.empList = this.empService.getEmployees();

    this.empService.getVersion().subscribe(result => {
      console.log(result);
      this.version = result.version
    });
  }

}
