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

  constructor(private router: Router, private tostservice: TostService, private loginservice: LoginService,) {
    if (this.loginservice.isLoggedIn()) {

      this.navigateTo();
    }
  }
  submitButton: boolean = false;

  ngOnInit() {
  }

  userTypes = ["management", "superadmin"];
  user = new User("Rajesh@123", "Abc@123", "", );

  submitted = false;

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