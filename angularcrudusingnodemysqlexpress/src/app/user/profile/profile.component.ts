import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserprofileService } from 'src/app/userprofile.service';
import { ConnectingserviceService } from 'src/app/connectingservice.service';
import { LoginComponent } from 'src/app/login/login.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  imageSrc: string;
  imageUrl;
  thumbnail:any;
  ProfileArray: any;
  userArray: any = [];
  Id;
  ProfileId;
  isUpdate: boolean = false;

  profileForm = new FormGroup({
    Id: new FormControl(sessionStorage.getItem("id")),
    ProfileId: new FormControl(sessionStorage.getItem("id")),
    Name: new FormControl(sessionStorage.getItem("name")),
    Email: new FormControl(sessionStorage.getItem("email")),
    Mobile: new FormControl(sessionStorage.getItem("mobile")),
    Password: new FormControl(sessionStorage.getItem("password")),
    userImage: new FormControl(''),
  });

  constructor(private ups: UserprofileService, private ccs: ConnectingserviceService, private sanitizer: DomSanitizer) {
      this.ccs.getUser().subscribe(res => {
      this.userArray = res['response'];
      
      });
      this.ups.getUserProfile().subscribe(res => {
      this.ProfileArray = res['response'];
      console.log(this.ProfileArray);
      });
  }

  addUserProfile() {
      this.ups.addUserProfile(this.profileForm.controls.Id.value,
      this.profileForm.controls.Name.value,
      this.profileForm.controls.Email.value,
      this.profileForm.controls.Mobile.value,
      this.profileForm.controls.Password.value).subscribe((data) => console.log(data));;
      console.log("data added" + this.profileForm.value);
  }

  ngOnInit(): void {
  }

  get f() {
    return this.profileForm.controls;
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
        const [file] = event.target.files;
        reader.readAsDataURL(file);
        reader.onload = () => {
        this.imageSrc = reader.result as string;
        this.profileForm.patchValue({
        fileSource: reader.result
        });
      };
    }
  } 
//  updateUserProfile() {
// //     console.log(this.userProfileArray);
//   let objectUrl = 'data:user_image/jpeg;base64,' + userProfile.user_image;
//   this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(objectUrl)
//   console.log(this.imageUrl);//    
// }
updateUserProfile() {
    this.isUpdate = !this.isUpdate;
    for(let Profile of this.ProfileArray){
      this.profileForm.controls.ProfileId.setValue(Profile.profileId);
      this.profileForm.controls.Name.setValue(Profile.Name);
      this.profileForm.controls.Email.setValue(Profile.Email);
      this.profileForm.controls.Mobile.setValue(Profile.Mobile);
      // this.profileForm.controls.userGender.setValue(userProfile.ender);
       this.profileForm.controls.Image.setValue(Profile.user_image);
      // console.log(Profile.image);
    }

 
  }


  update()
  {
    this.ups.updateUserProfile(this.profileForm.controls.ProfileId.value,this.profileForm.controls.Name.value,this.profileForm.controls.Email.value,this.profileForm.controls.Password.value,this.profileForm.controls.Mobile.value,this.profileForm.controls.userImage.value).subscribe((data)=>console.log(data));
  }

  submit() {
    console.log(this.profileForm.value);
  }
}
