// import { Component, OnInit } from '@angular/core';
// import { DashboardService } from './dashboard.service';
// import { Observable } from 'rxjs';
// import { TryCatchStmt } from '@angular/compiler';
// import {  Router } from '@angular/router';

// declare var google: any;
// declare var require: any;
// declare var $: any;


// @Component({
//   selector: 'app-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.scss'],
// })
// export class DashboardComponent implements OnInit {

//   public chart: any;
//   public customer_suffering: any;
//   public open_incidents: any;
//   role: string;
//   modalChart: string;
//   open_incidences: Array<any>
//   admin: boolean = false;
//   statusCount: any;
//   incidents = [];
//   statusNew: number
//   statusFixed: number
//   statusRepair: number
//   weeklyReport = [];
//   complaintCount = [];
//   meanTiming = [];
//   stateCount = [];
//   installationStateCount=[];

//   suffering = [];
//   incidentByCategory = [];

//   subProductStatus1: any;
//   subProductStatus2: any;
//   subProductStatus3: any;
//   subProductStatus4: any;
//   subProductStatus5: any;
//   subProductStatus6: any;
//   subProductStatus7: any;
//   subCatStatus=[];
//   subProductStatusId=[]



//   productStatus1: any;
//   productStatus2: any;
//   productStatus3: any;
//   productStatus4: any;
//   productStatus5: any;
//   productStatus6: any;
//   productStatus7: any;
//   productCategoryId=[];

// incidentProductCat=[];
// installationProdCat=[]
// incidentCatIncident=[];

//   installationProduct1: any;
//   installationProduct2: any;
//   installationProduct3: any;
//   installationProduct4: any;
//   installationProduct5: any;
//   installationProduct6: any;
//   installationProduct7: any;

//   InstallproductCategoryId=[];
//   installationCategoryId=[];

// installationProdCategory=[]
//   totalIncidents: number
//   fixedIncidents: number;
//   installation: number;
//   ProductRegister: number;




//   installationBycategory=[];

//   showChart=false;


//   constructor(private dashboardservice: DashboardService,
//     private router: Router,
//    ) {
//   }


//   showSubCat(){
//     this.showChart=!this.showChart;
//   }

//   routeToIncidents(id:number,pcid?: number,icid?:number,stid?){
//     console.log(stid + "   state name")
//     this.router.navigate(['/incidents'], { queryParams: { sId: id , pcId:pcid, icId:icid, stId: stid } });
  
//   }


//   routeToInstallation(id:number,pcid?: number,stid?){
//     this.router.navigate(['/installation'], { queryParams: { sId: id , pcId:pcid,  stId: stid } });

//   }

//   getDashboardDetails() {
//     this.dashboardservice.getDashbord()
//       .subscribe((res: any) => {
//         console.log(res);
//         this.totalIncidents=res.complaintCount;
//         this.fixedIncidents=res.fixedComplaintCount;
//         this.installation=res.installationCount;
//         this.ProductRegister=res.productsRegisteredCount;
//       })
//   }








//   get_Sub_Cat_vs_Status(id) {
// this.subCatStatus=[];
// this.subProductStatusId=[];




//     this.showChart=true;
//     this.dashboardservice.getSubCatCount(id)
//       .subscribe((res: any) => {
//         console.log(res);
//         this.subCatStatus.push(['Appliances', 'New', 'Assigned Service Engineer', 'Scheduled', 'Rejected', 'Not Fixed', 'Fixed', 'OnHold', { role: 'annotation' }]);
//         res.forEach((element1: any) => {

// this.subProductStatusId.push(element1.productCategoryId)

//           element1.statusInfo.forEach(element => {

//             if (element.id == 1) {
//               this.subProductStatus1 = element.count;
//             }
//             if (element.id == 2) {
//               this.subProductStatus2 = element.count;
//             }
//             if (element.id == 4) {
//               this.subProductStatus3 = element.count;
//             }
//             if (element.id == 5) {
//               this.subProductStatus4 = element.count;
//             }
//             if (element.id == 6) {
//               this.subProductStatus5 = element.count;
//             }
//             if (element.id == 7) {
//               this.subProductStatus6 = element.count;
//             }
//             if (element.id == 9) {
//               this.subProductStatus7 = element.count;
//             }


//           })
//           this.subCatStatus.push([element1.name, parseInt(this.subProductStatus1), parseInt(this.subProductStatus2), parseInt(this.subProductStatus3), parseInt(this.subProductStatus4), parseInt(this.subProductStatus5), parseInt(this.subProductStatus6), parseInt(this.subProductStatus7), ''])
//         });

//         this.draw_open__incidences_chart();
//       }
//       )
//   }

//   draw_open__incidences_chart() {
//     let data = google.visualization.arrayToDataTable(this.subCatStatus)
//     let options = {
//       chartArea: {
//         left: 120,
//       },
//       legend: { position: 'top', maxLines: 7 },
//       bar: { groupWidth: '75%' },
//       isStacked: true,
//       colors: ['#ffd600', '#29b6f6', '#6600cc', '#e45e23', '#ff1a1a', '#41c300', '#ff0066'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };


//     let chart = new google.visualization.BarChart(document.getElementById('sub_Cat_vs_Status'));
    
   
//     google.visualization.events.addListener(chart, 'select', ()=>{
//       let selectedItem = chart.getSelection()[0];
     
//      let stdId :number;
 
//        if (selectedItem) {

//         if (selectedItem.column==1) {
//           stdId=1;
//         };
//         if (selectedItem.column==2) {
//           stdId=2;
//         };
//         if (selectedItem.column==3) {
//           stdId=4;
//         };
//         if (selectedItem.column==4) {
//           stdId=5;
//         };
//         if (selectedItem.column==5) {
//           stdId=6;
//         };
//         if (selectedItem.column==6) {
//           stdId=7;
//         };
//         if (selectedItem.column==7) {
//           stdId=9;
//         };
// this.subProductStatusId[selectedItem.row]

//  this.routeToIncidents(stdId,this.subProductStatusId[selectedItem.row],0,);
//        }
 
//     });    


//     chart.draw(data, options);
//   }









// //   getCurrent_Incid_Againgst_Incid_Category() {
// //     this.dashboardservice.getCategoryStatus()
// //       .subscribe((res: any) => {
// //         this.incidentByCategory.push(['Appliances', 'New', 'Assigned Service Engineer', 'Scheduled', 'Rejected', 'Not Fixed', 'Fixed', 'OnHold', { role: 'annotation' }]);
// //         res.forEach((element1: any) => {
// //           this.incidentCategoryId.push(element1.id);

// // console.log(element1.name)
// //           element1.statusInfo.forEach(element => {

// //             if (element.id == 1) {
// //               this.incidentStatus1 = element.count;
// //             }
// //             if (element.id == 2) {
// //               this.incidentStatus2 = element.count;
// //             }
// //             if (element.id == 4) {
// //               this.incidentStatus3 = element.count;
// //             }
// //             if (element.id == 5) {
// //               this.incidentStatus4 = element.count;
// //             }
// //             if (element.id == 6) {
// //               this.incidentStatus5 = element.count;
// //             }
// //             if (element.id == 7) {
// //               this.incidentStatus6 = element.count;
// //             }
// //             if (element.id == 9) {
// //               this.incidentStatus7 = element.count;
// //             }


// //           })

// //           this.incidentByCategory.push([element1.name, parseInt(this.incidentStatus1), parseInt(this.incidentStatus2), parseInt(this.incidentStatus3), parseInt(this.incidentStatus4), parseInt(this.incidentStatus5), parseInt(this.incidentStatus6), parseInt(this.incidentStatus7), ''])
// //         });

// //         this.draw_open_incidences_chart_by_incident_category();
// //       }
// //       )
// //   }

// //   draw_open_incidences_chart_by_incident_category() {
// //     let data = google.visualization.arrayToDataTable(this.incidentByCategory)
// //     let options = {
// //       chartArea: {
// //         left: 100,
// //       },
// //       hAxis: {
// //         title: ' Current Incidents against Incidents Category',
// //         minValue: 0
// //       },
// //       vAxis: {
// //         title: 'Incidents Category'
// //       },
// //       legend: { position: 'top', maxLines: 15 },
// //       bar: { groupWidth: '70%' },
// //       isStacked: true,

// //       colors: ['#ffd600', '#29b6f6', '#6600cc', '#e45e23', '#ff1a1a', '#41c300', '#ff0066'],
// //       animation: {
// //         "startup": true,
// //         duration: 600,
// //         easing: 'in-out'
// //       }
// //     };

// //     let chart = new google.visualization.BarChart(document.getElementById('draw_open_incidences_chart_by_incident_category'));
   
// //     google.visualization.events.addListener(chart, 'select', ()=>{
// //       var selectedItem = chart.getSelection()[0];
     
// //      var stdId :number;
 
// //        if (selectedItem) {

// //         if (selectedItem.column==1) {
// //           stdId=1;
// //         };
// //         if (selectedItem.column==2) {
// //           stdId=2;
// //         };
// //         if (selectedItem.column==3) {
// //           stdId=4;
// //         };
// //         if (selectedItem.column==4) {
// //           stdId=5;
// //         };
// //         if (selectedItem.column==5) {
// //           stdId=6;
// //         };
// //         if (selectedItem.column==6) {
// //           stdId=7;
// //         };
// //         if (selectedItem.column==7) {
// //           stdId=9;
// //         };
// // this.incidentCategoryId[selectedItem.row]

// //  this.routeToIncidents(stdId,0,this.incidentCategoryId[selectedItem.row],);
// //        }
 
// //     });    

// //     chart.draw(data, options);
// //   }


//   // current incident against Product   starts here
//   getCurrentIncidents() {
//     this.dashboardservice.getCurrentIncident()
//       .subscribe((res: any) => {
//         console.log(res);
//         this.incidents.push(['Appliances', 'New', 'Assigned Service Engineer', 'Scheduled', 'Rejected', 'Not Fixed', 'Fixed', 'OnHold', { role: 'annotation' }]);
//         res.forEach((element1: any) => {

// this.productCategoryId.push(element1.productId)

//           element1.statusInfo.forEach(element => {

//             if (element.id == 1) {
//               this.productStatus1 = element.count;
//             }
//             if (element.id == 2) {
//               this.productStatus2 = element.count;
//             }
//             if (element.id == 4) {
//               this.productStatus3 = element.count;
//             }
//             if (element.id == 5) {
//               this.productStatus4 = element.count;
//             }
//             if (element.id == 6) {
//               this.productStatus5 = element.count;
//             }
//             if (element.id == 7) {
//               this.productStatus6 = element.count;
//             }
//             if (element.id == 9) {
//               this.productStatus7 = element.count;
//             }


//           })
//           this.incidents.push([element1.name, parseInt(this.productStatus1), parseInt(this.productStatus2), parseInt(this.productStatus3), parseInt(this.productStatus4), parseInt(this.productStatus5), parseInt(this.productStatus6), parseInt(this.productStatus7), ''])
//         });

//         this.draw_open_incidences_chart();
//       }
//       )
//   }

//   draw_open_incidences_chart() {
//     let data = google.visualization.arrayToDataTable(this.incidents)
//     let options = {
//       chartArea: {
//         left: 120,
//       },
//       legend: { position: 'top', maxLines: 7 },
//       bar: { groupWidth: '75%' },
//       isStacked: true,
//       colors: ['#ffd600', '#29b6f6', '#6600cc', '#e45e23', '#ff1a1a', '#41c300', '#ff0066'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };


//     let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
    
   
//     google.visualization.events.addListener(open_incidences_chart, 'select', ()=>{
//       var selectedItem = open_incidences_chart.getSelection()[0];
     
//      var stdId :number;
 
//        if (selectedItem) {

//         if (selectedItem.column==1) {
//           stdId=1;
//         };
//         if (selectedItem.column==2) {
//           stdId=2;
//         };
//         if (selectedItem.column==3) {
//           stdId=4;
//         };
//         if (selectedItem.column==4) {
//           stdId=5;
//         };
//         if (selectedItem.column==5) {
//           stdId=6;
//         };
//         if (selectedItem.column==6) {
//           stdId=7;
//         };
//         if (selectedItem.column==7) {
//           stdId=9;
//         };
// this.productCategoryId[selectedItem.row]

//  this.routeToIncidents(stdId,this.productCategoryId[selectedItem.row],0,);
//        }
 
//     });    


//     open_incidences_chart.draw(data, options);
//   }
//   // current incident against Product   ending here





//   //  incident against Product   starts here
//   getStatusCounts() {

//     this.dashboardservice.getStatusCount()
//       .subscribe((res: any[]) => {
//         this.statusCount = res;
//         console.log(res);
//         this.suffering.push(['Appliances', '#Incidents'])
//         res.forEach((element: any) => {
//           this.incidentProductCat.push(element.productId)
//           this.suffering.push([element.name, element.count])



//         });

//         this.customer_suffering_report();
//       });

//   }

//   customer_suffering_report() {

//     let options = {
//       chartArea: { width: '50%' },
//       hAxis: {
//         title: 'Incidents against Product Category',
//         minValue: 0
//       },
//       vAxis: {
//         title: 'Product Category'
//       },
//       'legend': 'top',
//       colors: ['#ff9800'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };
//     let data = google.visualization.arrayToDataTable(this.suffering);
//     let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
   
//     google.visualization.events.addListener(chart, 'select', ()=>{
//       var selectedItem = chart.getSelection()[0];
     
 
//        if (selectedItem) {

// this.get_Sub_Cat_vs_Status(this.incidentProductCat[selectedItem.row])
// //  this.routeToIncidents(0,this.incidentProductCat[selectedItem.row],0,);
//        }
//       });
   
//     chart.draw(data, options);
//     // google.visualization.events.addListener(chart, 'select', function () {
//     //   var selection = chart.getSelection();
//     //   if (selection.length) {
//     //     var title = data.getValue(selection[0].row, 0);
//     //     var value = data.getValue(selection[0].row, selection[0].column);
//     //   }
//     //   if (title == 'Vacuum Cleaner')
//     //     $('#Vacuum CleanerSufferers').modal();

//     // });





//   }
//   //  incident against Product   Ending here






//   //  incidents weekly report statrs here

//   getIncidentWeeklyReports() {


//     this.dashboardservice.getIncidentWeeklyReport()
//       .subscribe((res: any) => {
//         console.log(res);
//         this.weeklyReport.push(['Appliances', 'Carry Forward', 'New', 'Closed'])
//         res.forEach(element => {
//           this.weeklyReport.push([element.name, element.carryForwardCount, element.count, element.fixCount])
//         });

//         this.incident_weekly_report();
//       })
//   }


//   incident_weekly_report() {
//     let data = google.visualization.arrayToDataTable(this.weeklyReport);


//     let options = {
//       chartArea: {
//         left: 120,
//       },
//       hAxis: {
//         title: 'Incidents',
//       },
//       vAxis: {
//         title: 'Appliances'
//       },
//       bar: { groupWidth: '75%' },
//       'legend': 'top',
//       bars: 'vertical',
//       colors: ['#006600', '#00cc00','#92c409', ],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
//     chart.draw(data, options);
//   }

//   //  incidents weekly report ends here



//   setModalChart() {
//     console.log('hello');
//   }



//   // incidents status by state starts here
//   getStatusByState() {
//     this.dashboardservice.getStateByStatus()
//       .subscribe((res: any) => {
//         console.log(res)
//         this.stateCount.push(['State', 'Total Incidents'])
        
//         res.forEach(element => {
//           this.stateCount.push([element.state, element.count])
//         });
//         this.regions_chart();
//       })
//   }

//   regions_chart() {
//     {
//       let data = google.visualization.arrayToDataTable(this.stateCount);

//       let options = {
//         region: 'IN',
//         resolution: 'provinces',
//         colorAxis: { colors: ['#01bcd7'] },
//         animation: {
//           "startup": true,
//           duration: 600,
//           easing: 'in-out'
//         }
//       };

//       let chart = new google.visualization.GeoChart(document.getElementById('regions_chart'));
//       google.visualization.events.addListener(chart, 'select', ()=>{
//         var selectedItem = chart.getSelection()[0];
//         console.log(selectedItem)

   
//          if (selectedItem) {
  
  
//    this.routeToIncidents(0,0,0,this.stateCount[selectedItem.row + 1 ][0]);
//          }
//         });
  
//       chart.draw(data, options);
//     }
//   }

//   // incidents status by state ends here

//   // incidents against incidents starts here 
//   getCategoryCount() {
//     this.dashboardservice.getCategoryCounts()
//       .subscribe((res: any) => {
//         console.log(res)
//         this.complaintCount.push(['Incident_type', '#Incidents'])
//         res.forEach(element => {
//           this.incidentCatIncident.push(element.id);
//           this.complaintCount.push([element.name, element.count])
//         });
//         this.Complaint_Category();

//       })
//   }

//   Complaint_Category() {

//     let options = {
//       chartArea: { width: '50%' },
//       hAxis: {
//         title: 'Incidents against Incident Category',
//         minValue: 0
//       },
//       vAxis: {
//         title: 'Incident Category'
//       },
//       'legend': 'top',
//       colors: ['#ff9800'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };
//     let data = google.visualization.arrayToDataTable(this.complaintCount);
//     let chart = new google.visualization.BarChart(document.getElementById('Complaint_Category'));
   
//     google.visualization.events.addListener(chart, 'select', ()=>{
//       var selectedItem = chart.getSelection()[0];
     
//        if (selectedItem) {


//  this.routeToIncidents(0,0,this.incidentCatIncident[selectedItem.row],);
//        }
//       });
  
   
//     chart.draw(data, options);
//   }
//   // incidents against incidents ends here 


//   getCategoryByStatus() {
//     this.dashboardservice.getCategoryStatus()
//       .subscribe((res: any) => {
//         console.log(res)
//       })
//   }


//   // mean time to repair start here
//   getMeanTime() {
//     this.dashboardservice.getMTTR()
//       .subscribe((res: any) => {
//         console.log(res)
//         this.meanTiming.push(['Appliances', 'Mean time to repair'])
//         res.forEach(element => {
//           this.meanTiming.push([element.name, parseInt(element.meanTime)])
//         });

//         this.repair_time();
//       })
//   }
//   repair_time() {

//     var data = google.visualization.arrayToDataTable(this.meanTiming);

//     var options = {
//       chartArea: {
//         left: 80,
//       },
//       hAxis: {
//         title: 'Mean Time To Repair (in days)',
//         minValue: 0
//       },

//       vAxis: {
//         title: 'Appliances'
//       },
//       legend: { position: 'top', maxLines: 7 },
//       bar: { groupWidth: '75%' },
//       isStacked: true,

//       colors: ['#e63935'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     var chart = new google.visualization.BarChart(document.getElementById('repair_time'));

//     chart.draw(data, options);
//   }

//   // mean time to repair end here



// ///////////////////////


// getCurrentInstallations() {
//   this.dashboardservice.getCurrentInstallation()
//     .subscribe((res: any) => {
//       console.log(res);
//       this.installationBycategory.push(['Appliances', 'New', 'Assigned', 'Scheduled',  'OnHold','Installed', { role: 'annotation' }]);
//       res.forEach((element1: any) => {

//         this.InstallproductCategoryId.push(element1.productId)

//         element1.statusInfo.forEach(element => {

//           if (element.id == 1) {
//             this.installationProduct1 = element.count;
//           }
//           if (element.id == 4) {
//             this.installationProduct2 = element.count;
//           }
//           if (element.id == 9) {
//             this.installationProduct3 = element.count;
//           }
//           if (element.id == 10) {
//             this.installationProduct4 = element.count;
//           }
//           if (element.id == 11) {
//             this.installationProduct5 = element.count;
//           }
          


//         })
//         this.installationBycategory.push([element1.productCategory, parseInt(this.installationProduct1), parseInt(this.installationProduct4), parseInt(this.installationProduct2), parseInt(this.installationProduct3), parseInt(this.installationProduct5), ''])
//       });

//       this.draw_open_installation_chart();
//     }
//     )
// }

// draw_open_installation_chart() {
//   let data = google.visualization.arrayToDataTable(this.installationBycategory)
//   let options = {
//     chartArea: {
//       left: 120,
//     },
//     legend: { position: 'top', maxLines: 7 },
//     bar: { groupWidth: '75%' },
//     isStacked: true,
//     colors: ['#ffd600','#29b6f6', '#6600cc', '#ff0066',  '#41c300',],
//     animation: {
//       "startup": true,
//       duration: 600,
//       easing: 'in-out'
//     }
//   };


//   let open_installations_chart = new google.visualization.BarChart(document.getElementById('open_installations'));
  
 
//   google.visualization.events.addListener(open_installations_chart, 'select', ()=>{
//     var selectedItem = open_installations_chart.getSelection()[0];
   
//     var inStdId :number;
    

//      if (selectedItem) {
//       if (selectedItem.column==1) {
//         inStdId=1;
//       };
//       if (selectedItem.column==2) {
//         inStdId=4;
//       };
//       if (selectedItem.column==3) {
//         inStdId=9;
//       };
//       if (selectedItem.column==4) {
//         inStdId=10;
//       };
//       if (selectedItem.column==5) {
//         inStdId=11;
//       };
// // this.routeToIncidents(selectedItem.column);
// this.router.navigate(['/installation'], { queryParams: { sId:inStdId ,pcId:this.InstallproductCategoryId[selectedItem.row] } });

//        // var topping = data.getValue(selectedItem.row, 0);
//        // alert('The user selected ' + topping);
//      }

//   });    


//   open_installations_chart.draw(data, options);
// }




//   //  installation against Product   starts here
//   getInstallationStatusCounts() {

//     this.dashboardservice.getInstallationStatusCount()
//       .subscribe((res: any[]) => {
//         // this.statusCount = res;
//         console.log(res);
//         this.installationProdCategory.push(['Appliances', '#Installation'])
//         res.forEach((element: any) => {
//           this.installationProdCat.push(element.productId)
//           console.log(element.productCategoryId)
//           this.installationProdCategory.push([element.productCategory, element.count])



//         });

//         this.installation_against_Product_Category();
//       });

//   }

//   installation_against_Product_Category() {

//     let options = {
//       chartArea: { width: '50%' },
//       hAxis: {
//         title: 'Installation against Product Category',
//         minValue: 0
//       },
//       vAxis: {
//         title: 'Product Category'
//       },
//       'legend': 'top',
//       colors: ['#ff9800'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };
//     let data = google.visualization.arrayToDataTable(this.installationProdCategory);
//     let chart = new google.visualization.BarChart(document.getElementById('installation_against_Product_Category'));
   
//     google.visualization.events.addListener(chart, 'select', ()=>{
//       var selectedItem = chart.getSelection()[0];
     
 
//        if (selectedItem) {

// console.log(this.installationProdCat[selectedItem.row])
//  this.routeToInstallation(0,this.installationProdCat[selectedItem.row],0);
//        }
//       });
   
//     chart.draw(data, options);
//     // google.visualization.events.addListener(chart, 'select', function () {
//     //   var selection = chart.getSelection();
//     //   if (selection.length) {
//     //     var title = data.getValue(selection[0].row, 0);
//     //     var value = data.getValue(selection[0].row, selection[0].column);
//     //   }
//     //   if (title == 'Vacuum Cleaner')
//     //     $('#Vacuum CleanerSufferers').modal();

//     // });





//   }
//   //  installation against Product   Ending here



//   // incidents status by state starts here
//   getInstallationStatusByState() {
//     this.dashboardservice.getInstallationStateByStatus()
//       .subscribe((res: any) => {
//         this.installationStateCount.push(['provinces', 'Total Installation'])
        
//         res.forEach(element => {
//           this.installationStateCount.push([element.state, element.count])
//         });
//         this.installation_regions_chart();
//       })
//   }

//   installation_regions_chart() {
//     {
//       let data = google.visualization.arrayToDataTable(this.installationStateCount);

//       let options = {
//         region: 'IN',
//         resolution: 'provinces',
//         colorAxis: { colors: ['#01bcd7'] },
//         animation: {
//           "startup": true,
//           duration: 600,
//           easing: 'in-out'
//         }
//       };

//       let chart = new google.visualization.GeoChart(document.getElementById('installation_regions_chart'));
//       google.visualization.events.addListener(chart, 'select', ()=>{
//         var selectedItem = chart.getSelection()[0];
//         console.log(selectedItem)

   
//          if (selectedItem) {
  
  
//    this.routeToInstallation(0,0,this.installationStateCount[selectedItem.row + 1 ][0]);
//          }
//         });
  
//       chart.draw(data, options);
//     }
//   }

//   // incidents status by state ends here





// //////////////////////






//   //  all managent charts load on managment loggin
//   getAllManagmentCharts() {
//     google.charts.load('current', { packages: ['corechart', 'bar'] });

//     google.charts.setOnLoadCallback(()=>{



// // this.get_Sub_Cat_vs_Status();
//     // this.getCurrent_Incid_Againgst_Incid_Category();
//     this.getDashboardDetails();
//     this.getStatusCounts();
//     this.getCurrentIncidents();
//     this.getIncidentWeeklyReports();
//      this.getStatusByState();
//     this.getCategoryByStatus();
//     this.getCategoryCount();
//     this.getMeanTime();


//     // installations charts
//     this.getCurrentInstallations();
//     this.getInstallationStatusCounts();
//     this.getInstallationStatusByState()
//   })


//   }


//   ngOnInit() {
//     this.role = localStorage.getItem("currentUserName");



//     this.dashboardservice.loadScript().subscribe(
//       (res) => { },
//       (err) => { },
//       () => {
//         if (this.role == 'management') {
//           this.getAllManagmentCharts();
//         }

//       }
//     );




//     // this.getStatusCount().then(res =>{
//     // });




//     // google.charts.setOnLoadCallback(this.ceo_customer_sufferers);





//     // google.charts.setOnLoadCallback(this.incidents_hour);


//     // google.charts.setOnLoadCallback(this.sufferers_piechart);
//   }



//   //   ceo_customer_sufferers() {
//   //     let data = google.visualization.arrayToDataTable([
//   //       ['Appliances', '#Sufferers'],
//   //       ['Water Purifier', 20],
//   //       ['Vacuum Cleaner', 55,],
//   //       ['Air Purifier', 32],
//   //       ['Security Solutions', 45],
//   //       ['Health Conditionerss', 8]
//   //     ]);

//   //     let options = {
//   //       chartArea: {
//   //         left: 120,
//   //       },
//   //       backgroundColor: 'transparent',
//   //       hAxis: {
//   //         title: 'Customers Suffering',
//   //         minValue: 0,
//   //         textStyle: { color: '#fff' },
//   //         titleTextStyle: { color: '#fff' },
//   //         baselineColor: '#fff',
//   //       },
//   //       vAxis: {
//   //         title: 'Appliances',
//   //         textStyle: { color: '#fff' },
//   //         titleTextStyle: { color: '#fff' },
//   //       },
//   //       'legend': 'top',
//   //       legendTextStyle: { color: '#fff' },
//   //       colors: ['#fff'],
//   //       animation: {
//   //         "startup": true,
//   //         duration: 600,
//   //         easing: 'in-out'
//   //       }
//   //     };

//   //     let chart = new google.visualization.BarChart(document.getElementById('ceo_customer_sufferers'));
//   //     chart.draw(data, options);
//   //   }





//   //  incidents_hour() {
//   //       let data = google.visualization.arrayToDataTable([
//   //           ['Appliances', 'Customer', 'Support Centre', 'Engineer', 'Repair', { role: 'annotation' }],
//   //       ['Water Purifier', 0.25, 4, 9, 4, ''],
//   //       ['Vacuum Cleaner', 1, 2, 12, 3, ''],
//   //       ['Air Purifier', 0.5, 3, 7, 5, ''],
//   //       ['Security Solutions', 0.25, 1, 8, 4, ''],
//   //       ['Health Conditionerss', 0.3, 1, 5, 1, '']
//   //     ]);

//   //     let options = {
//   //         chartArea: {
//   //             left: 120,
//   //       },
//   //       legend: { position: 'top', maxLines: 3 },
//   //       bar: { groupWidth: '75%' },
//   //       isStacked: true,
//   //       colors: ['#c370fd', '#9b3aee', '#8e2baa', '#5a0173'],
//   //       animation: {
//   //         "startup": true,
//   //         duration: 600,
//   //         easing: 'in-out'
//   //       }
//   //     };

//   //     let chart = new google.visualization.BarChart(document.getElementById('incedents_hour'));
//   //     chart.draw(data, options);
//   //   }



//   //   sufferers_piechart() {

//   //       var data = google.visualization.arrayToDataTable([
//   //       ['Appliance', '#Sufferers'],
//   //       ['Ovens', 11],
//   //       ['Steam Vacuum Cleaner', 2],
//   //       ['Hobs & Cooktops', 2],
//   //       ['Kitchen Chimneys', 2],
//   //       ['Microwaves', 7],
//   //       ['Drawers', 3]
//   //     ]);

//   //     var options = {
//   //         'width': 600,
//   //         'height': 400,
//   //       'legend': 'left',
//   //       is3D: true,
//   //       colors: ['#ea4b59', '#f0954f', '#ffe902', '#bccf01', '#64c6ef', '#009fe3', '#c066a7'],
//   //       animation: {
//   //           "startup": true,
//   //           duration: 600,
//   //           easing: 'in-out'
//   //         }
//   //       };

//   //       var chart = new google.visualization.PieChart(document.getElementById('sufferers_piechart'));

//   //       chart.draw(data, options);
//   //     }


// }








































