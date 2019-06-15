import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  constructor(public loginService: LoginService){ }

  ngOnInit() {
  }

  doLogin() {
    console.log("Doing login with userName: " + this.userName + " and password:" + this.password);
    sessionStorage.setItem('loggedIn', 'yes');
    this.loginService.getLoginPublisher().next({
      loggedIn: true
    });
  }
}
