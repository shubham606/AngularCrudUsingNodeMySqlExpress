import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConnectingserviceService {
 
  
  uri = "http://localhost:3000/api/users";
  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<any>(`${this.uri}`);
  }

  getUserById(id) {
    return this.http.get(`${this.uri}/${id}`);
  }
  addUser(name,email,password,mobile,role) {
    const add_user = {
      name:name,
      email: email,
      password: password,
      mobile: mobile,
      role:role
    };
    return this.http.post(`${this.uri}`, add_user);
  }

  updateUser(id:number,name,password,email, mobile) {
    const update_user = {
      name:name,
      email: email,
      password: password,
      mobile: mobile
    };
    return this.http.put(`${this.uri}/${id}`,update_user);
  }

  deleteUser(id:number) {
    return this.http.delete(`${this.uri}/${id}`);
  }
}