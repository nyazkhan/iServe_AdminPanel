import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { TostService } from '../providers/tost.service';
import { DateRange } from '../interface/user';
import { element } from 'protractor';

declare var google: any;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  public chart: any;



  role: string;

  statusCount: any;

stateDate:Date;
endDate:Date;

  statusByProductCat = [];
  stateCount = [];
  mttrTillDate = [];
  productWarranty = [[]];

  incidentAge = [];
  filter = {};
  statusCarryForward: number
  statusClosed: number
  statusNew: number;
  productCategoryName: Array<any>

  filterByDate = "year";
  filterId: number;
  filterRange: string;

  rating = [];
  rating0: number;
  rating1: number;
  rating2: number;
  rating3: number;
  rating4: number;
  rating5: number;

dateRange = new DateRange;
  showRatingChart=true;
  categoryName= 'ALL APPLIANCES';


  constructor(private dashboardservice: DashboardService,
    private tostservice: TostService,
  ) {
  }




  dashboardFilterByDate(value) {
    this.dateRange= new DateRange();
    this.filterByDate = value;
    // console.log(this.filterByDate)
    this.filterRange ="";
    this.getFilter();
    this.getCharts();

  }

  forAllProduct(value) {
    this.filterId = null;
    this.categoryName=value;
    // console.log(this.filterId)
    this.getFilter();
    this.getCharts();

  }

  filterByRange(value) {
    this.filterByDate = "";
    this.filterRange = value;
    this.getFilter();
    this.getCharts();

  }

  getFilter() {

    if (this.filterRange) {
      this.filter["duration"] = this.filterRange;
      this.filter["startDate"]=this.dateRange.startDate;
      this.filter["endDate"]=this.dateRange.endDate;

    } else {
    if (this.filterByDate) {
      this.filter={};
      this.filter["duration"] = this.filterByDate;

    }
  }

    if (this.filterId) {
      // console.log(this.filterId)
      this.filter["categoryId"] = this.filterId;
    }





  }

  filterByProduct(Category) {
    // this.getFilter(id)
    this.categoryName = Category.name;
    this.filterId = Category.id;
    this.getFilter();
    this.getCharts();
  }



  getProductCategorys() {
    this.dashboardservice.getProductCategory()
      .subscribe((res) => {
        // console.log(res)
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

    this.dashboardservice.getProductRating(this.filter)
      .subscribe((res: any) => {
        this.rating = [[]];
   
          

          this.rating[0].push('rating');
          for (let i = 0; i < res[0].ratingInfo.length; i++) {
            this.rating[0].push(res[0].ratingInfo[i].name);
          }
          
          for (let i = 0; i < res.length; i++) {
            this.rating[i+1] = [];
            this.rating[i+1].push(res[i].rating);
            for (let j = 0; j < res[i].ratingInfo.length; j++) {
              this.rating[i+1].push(res[i].ratingInfo[j].count);        
            }      
          }       


        this.draw_rating_chart();
      

      }, (err) => {
        this.tostservice.showNotificationFailure(err);
      })
  }


  
  
  draw_rating_chart() {
    let data = google.visualization.arrayToDataTable(this.rating)
  
    
    let options = {
      height: 200,

      chartArea: {
        left: 100,
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
      height: 200,

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

      isStacked: true,

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
    google.visualization.events.addListener(chart, 'onmouseover', ()=>{

      document.getElementById('product_status_Chart').style.cursor="pointer";
    });
         google.visualization.events.addListener(chart, 'select', ()=>{

         });
    chart.draw(data, options);
 
  
  }






  getStatusByState() {
    this.stateCount = [];
    this.dashboardservice.getStateByStatus(this.filter)
      .subscribe((res: any) => {
        // console.log(res)
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
        height: 300,

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
        this.mttrTillDate.push(['Appliances', 'avgCustomer', 'avgEngineer', 'avgRepair'])
          res.forEach(element => {
          console.log(element)
         for (const key in element) {
         console.log( element[key][0]);
         this.mttrTillDate.push([key, parseInt(element[key][0].avgCustomer),parseInt(element[key][0].avgEngineer), parseInt(element[key][0].avgRepair)])
   
         }

        });
        console.log(this.mttrTillDate);
        
        this.repair_time_Till_Date();

      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );


  }
  repair_time_Till_Date() {

    var data = google.visualization.arrayToDataTable(this.mttrTillDate);

    var options = {

      // title: 'Mean Time To Repair Product',
      height: 300,
      chartArea: {
        height: 200,
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
      isStacked: true,
      colors:['#F48FB1','#E91E63','#C2185B','#880E4F',],
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
   
    console.log(this.productWarranty)
    
    this.dashboardservice.getProductWarrantyStatus(this.filter)
    .subscribe((res: Array<any>) => {
      this.productWarranty = [[]];
   
          

          this.productWarranty[0].push('Warranty');
          for (let i = 0; i < res[0].warrantyInfo.length; i++) {
            this.productWarranty[0].push(res[0].warrantyInfo[i].name);
          }
          
          for (let i = 0; i < res.length; i++) {
            this.productWarranty[i+1] = [];
            this.productWarranty[i+1].push(res[i].warranty);
            for (let j = 0; j < res[i].warrantyInfo.length; j++) {
              this.productWarranty[i+1].push(res[i].warrantyInfo[j].count);        
            }      
          }

         
          this.product_Warranty_Status_chart();
        
        


      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );


  }
  product_Warranty_Status_chart() {

    var data = google.visualization.arrayToDataTable(this.productWarranty);
    var options = {

      title: 'Product repair in warranty or without warranty',
      height: 200,
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
      isStacked: true,

      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      colors:['#FFA726','#EF6C00'],

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
     
        this.Product_Incident_Age_chart(res);
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      }
      );

  }
  Product_Incident_Age_chart(data: any[]) {
    
    var dataTable: any = [[]];

    dataTable[0].push('range');
    for (let i = 0; i < data[0].ageInfo.length; i++) {
      dataTable[0].push(data[0].ageInfo[i].name);
    }
    
    for (let i = 0; i < data.length; i++) {
      dataTable[i+1] = [];
      dataTable[i+1].push(data[i].range);
      for (let j = 0; j < data[i].ageInfo.length; j++) {
        dataTable[i+1].push(data[i].ageInfo[j].count);        
      }      
    }
    

    var data1 = google.visualization.arrayToDataTable(dataTable);
    // console.log(this.incidentAge)
    var options = {
      height: 200,
      // title: 'Incident Age',
      vAxis: { title: 'Count' },
      hAxis: {
        title: 'Categories',

      },
      isStacked: true,

      seriesType: 'bars',
      legend: { position: 'top', maxLines: 8 },
      colors:['#FFCDD2','#FF8A80','#E57373','#B71C1C'],

    };


    var chart = new google.visualization.BarChart(document.getElementById('Product_Incident_Age'));

    chart.draw(data1, options);
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
    this.getProductCategorys();
    this.get_product_rating_chart();
  }



  Test() {
    this.dashboardservice.getProductCategory()
      .subscribe((res: any) => {
        // console.log(res);
      })
  }




  onSubmit(){
// console.log(this.dateRange.startDate)
// console.log(this.dateRange.endDate)

  }
today:any
  ngOnInit() {
    this.role = localStorage.getItem("currentUserName");
    this.getFilter();
// console.log(new Date()| date: 'dd MMM, yyyy' );
this.today= new Date()
this.today.setDate(this.today.getDate() + 1);

console.log(this.today);

// | date :'YYYY, MM,DD'

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

