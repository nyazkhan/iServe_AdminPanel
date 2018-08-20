import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 
  list:SidebarList[];
  name: string;
  picUrl:any;

  constructor(private router : Router ) { }

  ngOnInit() {
    this.name= localStorage.getItem("name");

    if(localStorage.getItem("currentUserName") == 'management'){
      this.list = [
          {
            name:'Dashboard',
            icon:'dashboard',
            route:'/dashboard'
          },
          {
            name:'Incidents',
            icon:'description',
            route:'/incidents'
          },
          {
            name:'installation',
            icon:'build',
            route:'/installation'
          }
      ];

    this.picUrl= localStorage.getItem("picUrl")
    }
    if(localStorage.getItem("currentUserName") == 'superadmin'){
      this.list = [
          {
            name:'Dashboard',
            icon:'dashboard',
            route:'/dashboard'
          },
          {
            name:'Service Engineer',
            icon:'build',
            route:'/engineer'
          },
          {
            name:'Brand Manager',
            icon:'dashboard',
            route:'/manager'
          }
      ];
      this.picUrl=null;

    }
  }
logout(){
  localStorage.clear();
  this.router.navigate(['/login']);
}
}

export interface SidebarList{
  name:string;
  icon:string;
  route:string;
}


