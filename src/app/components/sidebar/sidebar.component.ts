import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';

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
            icon:'build',
            route:'/incidents'
          }
      ]
    }
    if(localStorage.role == 'CEO'){
      this.list = [
          {
            name:'Dashboard',
            icon:'dashboard',
            route:'dashboard'
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


