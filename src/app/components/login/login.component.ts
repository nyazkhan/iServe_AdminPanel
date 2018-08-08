import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { Router } from '../../../../node_modules/@angular/router';
import { User } from '../../interface/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: LoginService) {
    if (this.loginservice.isLoggedIn()) {

      this.navigateTo();
    }
  }
  submitButton: boolean = false;

  ngOnInit() {
  }

  userTypes = ["management", "superadmin"];
  user = new User("nyaz123", "123456", "", );

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
                // throw err;
                alert(JSON.stringify(err));
              })

        }
        else {
          this.navigateTo();
        }
      }, (err) => {
        // console.log(JSON.stringify(err) + "  errrr");
        this.submitButton = false;
        // throw err;


        alert(JSON.stringify(err));

      })
  }

  navigateTo() {

    if (localStorage.getItem("currentUserName") == "management") {
      console.log("navigate work")
      this.router.navigate(['/dashboard']);
    } else if (localStorage.getItem("currentUserName") == "superadmin") {
      this.router.navigate(['/dashboard']);

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
        // throw err;
        alert(JSON.stringify(err));
      })
}
}