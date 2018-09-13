import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../Modules/incidents/incidents.service';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role = localStorage.getItem("currentUserName");
  name: string;
  picUrl: string;
  email: string;
  username: string;
  contactNo: string;
  totalCount: number =0;
  userType: string;
  constructor(private incidentService: IncidentsService, 
    private router : Router,
  private loginService: LoginService
  ) { }
  countStatus = [];
  ngOnInit() {

    console.log(localStorage.getItem("picUrl"));
    
    if (localStorage.getItem("currentUserName") == 'superadmin') {
      this.name = localStorage.getItem("name");
      this.picUrl =null;
    }
    if (localStorage.getItem("currentUserName") == 'management') {
      this.name = localStorage.getItem("name");
      this.picUrl = localStorage.getItem("picUrl");
      this.email = localStorage.getItem("email");
      this.username = localStorage.getItem("username");
      this.contactNo = localStorage.getItem("contactNo");
    this.userType = localStorage.getItem("roles");




      this.getchart();

    }

this.subscribeUserContactNoChanges();
this.subscribeUserEmailChanges();
this.subscribeUsernameChanges();
this.subscribeUserPictureChanges();



  }



  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getchart() {
    this.incidentService.getChartData()
      .subscribe((res: any) => {
        this.countStatus = res;
        this.countStatus.forEach(element=>{
         this.totalCount= this.totalCount +    element.count;
        })

      })
  }

  accountSetting(){
  this.router.navigate(["/edit"])
  }


  subscribeUsernameChanges(){
    this.loginService.username.asObservable()
    .subscribe((updatedName:string)=>this.name=updatedName);
  }


  subscribeUserPictureChanges(){
    this.loginService.userpicture.asObservable()
    .subscribe((updatedPicture:string)=>this.picUrl=updatedPicture);
  }


  subscribeUserEmailChanges(){
    this.loginService.useremail.asObservable()
    .subscribe((updatedEmail:string)=>this.email=updatedEmail);
  }


  subscribeUserContactNoChanges(){
    this.loginService.usercontactno.asObservable()
    .subscribe((updatedContactNo:string)=>this.contactNo=updatedContactNo);
  }

}
