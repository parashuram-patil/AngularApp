import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'AngularApp';
  loggedIn = false;
  
  ngOnInit() {
    if(sessionStorage.getItem("loggedIn") == 'yes'){
      this.loggedIn = true;
    }
  }
}
