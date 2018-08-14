import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../../Modules/incidents/incidents.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  role:string = localStorage.role;
  constructor(private incidentService: IncidentsService) { }
  countStatus=[];
  ngOnInit() {
    this.getchart();
  }
  getchart() {
    this.incidentService.getChartData()
    .subscribe((res:any)=>{
     this.countStatus=res;
      console.log(this.countStatus);

    })
}
}
