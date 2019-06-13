import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public app:AppComponent) { }

  ngOnInit() {
  }

  doLogin() {
    console.log("Doing login")
    sessionStorage.setItem('loggedIn', 'yes');
    this.app.loggedIn = true;
  }

  doLogout() {
    //sessionStorage.removeItem('loggedIn');
    //this.app.loggedIn = false;
  }

}
