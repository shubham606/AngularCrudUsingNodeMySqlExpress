import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() {
    
   }
   logout()
   {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("role");
    sessionStorage.clear();
   }

  ngOnInit(): void {
  }

}
