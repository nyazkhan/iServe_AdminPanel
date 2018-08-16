import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Observable } from 'rxjs';
import { TryCatchStmt } from '@angular/compiler';

declare var google: any;
declare var require: any;
declare var $: any;


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
  complaintCount=[];
  meanTime=[];
  stateCount=[];
  
  suffering = [];
  constructor(private dashboardservice: DashboardService) {

  }




  // ceo_customer_sufferers() {
  //   let data = google.visualization.arrayToDataTable([
  //     ['Appliances', '#Sufferers'],
  //     ['Water Purifier', 20],
  //     ['Vacuum Cleaner', 55,],
  //     ['Air Purifier', 32],
  //     ['Security Solutions', 45],
  //     ['Health Conditionerss', 8]
  //   ]);

  //   let options = {
  //     chartArea: {
  //       left: 120,
  //     },
  //     backgroundColor: 'transparent',
  //     hAxis: {
  //       title: 'Customers Suffering',
  //       minValue: 0,
  //       textStyle: { color: '#fff' },
  //       titleTextStyle: { color: '#fff' },
  //       baselineColor: '#fff',
  //     },
  //     vAxis: {
  //       title: 'Appliances',
  //       textStyle: { color: '#fff' },
  //       titleTextStyle: { color: '#fff' },
  //     },
  //     'legend': 'top',
  //     legendTextStyle: { color: '#fff' },
  //     colors: ['#fff'],
  //     animation: {
  //       "startup": true,
  //       duration: 600,
  //       easing: 'in-out'
  //     }
  //   };

  //   let chart = new google.visualization.BarChart(document.getElementById('ceo_customer_sufferers'));
  //   chart.draw(data, options);
  // }




  getCurrentIncidents() {
    this.dashboardservice.getCurrentIncident()
      .subscribe((res: any) => {
        console.log(res);
        this.incidents.push(['Appliances', 'New', 'Fixed', 'InProgress', { role: 'annotation' }]);
        res.forEach((element: any) => {
          var TotalCount = element.count;
          element.statusInfo.forEach(element => {
            if (element.name === "New") {
              this.statusNew = element.count;
            }
            if (element.name === "Assigned Service Engineer") {
              this.statusFixed = element.count;
            } else {
              this.statusRepair = TotalCount - (this.statusNew + this.statusFixed)
            }


          })
          this.incidents.push([element.name, this.statusNew, this.statusFixed, this.statusRepair, ''])
        });

        google.charts.setOnLoadCallback(this.draw_open_incidences_chart(this));
        console.log(this.incidents)
      }
      )
  }

  draw_open_incidences_chart(that) {
    let data = google.visualization.arrayToDataTable(that.incidents)
    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors: ['#fdcdcd', '#ff5252', '#a70000'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
    open_incidences_chart.draw(data, options);
  }



  getStatusCounts() {

    this.dashboardservice.getStatusCount()
      .subscribe((res: any[]) => {
        this.statusCount = res;
        console.log(res);
        this.suffering.push(['Appliances', '#Incidents'])
        res.forEach((element: any) => {
          this.suffering.push([element.name, element.count])
        });
        google.charts.setOnLoadCallback(this.customer_suffering_report(this));
      });

  }

  customer_suffering_report(that) {

    let options = {
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Incidents against Product Category',
        minValue: 0
      },
      vAxis: {
        title: 'Category'
      },
      'legend': 'top',
      colors: ['#ff9800'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    let data = google.visualization.arrayToDataTable(that.suffering);
    let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'select', function () {
      var selection = chart.getSelection();
      if (selection.length) {
        var title = data.getValue(selection[0].row, 0);
        var value = data.getValue(selection[0].row, selection[0].column);
      }
      if (title == 'Vacuum Cleaner')
        $('#Vacuum CleanerSufferers').modal();

    });





  }


  getIncidentWeeklyReports() {


    this.dashboardservice.getIncidentWeeklyReport()
      .subscribe((res: any) => {
        this.weeklyReport.push(['Appliances', 'Carry Forward', 'New', 'Closed'])
        res.forEach(element => {
          this.weeklyReport.push([element.categoryName, element.carryForwardCount, element.newCount, element.fixedCount])
          console.log(this.weeklyReport)
        });

        google.charts.setOnLoadCallback(this.incident_weekly_report(this));
      })
  }




  incident_weekly_report(that) {
    let data = google.visualization.arrayToDataTable(that.weeklyReport);


    let options = {
      chartArea: {
        left: 120,
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
      colors: ['#cddc3a', '#8ac34a', '#3a8a3d'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
    chart.draw(data, options);
  }

  setModalChart() {
    console.log('hello');
  }
  
  // incidents_hour() {
    //   let data = google.visualization.arrayToDataTable([
      //     ['Appliances', 'Customer', 'Support Centre', 'Engineer', 'Repair', { role: 'annotation' }],
  //     ['Water Purifier', 0.25, 4, 9, 4, ''],
  //     ['Vacuum Cleaner', 1, 2, 12, 3, ''],
  //     ['Air Purifier', 0.5, 3, 7, 5, ''],
  //     ['Security Solutions', 0.25, 1, 8, 4, ''],
  //     ['Health Conditionerss', 0.3, 1, 5, 1, '']
  //   ]);

  //   let options = {
    //     chartArea: {
      //       left: 120,
  //     },
  //     legend: { position: 'top', maxLines: 3 },
  //     bar: { groupWidth: '75%' },
  //     isStacked: true,
  //     colors: ['#c370fd', '#9b3aee', '#8e2baa', '#5a0173'],
  //     animation: {
  //       "startup": true,
  //       duration: 600,
  //       easing: 'in-out'
  //     }
  //   };
  
  //   let chart = new google.visualization.BarChart(document.getElementById('incedents_hour'));
  //   chart.draw(data, options);
  // }
  
  repair_time(that) {

    var data = google.visualization.arrayToDataTable(that.meanTime);
  
    var options = {
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Mean Time To Repair (in days)',
        minValue: 0
      },
      vAxis: {
        title: 'Appliances'
      },
      'legend': 'top',
      colors: ['#e63935'],
      animation: {
          "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    var chart = new google.visualization.BarChart(document.getElementById('repair_time'));
  
    chart.draw(data, options);
  }

  // sufferers_piechart() {
    
    //   var data = google.visualization.arrayToDataTable([
  //     ['Appliance', '#Sufferers'],
  //     ['Ovens', 11],
  //     ['Steam Vacuum Cleaner', 2],
  //     ['Hobs & Cooktops', 2],
  //     ['Kitchen Chimneys', 2],
  //     ['Microwaves', 7],
  //     ['Drawers', 3]
  //   ]);
  
  //   var options = {
    //     'width': 600,
    //     'height': 400,
  //     'legend': 'left',
  //     is3D: true,
  //     colors: ['#ea4b59', '#f0954f', '#ffe902', '#bccf01', '#64c6ef', '#009fe3', '#c066a7'],
  //     animation: {
    //       "startup": true,
    //       duration: 600,
    //       easing: 'in-out'
    //     }
    //   };
    
    //   var chart = new google.visualization.PieChart(document.getElementById('sufferers_piechart'));
    
    //   chart.draw(data, options);
    // }
    
    
    getStatusByState() {
      this.dashboardservice.getStateByStatus()
      .subscribe((res: any) => {
        console.log(res)
        this.stateCount.push(['Province', 'Weekly Open Incidents'])
        this.stateCount.push(['punjab', '56'])
        this.stateCount.push(['haryana', '4'])
        res.forEach(element => {
          this.stateCount.push([element.state, element.count])
          google.charts.setOnLoadCallback(this.regions_chart(this));
        });
      })
    }
    
    regions_chart(that) {
      {
        let data = google.visualization.arrayToDataTable(that.stateCount);
  
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
  
        chart.draw(data, options);
      }
    }
    
    
    
    getCategoryCount() {
      this.dashboardservice.getCategoryCounts()
      .subscribe((res: any) => {
        console.log(res)
        this.complaintCount.push(['Incident_type', '#Incidents'])
        res.forEach(element => {
          this.complaintCount.push([element.name, element.count])
        });
        
        google.charts.setOnLoadCallback(this.Complaint_Category(this));
        
      })
    }

  Complaint_Category(that) {

    let options = {
      chartArea: { width: '50%' },
      hAxis: {
        title: 'Incidents against Incident Category',
        minValue: 0
      },
      vAxis: {
        title: 'Category'
      },
      'legend': 'top',
      colors: ['#ff9800'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    let data = google.visualization.arrayToDataTable(that.complaintCount);
    let chart = new google.visualization.BarChart(document.getElementById('Complaint_Category'));
    chart.draw(data, options);
  }

  getCategoryByStatus() {
    this.dashboardservice.getCategoryStatus()
    .subscribe((res: any) => {
      console.log(res)
    })
  }
  
  
  getMeanTime() {
    this.dashboardservice.getMTTR()
    .subscribe((res: any) => {
      this.meanTime.push(['Appliances', 'Mean time to repair'])
      res.forEach(element => {
        this.meanTime.push([element.name, element.MTTR])
        google.charts.setOnLoadCallback(this.repair_time(this));
        });


      })
  }

  getAllCharts() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    this.getStatusCounts();
    this.getCurrentIncidents();
    this.getIncidentWeeklyReports();
    this.getStatusByState();
    this.getCategoryByStatus();
    this.getCategoryCount();
    this.getMeanTime();

  }


  ngOnInit() {



    this.dashboardservice.loadScript().subscribe(
      (res) => { },
      (err) => { },
      () => {
        // this.getAllCharts();
      }
    );




    // this.getStatusCount().then(res =>{
    // });
    this.role = localStorage.getItem("currentUserName");



    // google.charts.setOnLoadCallback(this.ceo_customer_sufferers);





    // google.charts.setOnLoadCallback(this.incidents_hour);


    // google.charts.setOnLoadCallback(this.sufferers_piechart);
  }
}

