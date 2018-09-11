import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { TostService } from '../providers/tost.service';

declare var google: any;
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public chart: any;

  role: string;

  statusCount: any;
  statusByProductCat = [];
  stateCount = [];
  mttrTillDate = [];
  productWarranty = [];
  incidentAge = [];
  filter = {};
  statusCarryForward: number
  statusClosed: number
  statusNew: number;
  productCategoryName: Array<any>

  filterByDate = "year";
  filterId: number;
  filterRange: object;


  rating = [];
  rating0: number;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  rating5: number;




  constructor(private dashboardservice: DashboardService,
    private tostservice: TostService,
  ) {
  }




  dashboardFilterByDate(value) {
    this.filterByDate = value;
    console.log(this.filterByDate)
    this.filterRange = {};
    this.getFilter();
    this.getCharts();

  }

  forAllProduct() {
    this.filterId = null;
    console.log(this.filterId)
    this.getFilter();
    this.getCharts();

  }

  filterByRange(value) {
    this.filterByDate = "";
    this.filterRange = value;
    this.getFilter();
  }

  getFilter() {

    // if (this.filterRange) {
    //   this.filter["range"] = this.filterRange;

    // } 
    if (this.filterByDate) {
      this.filter["duration"] = this.filterByDate;

    }

    if (this.filterId) {
      console.log(this.filterId)
      this.filter["categoryId"] = this.filterId;
    }


  }

  filterByProduct(id) {
    // this.getFilter(id)
    this.filterId = id;
    this.getFilter();
    this.getCharts();
  }



  getProductCategory() {
    this.dashboardservice.getDashboardFilterByDate()
      .subscribe((res) => {
        console.log(res)
        this.productCategoryName = res;
      })
  }



  getDashboardDetails() {
    this.dashboardservice.getDashbord(this.filter)
      .subscribe((res: any) => {
        // console.log(res);
        this.statusCarryForward = res.CARRYFORWARD;
        this.statusClosed = res.CLOSED;
        this.statusNew = res.NEW;

      })
  }





  get_product_rating_chart() {
this.rating=[];

    this.dashboardservice.getProductRating(this.filter)
      .subscribe((res: any) => {
        console.log(res);


        this.rating.push(['Appliances', "Don't Care","Rating 1","Rating 2","Rating 3","Rating 4","Rating 5" ]);
        res.forEach((element1: any) => {

          // this.InstallproductCategoryId.push(element1.productId)

          element1.ratingInfo.forEach(element => {

            if (element.rating == 0) {
              this.rating0 = element.count;
            }
            if (element.rating == 1) {
              this.rating1 = element.count;
            }
            if (element.rating == 2) {
              this.rating2 = element.count;
            }
            if (element.rating == 3) {
              this.rating3 = element.count;
            }
            if (element.rating == 4) {
              this.rating4 = element.count;
            }
            if (element.rating == 5) {
              this.rating5 = element.count;
            }



          })
          // this.rating.push([element1.name, this.rating0, this.rating1, this.rating2, this.rating3, this.rating4, this.rating5, ]);
          this.rating.push([element1.name, 12,24,31,25,26,54,]);
          console.log(this.rating)
        });


        this.draw_rating_chart();


      }, (err) => {
        this.tostservice.showNotificationFailure(err);
      })
  }


  
  
  draw_rating_chart() {
    let data = google.visualization.arrayToDataTable(this.rating)
    // let options = {
    //   chartArea: {
    //     left: 120,
    //   },
    //   legend: { position: 'top', maxLines: 7 },
    //   bar: { groupWidth: '75%' },
    //   isStacked: true,
    //   colors: ['#ffd600','#29b6f6', '#6600cc', '#ff0066',  '#41c300',],
    //   animation: {
    //     "startup": true,
    //     duration: 600,
    //     easing: 'in-out'
    //   }
    // };
    
    let options = {
      // height: 350,

      chartArea: {
        left: 100,
        // height: 100,
      },



      hAxis: {
        title: 'Incidents',
      },
      vAxis: {
        title: 'Appliances'
      },


      bar: { groupWidth: '75%' },
      legend: { position: 'top', maxLines: 3 },
      // bars: 'vertical',
            isStacked: true,

      colors: ['#006600', '#00cc00', '#92c409',],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    let chart = new google.visualization.BarChart(document.getElementById('Rating_Chart'));
    chart.draw(data,options);
  }
  
    


















  //  incidents weekly report statrs here

  get_Product_Status() {

    this.statusByProductCat = [];
    this.dashboardservice.get_Product_Status(this.filter)
      .subscribe((res: any) => {
        console.log(res);
        this.statusByProductCat.push(['Appliances', 'Carry Forward', 'New', 'Closed'])
        res.forEach(element => {
          this.statusByProductCat.push([element.name, element.CARRYFORWARD, element.NEW, element.CLOSED])
        });

        this.product_status_Chart();
      }, (err) => {
        this.tostservice.showNotificationFailure(err);
      })
  }

  product_status_Chart() {
    let data = google.visualization.arrayToDataTable(this.statusByProductCat);

    let options = {
      height: 350,

      chartArea: {
        left: 100,
        // height: 100,
      },



      hAxis: {
        title: 'Incidents',
      },
      vAxis: {
        title: 'Appliances'
      },


      bar: { groupWidth: '75%' },
      legend: { position: 'top', maxLines: 3 },
      // bars: 'vertical',
      colors: ['#006600', '#00cc00', '#92c409',],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('product_status_Chart'));
    chart.draw(data, options);
  }






  getStatusByState() {
    this.stateCount = [];
    this.dashboardservice.getStateByStatus(this.filter)
      .subscribe((res: any) => {
        console.log(res)
        this.stateCount.push(['provinces', 'Open Incidents'])

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
        height: 350,

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




  get_MeanTime_Till_Date() {
    this.mttrTillDate = [];

    this.dashboardservice.getMTTR(this.filter)
      .subscribe((res: any) => {
        console.log(res)
        this.mttrTillDate.push(['Appliances', '0-1 Day', '1-3 Days', '3-5 Days', '>5'])
        res.forEach(element => {

          this.mttrTillDate.push([element.name, element["0-1"], element["1-3"], element["3-5"], element[">5"]])
        });
        this.repair_time_Till_Date();

      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );


  }
  repair_time_Till_Date() {

    var data = google.visualization.arrayToDataTable(this.mttrTillDate);

    var options = {

      title: 'Mean Time To Repair Product',
      height: 350,
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
      // isStacked: true,

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





  get_Product_Warranty_Status() {
    this.productWarranty = [];


    this.dashboardservice.getProductWarrantyStatus(this.filter)
      .subscribe((res: any) => {
        this.productWarranty.push(['Appliances', 'In Warranty ', 'Out of warranty'])
        res.forEach(element => {
          this.productWarranty.push([element.name, element['in-Warranty'], element['outSide-Warranty']])
          console.log(this.productWarranty)
          this.product_Warranty_Status_chart();
        });

      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );


  }
  product_Warranty_Status_chart() {

    var data = google.visualization.arrayToDataTable(this.productWarranty);
    console.log(this.productWarranty)
    var options = {

      title: 'Product repair in warranty or without warranty',
      height: 350,
      chartArea: {
        left: 120,
        // height: 150,
        // top: 50,
      },
      vAxis: { title: 'Count' },
      hAxis: {
        title: 'Product Category',
        // slantedText:true,
        // slantedTextAngle:330 
      },
      seriesType: 'bars',

      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },

      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };


    var chart = new google.visualization.BarChart(document.getElementById('product_Warranty_Status'));

    chart.draw(data, options);
  }




  get_Product_Incident_Age() {
    this.incidentAge = [];
    this.dashboardservice.getProductIncidentAge(this.filter)
      .subscribe((res: any) => {
        this.incidentAge.push(['Appliances', '0-1 Day', '1-3 Days', '3-5 Days', '>5'])
        // console.log(res[0].data)

        res.forEach(element => {
          this.incidentAge.push([element.name, element["0-1"], element["1-3"], element["3-5"], element[">5"]])
          this.Product_Incident_Age_chart();
        });
        console.log(this.incidentAge)
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );

  }
  Product_Incident_Age_chart() {

    var data = google.visualization.arrayToDataTable(this.incidentAge);
    console.log(this.incidentAge)
    var options = {
      height: 350,
      title: 'Incident Age',
      vAxis: { title: 'Count' },
      hAxis: {
        title: 'Categories',

      },
      seriesType: 'bars',
      legend: { position: 'top', maxLines: 8 },

    };


    var chart = new google.visualization.BarChart(document.getElementById('Product_Incident_Age'));

    chart.draw(data, options);
  }



  //  all managent charts load on managment loggin
  getAllManagmentCharts() {
    google.charts.load('current', { packages: ['corechart', 'bar'] });

    google.charts.setOnLoadCallback(() => {
      this.getCharts();


    })


  }


  getCharts() {
    // this.getFilter(data,id,range);
    this.get_Product_Incident_Age();
    this.getDashboardDetails();
    this.get_Product_Status();
    this.getStatusByState();
    this.get_Product_Warranty_Status();
    this.get_MeanTime_Till_Date();
    this.getProductCategory();
    this.get_product_rating_chart();
  }



  Test() {
    this.dashboardservice.getDashboardFilterByDate()
      .subscribe((res: any) => {
        console.log(res);
      })
  }


  ngOnInit() {
    this.role = localStorage.getItem("currentUserName");
    this.getFilter();

    this.dashboardservice.loadScript().subscribe(
      (res) => { },
      (err) => { },
      () => {
        if (this.role == 'management') {
          this.getAllManagmentCharts();
        }

      }
    );




  }




}

