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
  user = new User("Rajesh@123", "Abc@123", "");

  submitted = false;
  forgetUserName: string;
  forgetPassword: string;
  otp: string;
  submitButton: boolean = false;

  login = true;
  userFrom = false;
  otpForm = false;

  userFormButton = false;
  otpFormButton = false;

  constructor(private router: Router, private tostservice: TostService, private loginservice: LoginService, ) {
    if (this.loginservice.isLoggedIn()) {

      this.navigateTo();
    }
  }

  ngOnInit() {
  }

  // user click on forget password

  forgetPwdCick() {

    this.login = false;
    this.userFrom = true;

  }


  // request for otp or otp will be  send on user register phn no 

  getOtpClick() {
    this.userFormButton = true;
    this.loginservice.getOtp(this.forgetUserName)
      .subscribe((res: any) => {
        this.userFrom = false;
        this.userFormButton = false;

        this.otpForm = true;

        this.tostservice.showNotificationSuccess("Otp sent to register Phone No")
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
        this.userFrom = true;
        this.userFormButton = false;
      })


  }


  //  otp enter by user and request for password change by this function
  passwordChangeClick() {
    this.otpFormButton = true;
    this.loginservice.forgetPwdChange({ "otp": this.otp, "username": this.forgetUserName, "password": this.forgetPassword })
      .subscribe((res: any) => {
        this.otpForm = false;
        this.otpFormButton = false;

        this.login = true;

        this.tostservice.showNotificationSuccess("Password Change Successfuly")
      }, (err) => {
        this.otpFormButton = false;

        this.otpForm = true;

        this.tostservice.showNotificationFailure(err)
      })
  }


  // user loging function

  onSubmit() {
    this.submitButton = true;
    this.loginservice.login(this.user)
      .subscribe((res: any) => {
        localStorage.setItem("access_token", res.access_token)
        if (localStorage.getItem("currentUserName") == "management") {
          this.loginservice.getUserInfo()
            .subscribe((res: any) => {
              this.storeInfo(res);
              this.tostservice.showNotificationSuccess("Login successfuly")
            },
              (err) => {
                this.tostservice.showNotificationFailure(err)
              })

        } else {
          this.navigateTo();
        }
      }, (err) => {

        this.tostservice.showNotificationFailure(err)
        this.submitButton = false;

      })
  }


  // navigate on the basis of user type

  navigateTo() {

    if (localStorage.getItem("currentUserName") == "management") {
      this.router.navigate(['/dashboard']);
    } else if (localStorage.getItem("currentUserName") == "superadmin") {
      this.router.navigate(['/engineer']);
    }
    else {
      this.router.navigate(['/login'])
    }

  }

  // store user information at a time of login
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