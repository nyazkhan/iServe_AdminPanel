import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../Modules/incidents/incidents.service';
import { Router } from '@angular/router';

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
        console.log(this.countStatus);

      })
  }

  accountSetting(){
  this.router.navigate(["/incidents/edit"])
  }
}
