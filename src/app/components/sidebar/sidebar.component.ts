import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  list: SidebarList[];
  name: string;
  picUrl: string;

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.picUrl = typeof localStorage.getItem("picUrl")==='object'?'null':localStorage.getItem("picUrl");

this.subscribeUsernameChanges();
this.subscribeUserPictureChanges();
    if (localStorage.getItem("currentUserName") === 'management') {
      this.list = [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          route: '/dashboard'
        },
        {
          name: 'Incidents',
          icon: 'description',
          route: '/incidents'
        },
        {
          name: 'installation',
          icon: 'build',
          route: '/installation'
        }
      ];

      console.log(this.picUrl);
      
    }
    if (localStorage.getItem("currentUserName") === 'superadmin') {
      this.list = [
        {
          name: 'Dashboard',
          icon: 'dashboard',
          route: '/dashboard'
        },
        {
          name: 'Service Engineer',
          icon: 'build',
          route: '/engineer'
        },
        {
          name: 'Brand Manager',
          icon: 'dashboard',
          route: '/manager'
        }
      ];

    }
  }

  


  subscribeUsernameChanges(){
    this.loginService.username.asObservable()
    .subscribe((updatedName:string)=>this.name=updatedName);
  }


  subscribeUserPictureChanges(){
    this.loginService.userpicture.asObservable()
    .subscribe((updatedPicture:string)=>this.picUrl=updatedPicture);
  }


  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}

export interface SidebarList {
  name: string;
  icon: string;
  route: string;
}


