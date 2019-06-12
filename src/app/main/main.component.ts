import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  counter = 1;
  constructor() { }

  ngOnInit() {
  }

  incrementButtonAction(event) {
    console.log(event);
    this.counter += 2;
  }

}
