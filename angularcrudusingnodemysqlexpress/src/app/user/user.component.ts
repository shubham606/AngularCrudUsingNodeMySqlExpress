import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private app: AppComponent) {
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
