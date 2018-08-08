// import { Component, OnInit } from '@angular/core';
// import { Router } from '../../../../node_modules/@angular/router';
// import { ServiceEngineerService } from './service-engineer.service';

// @Component({
//   selector: 'app-service-engineer',
//   templateUrl: './service-engineer.component.html',
//   styleUrls: ['./service-engineer.component.scss']
// })
// export class ServiceEngineerComponent implements OnInit {


//   constructor(private router: Router, private engineerService: ServiceEngineerService) { }

//   dataRows: any;
//   isDataLoad: boolean = false;

//   headerRow: Array<string> = [ 'S.No.','Profile Picture',
//     'Name',
//     'User Name',
//     'Phone No',
//     'specialist',
//     'More details'
//   ]
//   ngOnInit() {
//     this.engineerService.getEngineers()
//     .subscribe((res:any)=>{
//      this.dataRows= res;
//     this.isDataLoad=false;
//     console.log(res)
//     },
//     (err)=>{
//       // throw err;
//              alert(JSON.stringify(err));
//             })
//   }


//   goto() {
//     this.router.navigate(["/engineer/addEngineer"])
//   }





// }
