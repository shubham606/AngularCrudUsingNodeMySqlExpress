import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  
  AppComponent: any;
  LoginComponent: any;
  email: any;
  id:any;
  todaydate = new Date(); 
  name:any;
  constructor(private router: Router,private app :AppComponent) {
    //const _app=new AppComponent();
    
this.name = sessionStorage.getItem("name");
    console.log("success constructor");
    app.email = sessionStorage.getItem("email");
    app.isUserLoggedIn = true;
    app.role=sessionStorage.getItem("role");

    if(app.role== 'admin')
    app.isAdminRole=true;
    else if(app.role=='user')
    {
    app.isAdminRole=false;
    app.isUserRole=true; 
    }
  
  }
  
  ngOnInit(): void {

  }
}
