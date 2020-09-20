import { Component, OnInit } from '@angular/core';
import { ConnectingserviceService } from '../connectingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  allUsers: any = [];
  data: any;
  name: any;
  email: any;
  password: any;
  mobile: any;
  // image:any;
  formdata: any;
  userArray:any;
  Role="user";
  isUserEmailValid:boolean=true;
  isBothPassValid:boolean=true;


  constructor(private ccs: ConnectingserviceService, private router: Router) {  
    console.log("in register component.ts");
    this.ccs.getUser().subscribe(res => {
    this.userArray = res['response'];
  }); }

  ngOnInit() {
    console.log("ngoninit working");  
  }
  
  addUser() {
    for(var ua of this.userArray)
    {
      console.log(this.email+ ' == '+ua.email);
      if(this.email==ua.email && ua.email!='')
      {
        console.log("user is already registered");
        this.isUserEmailValid=false;
        return;
      }
      else{
        this.isUserEmailValid=true;
      }
    }
  
    if (this.password === this.password) {
      this.ccs.addUser(this.name,this.email, this.password,this.mobile,this.Role='user').subscribe((data) => console.log(data));
      console.log("data added in table");
      this.router.navigate(['/login']);
    }
    else {
      this.isBothPassValid=false;
      console.log("password does not match");
    }
  }

  onClickSubmit() {
    console.log(this.email, this.password);
  }
  cancel()
  {
    this.name="";
    this.email="";
    this.password="";
    this.mobile="";
    // this.image="";
    this.isUserEmailValid=true;
    this.isBothPassValid=true;
  }
}
