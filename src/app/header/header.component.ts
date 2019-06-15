import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

menuItems = [
  {label:"Home" , link:'home' , active:true},
  {label:"Movies" , link:'movies' , active:false},
  {label:"Search" , link:'search' , active:false},
  {label:"About" , link:'about' , active:false}
]

  constructor(public loginService: LoginService) { }

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

  doLogOut() {
    console.log("Doing logout");
    sessionStorage.removeItem("loggedIn");
    this.loginService.getLoginPublisher().next({
      loggedIn: false
    });
  }

}
