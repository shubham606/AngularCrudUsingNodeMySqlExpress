import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  template:  `<img src="assets/img/Thebeginner.gif" height="200px" width="200px">
  `,
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent implements OnInit {
  isLoginMode = true;
  public static Email: any;
  public static ssr: WindowSessionStorage;
  email: any;
  password: any;
  name:any;
  mobile:any;
  userArray: any;
  result: boolean = false;
  roles:any[]=['user','admin'];
  public static userRegId:any;
  i:any;
  role:any;  

  constructor(private ccs: ConnectingserviceService, private router: Router) {
    this.ccs.getUser().subscribe(res => {
      this.userArray = res['response'];
      console.log(res);
      console.log(this.userArray);
    });
    
  }

  //@ViewChild("data") loginForm: NgForm;
  validate() {
    for (var ua of this.userArray) {
      console.log("in validate " + ua.Email + ' ' + ua.Password);
      if ((ua.Email === this.email && ua.Password === this.password)) {
        // sessionStorage.setItem("Id",ua.id);
        //sessionStorage.setItem("userName",ua.user_name);

      //console.log("in validate user reg id is "+LoginComponent.userRegId);
          for(this.i=0;this.i<this.roles.length;this.i++)
          {
            if(ua.role==this.roles[this.i])
            {
              console.log("role found in validate "+ua.role)
              this.role=ua.role;
              sessionStorage.setItem("role",this.role)
            }
          }
        this.result = true;
        console.log("welcome " + this.result);
        sessionStorage.setItem("id", ua.Id);
        sessionStorage.setItem("email", this.email);
        sessionStorage.setItem("name", ua.Name);
        sessionStorage.setItem("mobile", ua.Mobile);
        sessionStorage.setItem("password", this.password);
        this.router.navigate(['/success']);
        break;
      }
      if ((ua.Email != this.email && ua.Password != this.password)) {
        this.result = false;
        this.router.navigate(['/fail']);
      }
    }
  }
  ngOnInit() {
  }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
