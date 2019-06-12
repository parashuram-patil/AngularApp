import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { MainComponent } from './main/main.component';
import { EmpbirthdayComponent } from './empbirthday/empbirthday.component';
import { EmprankingComponent } from './empranking/empranking.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { Opps404Component } from './opps404/opps404.component';

const routes: Routes = [
  {path: 'home', component: EmpbirthdayComponent},
  {path: 'movies', component: EmprankingComponent},
  {path: 'search', component: EmpdetailsComponent},
  {path: '**', component: Opps404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeadernavComponent,
    MainComponent,
    EmpbirthdayComponent,
    EmprankingComponent,
    EmpdetailsComponent,
    Opps404Component
  ],
  imports: [
    BrowserModule, //DOM works coz of this
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
