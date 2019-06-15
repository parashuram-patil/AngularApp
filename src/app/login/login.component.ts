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
  }

  doLogin() {
    console.log("Doing login with userName: " + this.userName + " and password:" + this.password);
    sessionStorage.setItem('loggedIn', 'yes');
    this.loginService.getLoginPublisher().next({
      loggedIn: true
    });
    this.router.navigate(['home']);
  }
}
