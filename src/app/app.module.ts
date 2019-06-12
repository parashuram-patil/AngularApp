import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { MainComponent } from './main/main.component';
import { EmpbirthdayComponent } from './empbirthday/empbirthday.component';
import { EmprankingComponent } from './empranking/empranking.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadernavComponent,
    MainComponent,
    EmpbirthdayComponent,
    EmprankingComponent,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule, //DOM works coz of this
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
