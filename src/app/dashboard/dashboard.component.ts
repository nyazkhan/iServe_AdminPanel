import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Router } from '@angular/router';
import { TostService } from '../providers/tost.service';

declare var google: any;
// declare var require: any;
// declare var $: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public chart: any;
  public customer_suffering: any;
  public open_incidents: any;
  role: string;
  modalChart: string;
  open_incidences: Array<any>
  admin: boolean = false;
  statusCount: any;
  incidents = [];
  statusNew: number
  statusFixed: number
  statusRepair: number
  weeklyReport = [];
  complaintCount = [];
  stateCount = [];
  installationStateCount = [];

  suffering = [];
  incidentByCategory = [];

  subProductStatus1: any;
  subProductStatus2: any;
  subProductStatus3: any;
  subProductStatus4: any;
  subProductStatus5: any;
  subProductStatus6: any;
  subProductStatus7: any;
  subCatStatus = [];
  subProductStatusId = []



  productStatus1: any;
  productStatus2: any;
  productStatus3: any;
  productStatus4: any;
  productStatus5: any;
  productStatus6: any;
  productStatus7: any;
  productCategoryId = [];

  incidentProductCat = [];
  installationProdCat = []
  incidentCatIncident = [];

  installationProduct1: any;
  installationProduct2: any;
  installationProduct3: any;
  installationProduct4: any;
  installationProduct5: any;
  installationProduct6: any;
  installationProduct7: any;

  InstallproductCategoryId = [];
  installationCategoryId = [];

  installationProdCategory = []
  totalIncidents: number
  fixedIncidents: number;
  installation: number;
  ProductRegister: number;




  installationBycategory = [];

  showChart = false;



  mttrTillDate = [];
  dashboardStatus=[];


  constructor(private dashboardservice: DashboardService,
    private router: Router,
    private tostservice: TostService,
  ) {
  }


  dashboardFilterByDate(filterBy:string){


    this.dashboardservice.getDashboardFilterByDate(filterBy)
    .subscribe((res:any)=>{

    },(err)=>{
      this.tostservice.showNotificationFailure(err);
    })
  }


  showSubCat() {
    this.showChart = !this.showChart;
  }


  getDashboardDetails() {
    this.dashboardservice.getDashbord()
      .subscribe((res: any) => {
        console.log(res);
// this.dashboardStatus.push("1","2","3","4");
// this.dashboardStatus[1][0].push("1","2","3","4")
// console.log(this.dashboardStatus);
        this.totalIncidents = res.complaintCount;
        this.fixedIncidents = res.fixedComplaintCount;
        this.installation = res.installationCount;
        this.ProductRegister = res.productsRegisteredCount;
      })
    this.status_new_closed_carryForword()
  }

  status_new_closed_carryForword() {
    let data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  8],
      // ['Watch TV', 9],
      // ['Sleep',    7]
    ])
   var options:{
    chartArea:{left:10,top:0,width:'250%',height:'25%'}
   
   
    // "legend": 'top'

    // animation: {
    //   "startup": true,
    //   duration: 600,
    //   easing: 'in-out'
    // }
  };

    let chart = new google.visualization.PieChart(document.getElementById('graph_status'));
   
   
    chart.draw(data, options);

  }






  get_Sub_Cat_vs_Status(id) {
    this.subCatStatus = [];
    this.subProductStatusId = [];




    this.showChart = true;
    this.dashboardservice.getSubCatCount(id)
      .subscribe((res: any) => {
        console.log(res);
        this.subCatStatus.push(['Appliances', 'New', 'Assigned Service Engineer', 'Scheduled', 'Rejected', 'Not Fixed', 'Fixed', 'OnHold', { role: 'annotation' }]);
        res.forEach((element1: any) => {

          this.subProductStatusId.push(element1.productCategoryId)

          element1.statusInfo.forEach(element => {

            if (element.id == 1) {
              this.subProductStatus1 = element.count;
            }
            if (element.id == 2) {
              this.subProductStatus2 = element.count;
            }
            if (element.id == 4) {
              this.subProductStatus3 = element.count;
            }
            if (element.id == 5) {
              this.subProductStatus4 = element.count;
            }
            if (element.id == 6) {
              this.subProductStatus5 = element.count;
            }
            if (element.id == 7) {
              this.subProductStatus6 = element.count;
            }
            if (element.id == 9) {
              this.subProductStatus7 = element.count;
            }


          })
          this.subCatStatus.push([element1.name, parseInt(this.subProductStatus1), parseInt(this.subProductStatus2), parseInt(this.subProductStatus3), parseInt(this.subProductStatus4), parseInt(this.subProductStatus5), parseInt(this.subProductStatus6), parseInt(this.subProductStatus7), ''])
        });

        this.draw_open__incidences_chart();
      }
      )
  }

  draw_open__incidences_chart() {
    let data = google.visualization.arrayToDataTable(this.subCatStatus)
    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 7 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors: ['#ffd600', '#29b6f6', '#6600cc', '#e45e23', '#ff1a1a', '#41c300', '#ff0066'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };


    let chart = new google.visualization.BarChart(document.getElementById('sub_Cat_vs_Status'));


    google.visualization.events.addListener(chart, 'select', () => {
      let selectedItem = chart.getSelection()[0];

      let stdId: number;

      if (selectedItem) {

        if (selectedItem.column == 1) {
          stdId = 1;
        };
        if (selectedItem.column == 2) {
          stdId = 2;
        };
        if (selectedItem.column == 3) {
          stdId = 4;
        };
        if (selectedItem.column == 4) {
          stdId = 5;
        };
        if (selectedItem.column == 5) {
          stdId = 6;
        };
        if (selectedItem.column == 6) {
          stdId = 7;
        };
        if (selectedItem.column == 7) {
          stdId = 9;
        };
        this.subProductStatusId[selectedItem.row]

        //  this.routeToIncidents(stdId,this.subProductStatusId[selectedItem.row],0,);
      }

    });


    chart.draw(data, options);
  }











  // current incident against Product   starts here
  getCurrentIncidents() {
    this.dashboardservice.getCurrentIncident()
      .subscribe((res: any) => {
        console.log(res);
        this.incidents.push(['Appliances', 'New', 'Assigned Service Engineer', 'Scheduled', 'Rejected', 'Not Fixed', 'Fixed', 'OnHold', { role: 'annotation' }]);
        res.forEach((element1: any) => {

          this.productCategoryId.push(element1.productId)

          element1.statusInfo.forEach(element => {

            if (element.id == 1) {
              this.productStatus1 = element.count;
            }
            if (element.id == 2) {
              this.productStatus2 = element.count;
            }
            if (element.id == 4) {
              this.productStatus3 = element.count;
            }
            if (element.id == 5) {
              this.productStatus4 = element.count;
            }
            if (element.id == 6) {
              this.productStatus5 = element.count;
            }
            if (element.id == 7) {
              this.productStatus6 = element.count;
            }
            if (element.id == 9) {
              this.productStatus7 = element.count;
            }


          })
          this.incidents.push([element1.name, parseInt(this.productStatus1), parseInt(this.productStatus2), parseInt(this.productStatus3), parseInt(this.productStatus4), parseInt(this.productStatus5), parseInt(this.productStatus6), parseInt(this.productStatus7), ''])
        });

        this.draw_open_incidences_chart();
      }
      )
  }

  draw_open_incidences_chart() {
    let data = google.visualization.arrayToDataTable(this.incidents)
    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 7 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors: ['#ffd600', '#29b6f6', '#6600cc', '#e45e23', '#ff1a1a', '#41c300', '#ff0066'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };


    let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));


    google.visualization.events.addListener(open_incidences_chart, 'select', () => {
      var selectedItem = open_incidences_chart.getSelection()[0];

      var stdId: number;

      if (selectedItem) {

        if (selectedItem.column == 1) {
          stdId = 1;
        };
        if (selectedItem.column == 2) {
          stdId = 2;
        };
        if (selectedItem.column == 3) {
          stdId = 4;
        };
        if (selectedItem.column == 4) {
          stdId = 5;
        };
        if (selectedItem.column == 5) {
          stdId = 6;
        };
        if (selectedItem.column == 6) {
          stdId = 7;
        };
        if (selectedItem.column == 7) {
          stdId = 9;
        };
        this.productCategoryId[selectedItem.row]

        //  this.routeToIncidents(stdId,this.productCategoryId[selectedItem.row],0,);
      }

    });


    open_incidences_chart.draw(data, options);
  }
  // current incident against Product   ending here





  //  incident against Product   starts here
  getStatusCounts() {

    this.dashboardservice.getStatusCount()
      .subscribe((res: any[]) => {
        this.statusCount = res;
        console.log(res);
        this.suffering.push(['Appliances', '#Incidents'])
        res.forEach((element: any) => {
          this.incidentProductCat.push(element.productId)
          this.suffering.push([element.name, element.count])



        });

        this.customer_suffering_report();
      });

  }

  customer_suffering_report() {

    let options = {
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Incidents against Product Category',
        minValue: 0
      },
      vAxis: {
        title: 'Product Category'
      },
      'legend': 'top',
      colors: ['#ff9800'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    let data = google.visualization.arrayToDataTable(this.suffering);
    let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));

    google.visualization.events.addListener(chart, 'select', () => {
      var selectedItem = chart.getSelection()[0];


      if (selectedItem) {

        this.get_Sub_Cat_vs_Status(this.incidentProductCat[selectedItem.row])
        //  this.routeToIncidents(0,this.incidentProductCat[selectedItem.row],0,);
      }
    });

    chart.draw(data, options);
    // google.visualization.events.addListener(chart, 'select', function () {
    //   var selection = chart.getSelection();
    //   if (selection.length) {
    //     var title = data.getValue(selection[0].row, 0);
    //     var value = data.getValue(selection[0].row, selection[0].column);
    //   }
    //   if (title == 'Vacuum Cleaner')
    //     $('#Vacuum CleanerSufferers').modal();

    // });





  }
  //  incident against Product   Ending here






  //  incidents weekly report statrs here

  getIncidentWeeklyReports() {


    this.dashboardservice.getIncidentWeeklyReport()
      .subscribe((res: any) => {
        console.log(res);
        this.weeklyReport.push(['Appliances', 'Carry Forward', 'New', 'Closed'])
        res.forEach(element => {
          this.weeklyReport.push([element.name, element.carryForwardCount, element.count, element.fixCount])
        });

        this.incident_weekly_report();
      })
  }


  incident_weekly_report() {
    let data = google.visualization.arrayToDataTable(this.weeklyReport);


    let options = {
      chartArea: {
        left: 100,
        height: 100,
      },



      hAxis: {
        title: 'Incidents',
      },
      vAxis: {
        title: 'Appliances'
      },


      bar: { groupWidth: '75%' },
      'legend': 'top',
      bars: 'vertical',
      colors: ['#006600', '#00cc00', '#92c409',],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
    chart.draw(data, options);
  }

  //  incidents weekly report ends here





  // incidents status by state starts here
  getStatusByState() {
    this.dashboardservice.getStateByStatus()
      .subscribe((res: any) => {
        console.log(res)
        this.stateCount.push(['State', 'Total Incidents'])

        res.forEach(element => {
          this.stateCount.push([element.state, element.count])
        });
        this.regions_chart();
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
  }

  regions_chart() {
    {
      let data = google.visualization.arrayToDataTable(this.stateCount);

      let options = {
        region: 'IN',
        resolution: 'provinces',
        colorAxis: { colors: ['#01bcd7'] },
        animation: {
          "startup": true,
          duration: 600,
          easing: 'in-out'
        }
      };

      let chart = new google.visualization.GeoChart(document.getElementById('regions_chart'));
      google.visualization.events.addListener(chart, 'select', () => {
        var selectedItem = chart.getSelection()[0];
        console.log(selectedItem)


        if (selectedItem) {


          //  this.routeToIncidents(0,0,0,this.stateCount[selectedItem.row + 1 ][0]);
        }
      });

      chart.draw(data, options);
    }
  }

  // incidents status by state ends here

  // incidents against incidents starts here 
  getCategoryCount() {
    this.dashboardservice.getCategoryCounts()
      .subscribe((res: any) => {
        console.log(res)
        this.complaintCount.push(['Incident_type', '#Incidents'])
        res.forEach(element => {
          this.incidentCatIncident.push(element.id);
          this.complaintCount.push([element.name, element.count])
        });
        this.Complaint_Category();

      })
  }

  Complaint_Category() {

    let options = {
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Incidents against Incident Category',
        minValue: 0
      },
      vAxis: {
        title: 'Incident Category'
      },
      'legend': 'top',
      colors: ['#90ee02'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    let data = google.visualization.arrayToDataTable(this.complaintCount);
    let chart = new google.visualization.BarChart(document.getElementById('Complaint_Category'));

    google.visualization.events.addListener(chart, 'select', () => {
      var selectedItem = chart.getSelection()[0];

      if (selectedItem) {


        //  this.routeToIncidents(0,0,this.incidentCatIncident[selectedItem.row],);
      }
    });


    chart.draw(data, options);
  }
  // incidents against incidents ends here 



  // mean timetill date to repair start here
  get_MeanTime_Till_Date() {
    this.dashboardservice.getMTTR()
      .subscribe((res: any) => {
        console.log(res)
        this.mttrTillDate.push(['Appliances', '0-1 Day', '1-3 Days', '3-6 Days'])
        res.forEach(element => {
          if (element.meanTime == 0 || element.meanTime == "0") {
          } else {
            this.mttrTillDate.push([element.name, element.meanTime, element.meanTime, element.meanTime])
            this.mttrTillDate.push([element.name, element.meanTime, element.meanTime, element.meanTime])

          }
        }, (err) => {
          this.tostservice.showNotificationFailure(err)
        }
        );

        this.repair_time_Till_Date();
      })
  }
  repair_time_Till_Date() {

    var data = google.visualization.arrayToDataTable(this.mttrTillDate);

    var options = {

      title: 'Mean Time To Repair Product',
      height: 250,
      chartArea: {
        height: 150,
        top: 50,
      },
      vAxis: { title: 'Count' },
      hAxis: {
        title: 'Product Category',
        // slantedText:true,
        // slantedTextAngle:330 
      },
      seriesType: 'bars',

      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '80%' },

      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    // var options = {
    //   chartArea: {
    //     left: 80,
    //   },
    //   hAxis: {
    //     title: 'Mean Time To Repair (in days)',
    //   },

    //   vAxis: {
    //     title: 'Appliances'
    //   },
    //   legend: { position: 'top', maxLines: 7 },
    //   bar: { groupWidth: '75%' },
    //   isStacked: true,

    //   colors: ['#e63935'],
    //   animation: {
    //     "startup": true,
    //     duration: 600,
    //     easing: 'in-out'
    //   }
    // };

    var chart = new google.visualization.BarChart(document.getElementById('repair_time'));

    chart.draw(data, options);
  }

  // mean time to repair end here







  //  all managent charts load on managment loggin
  getAllManagmentCharts() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    google.charts.setOnLoadCallback(() => {



      // this.get_Sub_Cat_vs_Status();
      // this.getCurrent_Incid_Againgst_Incid_Category();
      this.getDashboardDetails();
      // this.getStatusCounts();
      // this.getCurrentIncidents();
      this.getIncidentWeeklyReports();
      this.getStatusByState();
      // this.getCategoryByStatus();
      // this.getCategoryCount();
      this.get_MeanTime_Till_Date();


      // installations charts
      // this.getCurrentInstallations();
      // this.getInstallationStatusCounts();
      // this.getInstallationStatusByState()
    })


  }


  ngOnInit() {
    this.role = localStorage.getItem("currentUserName");



    this.dashboardservice.loadScript().subscribe(
      (res) => { },
      (err) => { },
      () => {
        if (this.role == 'management') {
          this.getAllManagmentCharts();
        }

      }
    );




    // this.getStatusCount().then(res =>{
    // });




    // google.charts.setOnLoadCallback(this.ceo_customer_sufferers);





    // google.charts.setOnLoadCallback(this.incidents_hour);


    // google.charts.setOnLoadCallback(this.sufferers_piechart);
  }




}

