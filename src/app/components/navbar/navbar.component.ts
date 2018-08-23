import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../Modules/incidents/incidents.service';
import { Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role = localStorage.getItem("roles");
  name: string;
  picUrl: string;
  email: string;
  username: string;
  contactNo: string;
  totalCount: number =0;
  userType: string;
  constructor(private incidentService: IncidentsService, private router : Router) { }
  countStatus = [];
  ngOnInit() {

    if (localStorage.getItem("currentUserName") == 'superadmin') {
      this.name = localStorage.getItem("name");

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
         console.log(this.totalCount)
        })
        console.log(this.countStatus);

      })
  }

  accountSetting(){
  this.router.navigate(["/incidents/edit"])
  }
}
