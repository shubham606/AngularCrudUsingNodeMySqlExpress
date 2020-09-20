import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
selector: 'app-home',

template:`
<br>

<h1><marquee bgcolor=blue behavior="alternate" >The Beginner Pvt Ltd</marquee></h1>
<br>
<br>
<nav class ="navbar">
<a class ="navbar-item" href ="/register" >
<img src="assets/img/register.png" height="300px" width="300px">
</a>
<a class ="navbar-item" href ="/home" >
<img src="assets/img/Thebeginner.gif" height="200px" width="200px">
</a>
<a class ="navbar-item" href ="/login">
<img src="assets/img/login.gif" height="300px" width="300px">
</a>
</nav>
`,

styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
constructor(private app: AppComponent) {
}
ngOnInit(): void {
}
}
