import { Component, OnInit } from '@angular/core';

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
  public customer_suffering:any;
  public open_incidents:any;
  role:string;
  modalChart:string;
  open_incidences: Array<any>
  admin:boolean=false;
  constructor() {}
  
  ceo_customer_sufferers(){
    let data = google.visualization.arrayToDataTable([
      ['Appliances', '#Sufferers'],
      ['Water Purifier', 20],
      ['Vacuum Cleaner', 55,],
      ['Air Purifier', 32],
      ['Security Solutions', 45],
      ['Health Conditionerss', 8]
    ]);

    let options = {
      chartArea: {
        left: 120,
      },
      backgroundColor:'transparent',
      hAxis: {
        title: 'Customers Suffering',
        minValue: 0,
        textStyle: {color:'#fff'},
        titleTextStyle: {color:'#fff'},
        baselineColor:'#fff',
      },
      vAxis: {
        title: 'Appliances',
        textStyle: {color:'#fff'},
        titleTextStyle: {color:'#fff'},
      },
      'legend': 'top',
      legendTextStyle:{color:'#fff'},
      colors:['#fff'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    
    let chart = new google.visualization.BarChart(document.getElementById('ceo_customer_sufferers'));
    chart.draw(data, options);
  }

  draw_open_incidences_chart() {
    let data = google.visualization.arrayToDataTable([
      ['Appliances', 'New', 'Assigned', 'InProgress', { role: 'annotation' } ],
      ['Water Purifier', 10, 44, 20, ''],
      ['Vacuum Cleaner', 6, 52, 23, ''],
      ['Air Purifier', 18, 39, 9, ''],
      ['Security Solutions', 5, 12, 10, ''],
      ['Health Conditionerss', 8, 4, 12, '']
    ])
    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors: ['#fdcdcd','#ff5252','#a70000'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
    open_incidences_chart.draw(data, options);
  }

  customer_suffering_report(){

    let data = google.visualization.arrayToDataTable([
      ['Appliances', '#Sufferers'],
      ['Water Purifier', 20],
      ['Vacuum Cleaner', 55,],
      ['Air Purifier', 32],
      ['Security Solutions', 45],
      ['Health Conditionerss', 8]
    ]);

    let options = {
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Customers Suffering',
        minValue: 0
      },
      vAxis: {
        title: 'Appliances'
      },
      'legend': 'top',
      colors:['#ff9800'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    

    let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
    chart.draw(data, options);
    google.visualization.events.addListener(chart, 'select', function() {
      var selection = chart.getSelection();
          if (selection.length) {
          var title = data.getValue(selection[0].row, 0);
          var value = data.getValue(selection[0].row, selection[0].column);
        }
        if(title == 'Vacuum Cleaner')
          $('#Vacuum CleanerSufferers').modal();
        
    });
    
  }

  setModalChart(){
    console.log('hello');
  }

  incident_weekly_report() {
    let data = google.visualization.arrayToDataTable([
      ['Appliances', 'Carry Forward', 'New', 'Closed'],
      ['Water Purifier', 10, 40, 25],
      ['Vacuum Cleaner', 26, 42, 20],
      ['Air Purifier', 2, 9, 12],
      ['Security Solutions', 15, 22, 10],
      ['Health Conditionerss', 3, 4, 2]
    ]);


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
      colors:['#cddc3a','#8ac34a','#3a8a3d'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
    chart.draw(data, options);
  }

  regions_chart(){
    {
      let data = google.visualization.arrayToDataTable([
        ['Province', 'Weekly Open Incidents'],
        ['Rajasthan', 20],
        ['Maharashtra', 200],
        ['Haryana', 30],
        ['Gujarat', 40],
        ['Tamil Nadu', 50],
        ['Nagaland', 10],
        ['Karnataka', 70],
        ['Punjab', 10],
        ['Uttar Pradesh', 15],
        ['Madhya Pradesh', 5],
        ['Andhra Pradesh', 27],
        ['Delhi', 150],
        ['Kerala', 2],
        ['Bihar', 3],
        ['Orissa', 2],
        ['Manipur', 5],
        ['West Bengal',20],
        ['Meghalaya', 4],
        ['Tripura', 2],
        ['Himachal Pradesh', 10],
        ['Telangana', 45],
        ['Assam', 15],
        ['Chhattisgarh', 45],
        ['Jharkhand', 15],
        ['Jammu and Kashmir', 12]
      ]);

      let options = {
      region: 'IN', 
          resolution: 'provinces',
          colorAxis: {colors: ['#01bcd7']},
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

  incidents_hour(){
    let data = google.visualization.arrayToDataTable([
       ['Appliances', 'Customer', 'Support Centre', 'Engineer', 'Repair', { role: 'annotation' } ],
      ['Water Purifier', 0.25, 4, 9, 4, ''],
      ['Vacuum Cleaner', 1, 2, 12, 3, ''],
      ['Air Purifier', 0.5, 3, 7, 5, ''],
      ['Security Solutions', 0.25, 1, 8, 4, ''],
      ['Health Conditionerss', 0.3, 1, 5, 1, '']
    ]);

    let options = {
      chartArea: {
        left: 120,
      },
      legend: { position: 'top', maxLines: 3 },
      bar: { groupWidth: '75%' },
      isStacked: true,
      colors:['#c370fd','#9b3aee','#8e2baa','#5a0173'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };
    
    let chart = new google.visualization.BarChart(document.getElementById('incedents_hour'));
    chart.draw(data, options);
  }

  repair_time(){

    var data = google.visualization.arrayToDataTable([
      ['Appliances', 'Mean time to repair'],
      ['Water Purifier', 2],
      ['Vacuum Cleaner', 1,],
      ['Air Purifier', 0.5],
      ['Security Solutions', 2.5],
      ['Health Conditionerss', .25]
    ]);

    var options = {
      chartArea: {width: '50%'},
      hAxis: {
        title: 'Mean Time To Repair (in days)',
        minValue: 0
      },
      vAxis: {
        title: 'Appliances'
      },
      'legend':'top',
      colors:['#e63935'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    var chart = new google.visualization.BarChart(document.getElementById('repair_time'));

    chart.draw(data, options);
  }

  sufferers_piechart(){
        
    var data = google.visualization.arrayToDataTable([
      ['Appliance', '#Sufferers'],
      ['Ovens',     11],
      ['Steam Vacuum Cleaner',      2],
      ['Hobs & Cooktops',  2],
      ['Kitchen Chimneys', 2],
      ['Microwaves',    7],
      ['Drawers', 3]
    ]);

    var options = {
      'width':600,
      'height':400,
      'legend':'left',
      is3D: true,
      colors:['#ea4b59','#f0954f','#ffe902','#bccf01','#64c6ef','#009fe3','#c066a7'],
      animation: {
        "startup": true,
        duration: 600,
        easing: 'in-out'
      }
    };

    var chart = new google.visualization.PieChart(document.getElementById('sufferers_piechart'));

    chart.draw(data, options);
  }


  ngOnInit() {
    this.role = localStorage.getItem("currentUserName");
    google.charts.load('current', {packages: ['corechart', 'bar']});

    google.charts.setOnLoadCallback(this.ceo_customer_sufferers);

    google.charts.setOnLoadCallback(this.draw_open_incidences_chart);
    
    google.charts.setOnLoadCallback(this.customer_suffering_report);

    google.charts.setOnLoadCallback(this.incident_weekly_report);
    
    google.charts.setOnLoadCallback(this.regions_chart);
    
    google.charts.setOnLoadCallback(this.incidents_hour);
    
    google.charts.setOnLoadCallback(this.repair_time);

    google.charts.setOnLoadCallback(this.sufferers_piechart);
  }
}

