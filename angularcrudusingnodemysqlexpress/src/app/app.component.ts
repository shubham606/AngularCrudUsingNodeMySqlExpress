import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
title:any;
email: any;
public logoutMsg: any;
isUserLoggedIn = true;
isAdminRole: boolean = false;
role: any;
isUserRole:boolean=false;


constructor(private router: Router) {
console.log("in cons isAdminRole is " + this.isAdminRole);
this.email = sessionStorage.getItem("email");
this.role=sessionStorage.getItem("role");
console.log("email in app.ts is ->" + this.email);
console.log("role in app.ts is ->"+this.role);  
  if(this.role== 'admin')
    this.isAdminRole=true;
    else if(this.role=='user')
    {
    this.isAdminRole=false;
    this.isUserRole=true; 
    }
if (this.email ===   null) {
this.isUserLoggedIn = !this.isUserLoggedIn;
console.log("in if of app.ts " + this.isUserLoggedIn);
}
else {
this.isUserLoggedIn = this.isUserLoggedIn;
console.log("in else of app.ts " + this.isUserLoggedIn);
}
}

navbarOpen = false;
toggleNavbar() {
this.navbarOpen = !this.navbarOpen;
}


logout() {
sessionStorage.clear();
// this.logoutMsg = "you have been logout successfully !!!";
// console.log(this.logoutMsg);
 this.isUserLoggedIn = !this.isUserLoggedIn;
 this.isAdminRole =false;
this.email = null;
this.role = null;
 this.isUserRole=false;
this.router.navigate(['/login']);
}


ngOnInit() {   
}
}