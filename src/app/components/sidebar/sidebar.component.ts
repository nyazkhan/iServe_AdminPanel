import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

 
  list:SidebarList[];

  constructor(private router : Router ) { }

  ngOnInit() {
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
      ]
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
      ]
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


