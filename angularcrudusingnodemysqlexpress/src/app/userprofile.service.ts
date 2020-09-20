import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {


  uri = "http://localhost:3000/api/users/profile";
  constructor(private http: HttpClient) { }

  getUserProfile() {
    return this.http.get<any>(`${this.uri}`);
  }

  getUserProfileById(profileid) {
    return this.http.get<any>(`${this.uri}/${profileid}`);
  }

  addUserProfile(id,name,email,mobile, password) {
    const add_profile = {
      id: id,
      name: name,
      email: email,
      mobile:mobile,
      password:password,
    
    };
    console.log("in userprofile service add user method");
    return this.http.post(`${this.uri}`,add_profile);
  }

  updateUserProfile(profileid,name,email,password,mobile,Image) {
    const update_profile = {
      profileid:profileid,
      name: name,
      email: email,
      mobile:mobile,
      password:password,
     image:Image,
    };

    
    return this.http.put(`${this.uri}/${profileid}`,update_profile);
  }

  deleteUserProfile(profileid:number) {
    return this.http.delete(`${this.uri}/${profileid}`);
  }
}
