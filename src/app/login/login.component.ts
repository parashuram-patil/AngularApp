import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName;
  password;

  constructor(public loginService: LoginService, public router: Router){ }

  ngOnInit() {
    this.loginService.getLoginPublisher().next({
      loggedIn: false
    });
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('loginToken');
  }

  doLogin() {
    console.log("Doing login with userName: " + this.userName + " and password:" + this.password);
    sessionStorage.setItem('loggedIn', 'yes');
    sessionStorage.setItem("loginToken", btoa(this.userName + ":" + this.password));
    this.loginService.getLoginPublisher().next({
      loggedIn: true
    });
    this.router.navigate(['home']);
  }
}
