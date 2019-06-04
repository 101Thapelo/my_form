import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    SignUpComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:LoginComponent}, 
      {path:'sign-up',component:SignUpComponent},
      {path:'employee-list',component:EmployeeListComponent}
    ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
