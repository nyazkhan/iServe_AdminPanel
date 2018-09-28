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

    this.name = localStorage.getItem("name");

    this.picUrl = typeof localStorage.getItem("picUrl")==='object'?'null':localStorage.getItem("picUrl");
    
   
    //  for management logging

    if (localStorage.getItem("currentUserName") == 'management') {
      this.email = localStorage.getItem("email");
      this.username = localStorage.getItem("username");
      this.contactNo = localStorage.getItem("contactNo");
    this.userType = localStorage.getItem("roles");
    
    
    this.getStatusCount();
    
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

//  get   incidents count

getStatusCount() {
  this.incidentService.getStatusByCount()
  .subscribe((res: any) => {
    this.countStatus = res;
    this.countStatus.forEach(element=>{
      this.totalCount= this.totalCount +    element.count;
    })
    
  })
}


gotoIncidents(id){
this.router.navigate(["/incidents"],{ queryParams: { sId: id}})
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
  .subscribe((updatedPicture:string)=>{this.picUrl=updatedPicture
  console.log(this.picUrl)});
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

