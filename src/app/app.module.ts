import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { MainComponent } from './main/main.component';
import { EmpbirthdayComponent } from './empbirthday/empbirthday.component';
import { EmprankingComponent } from './empranking/empranking.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { Opps404Component } from './opps404/opps404.component';
import { StorageComponent } from './storage/storage.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DevexpressComponent } from './devexpress/devexpress.component';
import { DxDataGridModule, DevExtremeModule } from 'devextreme-angular';

const routes: Routes = [
  {path: '', component: EmpbirthdayComponent, canActivate: [AuthGuard]},
  {path: 'home', component: EmpbirthdayComponent, canActivate: [AuthGuard]},
  {path: 'movies', component: EmprankingComponent, canActivate: [AuthGuard]},
  {path: 'search', component: EmpdetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
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
    Opps404Component,
    StorageComponent,
    LoginComponent,
    DevexpressComponent
  ],
  imports: [
    BrowserModule, //DOM works coz of this
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DxDataGridModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);