import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { BrandManagerService } from './brand-manager.service';

@Component({
  selector: 'app-brand-manager',
  templateUrl: './brand-manager.component.html',
  styleUrls: ['./brand-manager.component.scss']
})
export class BrandManagerComponent implements OnInit {

  constructor(private router: Router, private brandService: BrandManagerService) { }

  dataRows: any;
  isDataLoad: boolean = false;

  headerRow: Array<string> = [
    'S.No.',
    'Profile Picture',
    'Name',
    'User Name',
    'Phone No',
    'Email',
  ]
  ngOnInit() {
    this.brandService.getManager()
    .subscribe((res:any)=>{
     this.dataRows= res;
    this.isDataLoad=false;
    console.log(res)
    },
    (err)=>{
      // throw err;
             alert(JSON.stringify(err));
            })
  }


  goto() {
    this.router.navigate(["/manager/addManager"])
  }




}
