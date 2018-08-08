

// draw_open_incidences_chart() {
//     this.open_incidences = this.chartService.open_incidents();
//     console.log(this.open_incidences);
//     let data = google.visualization.arrayToDataTable([
//       ['Appliances', 'New', 'Assigned', 'InProgress', { role: 'annotation' } ],
//       ['Laundry Care', 10, 44, 20, ''],
//       ['Cooking and Baking', 6, 52, 23, ''],
//       ['Dishwasher', 18, 39, 9, ''],
//       ['Cooling', 5, 12, 10, ''],
//       ['Coffee Machines', 8, 4, 12, '']
//     ]);
//     let options = {
//       chartArea: {
//         left: 120,
//       },
//       legend: { position: 'top', maxLines: 3 },
//       bar: { groupWidth: '75%' },
//       isStacked: true,
//       colors: ['#fdcdcd','#ff5252','#a70000'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     let open_incidences_chart = new google.visualization.BarChart(document.getElementById('open_incidences'));
//     open_incidences_chart.draw(data, options);
//   }

//   customer_suffering_report(){

//     let data = google.visualization.arrayToDataTable([
//       ['Appliances', '#Sufferers'],
//       ['Laundry Care', 20],
//       ['Cooking and Baking', 55,],
//       ['Dishwasher', 32],
//       ['Cooling', 45],
//       ['Coffee Machines', 8]
//     ]);

//     let options = {
//       chartArea: {width: '50%'},
//       hAxis: {
//         title: 'Customers Suffering',
//         minValue: 0
//       },
//       vAxis: {
//         title: 'Appliances'
//       },
//       'legend': 'top',
//       colors:['#ff9800'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     let chart = new google.visualization.BarChart(document.getElementById('customer_suffering_report'));
//     chart.draw(data, options);
//     google.visualization.events.addListener(chart, 'select', function() {
//       var selection = chart.getSelection();
//           if (selection.length) {
//           var title = data.getValue(selection[0].row, 0);
//           var value = data.getValue(selection[0].row, selection[0].column);
//         }
//         if(title == 'Cooking and Baking')
//           $('#cookingSufferers').modal();
        
//     });
    
//   }

//   setModalChart(){
//     console.log('hello');
//   }

//   incident_weekly_report() {
//     let data = google.visualization.arrayToDataTable([
//       ['Appliances', 'Carry Forward', 'New', 'Closed'],
//       ['Laundry Care', 10, 40, 25],
//       ['Cooking', 26, 42, 20],
//       ['Dishwasher', 2, 9, 12],
//       ['Cooling', 15, 22, 10],
//       ['Coffee Machines', 3, 4, 2]
//     ]);


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
//       colors:['#cddc3a','#8ac34a','#3a8a3d'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     let chart = new google.visualization.BarChart(document.getElementById('incident_weekly_report'));
//     chart.draw(data, options);
//   }

//   regions_chart(){
//     {
//       let data = google.visualization.arrayToDataTable([
//         ['Province', 'Weekly Open Incidents'],
//         ['Rajasthan', 20],
//         ['Maharashtra', 200],
//         ['Haryana', 30],
//         ['Gujarat', 40],
//         ['Tamil Nadu', 50],
//         ['Nagaland', 10],
//         ['Karnataka', 70],
//         ['Punjab', 10],
//         ['Uttar Pradesh', 15],
//         ['Madhya Pradesh', 5],
//         ['Andhra Pradesh', 27],
//         ['Delhi', 150],
//         ['Kerala', 2],
//         ['Bihar', 3],
//         ['Orissa', 2],
//         ['Manipur', 5],
//         ['West Bengal',20],
//         ['Meghalaya', 4],
//         ['Tripura', 2],
//         ['Himachal Pradesh', 10],
//         ['Telangana', 45],
//         ['Assam', 15],
//         ['Chhattisgarh', 45],
//         ['Jharkhand', 15],
//         ['Jammu and Kashmir', 12]
//       ]);

//       let options = {
//       region: 'IN', 
//           resolution: 'provinces',
//           colorAxis: {colors: ['#01bcd7']},
//           animation: {
//             "startup": true,
//             duration: 600,
//             easing: 'in-out'
//           }
//       };

//       let chart = new google.visualization.GeoChart(document.getElementById('regions_chart'));

//       chart.draw(data, options);
//     }
//   }

//   incidents_hour(){
//     let data = google.visualization.arrayToDataTable([
//        ['Appliances', 'Customer', 'Support Centre', 'Engineer', 'Repair', { role: 'annotation' } ],
//       ['Laundry Care', 0.25, 4, 9, 4, ''],
//       ['Cooking and Baking', 1, 2, 12, 3, ''],
//       ['Dishwasher', 0.5, 3, 7, 5, ''],
//       ['Cooling', 0.25, 1, 8, 4, ''],
//       ['Coffee Machines', 0.3, 1, 5, 1, '']
//     ]);

//     let options = {
//       chartArea: {
//         left: 120,
//       },
//       legend: { position: 'top', maxLines: 3 },
//       bar: { groupWidth: '75%' },
//       isStacked: true,
//       colors:['#c370fd','#9b3aee','#8e2baa','#5a0173'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };
    
//     let chart = new google.visualization.BarChart(document.getElementById('incedents_hour'));
//     chart.draw(data, options);
//   }

//   repair_time(){

//     var data = google.visualization.arrayToDataTable([
//       ['Appliances', 'Mean time to repair'],
//       ['Laundry Care', 2],
//       ['Cooking and Baking', 1,],
//       ['Dishwasher', 0.5],
//       ['Cooling', 2.5],
//       ['Coffee Machines', .25]
//     ]);

//     var options = {
//       chartArea: {width: '50%'},
//       hAxis: {
//         title: 'Mean Time To Repair (in days)',
//         minValue: 0
//       },
//       vAxis: {
//         title: 'Appliances'
//       },
//       'legend':'top',
//       colors:['#e63935'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     var chart = new google.visualization.BarChart(document.getElementById('repair_time'));

//     chart.draw(data, options);
//   }

//   sufferers_piechart(){
        
//     var data = google.visualization.arrayToDataTable([
//       ['Appliance', '#Sufferers'],
//       ['Ovens',     11],
//       ['Steam Cooking',      2],
//       ['Hobs & Cooktops',  2],
//       ['Kitchen Chimneys', 2],
//       ['Microwaves',    7],
//       ['Drawers', 3]
//     ]);

//     var options = {
//       'width':600,
//       'height':400,
//       'legend':'left',
//       is3D: true,
//       colors:['#ea4b59','#f0954f','#ffe902','#bccf01','#64c6ef','#009fe3','#c066a7'],
//       animation: {
//         "startup": true,
//         duration: 600,
//         easing: 'in-out'
//       }
//     };

//     var chart = new google.visualization.PieChart(document.getElementById('sufferers_piechart'));

//     chart.draw(data, options);
//   }
