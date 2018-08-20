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
  constructor( private incidentservice: IncidentsService) { }

  ngOnInit() {
  }

  onSelectFile(){

  }
  onSubmit(){}

}
