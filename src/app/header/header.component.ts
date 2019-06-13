import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';

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

  constructor(public app:AppComponent) { }

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
    //this.login.doLogout();
    sessionStorage.removeItem("loggedIn");
    this.app.loggedIn = false;
  }

}
