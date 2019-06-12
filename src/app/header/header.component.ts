import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

menuItems = [
  {label: "Home", link: "home", active: true},
  {label: "Movies", link: "Movies", active: false},
  {label: "Search", link: "Search", active: false},
  {label: "About", link: "About", active: false}
]

  constructor() { }

  ngOnInit() {
  }

  handleMenuClick(evt) {
    this.menuItems.forEach(each => {
      if(each.label == evt.target.id) {
        each.active = true;
      }
      else {
        each.active = false
      }
    })
  }

}
