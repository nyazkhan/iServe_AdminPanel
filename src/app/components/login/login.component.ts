import { Component, OnInit } from '@angular/core';

import { TostService } from 'src/app/providers/tost.service';

import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { User } from '../../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {




  userTypes = ["management", "superadmin"];
  user = new User("Rajesh@123", "Abc@123", "", );

  submitted = false;
  forgetUserName:string;
  forgetPassword:string;
  otp:string;
  submitButton: boolean = false;

login=true;
userFrom=false;
otpForm=false;

userFormButton=false;
otpFormButton=false;

  constructor(private router: Router, private tostservice: TostService, private loginservice: LoginService,) {
    if (this.loginservice.isLoggedIn()) {

      this.navigateTo();
    }
  }

  ngOnInit() {
  }


  forgetPwdCick(){

this.login=false;
this.userFrom=true;

  }

  getOtpClick(){
this.userFormButton=true;
this.loginservice.getOtp(this.forgetUserName)
.subscribe((res:any)=>{
  this.userFrom=false;
  this.userFormButton=false;

  this.otpForm=true;

this.tostservice.showNotificationSuccess("Otp sent to register Phone No")
},(err)=>{
  this.tostservice.showNotificationFailure(err)
  this.userFrom=true;
  this.userFormButton=false;
})




  }


  passwordChangeClick(){
this.otpFormButton=true;
this.loginservice.forgetPwdChange({"otp":this.otp, "username":this.forgetUserName, "password":this.forgetPassword})
.subscribe((res:any)=>{
  this.otpForm=false;
  this.otpFormButton=false;

  this.login=true;

  this.tostservice.showNotificationSuccess("Password Change Successfuly")
},(err)=>{
  this.otpFormButton=false;

  this.otpForm=true;

  this.tostservice.showNotificationFailure(err)
})
  }
  onSubmit() {
    console.log(this.user);
    this.submitButton = true;
    this.loginservice.login(this.user)
      .subscribe((res: any) => {
        localStorage.setItem("access_token", res.access_token)
        if (localStorage.getItem("currentUserName") == "management") {
          this.loginservice.getUserInfo()
            .subscribe((res: any) => {
              this.storeInfo(res);
            },
              (err) => {
             this.tostservice.showNotificationFailure(err)
                // alert(JSON.stringify(err));
              })

        } else {
          this.navigateTo();
        }
      }, (err) => {
       
        this.tostservice.showNotificationFailure(err)
        console.log(err);
        
       
        // alert(err);
        this.submitButton = false;
    
      })
  }


  navigateTo() {

    if (localStorage.getItem("currentUserName") == "management") {
      console.log("navigate work")
      this.router.navigate(['/dashboard']);
    } else if (localStorage.getItem("currentUserName") == "superadmin") {
      this.router.navigate(['/engineer']);

    }
    else {
      this.router.navigate(['/login'])
    }

  }
  storeInfo = (res) => {
    const success = this.loginservice.storeUserInfo(res);
    success.subscribe((msg) => {

      this.navigateTo();
    },
      (err) => {
        this.tostservice.showNotificationFailure(err)
 
      })
  }
}