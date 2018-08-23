import { Component, OnInit } from '@angular/core';
import { ManagerDetails } from 'src/app/interface/manager_details';
import { IncidentsService } from '../incidents.service';

@Component({
  selector: 'app-edit-engineer',
  templateUrl: './edit-engineer.component.html',
  styleUrls: ['./edit-engineer.component.scss']
})
export class EditEngineerComponent implements OnInit {

  managerDetails= new ManagerDetails;
  id: string;
  name:string;
  contact_No: string;
  email: string;
  pic: string;
  userName: string;
  userType: string;
  constructor( private incidentservice: IncidentsService) { }

  ngOnInit() {
    this.name = localStorage.getItem("name");
    this.pic = localStorage.getItem("picUrl");
    this.email = localStorage.getItem("email");
    this.contact_No = localStorage.getItem("contactNo");
    this.userName = localStorage.getItem("username");
    this.userType = localStorage.getItem("roles");

  }


  // onSelectFile(){}
  onSubmit(){}

}
