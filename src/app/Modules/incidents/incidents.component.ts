import { Component, OnInit } from '@angular/core';
import { IncidentsService } from './incidents.service';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';
import { TostService } from 'src/app/providers/tost.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DashboardService } from '../../dashboard/dashboard.service';
declare let $: any;

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  selectedHeadingId;
  loadingHistory: boolean = false;
  assignTitle: string;
  currentIndex: number;
  assignButtonHide: boolean = false;
  rejectButtonHide: boolean = false;
  currentStatusId: number;

  statusId: number;
  ProductCategoryId: number;
  graphType: string;
  stateId: any;
  categoryType: string;
  type: string;
  warranty: string;
  rating: number;
  duration: string;
  filterDashboardIncidents = {};
  startDate: any;
  endDate: any;
  valTrue = true;
  showGraphHeader = false;

  sortActive: string
  filterBy = {};
  filterbysort = {}
  isAsc = true;

  constructor(
    private incidentService: IncidentsService,
    private tostservice: TostService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dashboardService: DashboardService,
  ) {

  }


  currentId: number;
  imgfile: any;
  urlTOShowImg: string;
  // complaints: Array<any>;
  commentsHistory: any;
  showLoader: boolean = false;
  showNoMore = false;
  filtercomplaints = [];
  currentPage = 1;
  comment: string;
  RejectId: number;
  statusHeading: Array<any>
  allHeading = [
    {
      name: 'All',
      color: "#FFD600",
      id: 0,

    },
  ];
  selectedHeadingIndex = 0;
  headerRow = ["Incident_No. ", "Date", "Name", "Description", "Category", "Incident_Category", "Priority", "Status"];
  down: any;
  isDown: boolean = false;

  rejectComplaint = new RejectComplaint;

  assingedEngineer = new AssingedEngineer;

  listServiceEngineer: Array<any>;





  ngOnInit() {
    // this.getComplaints(0);
    this.getComplaintStatus();
    this.subscribeRouteChanges();
  }
  starWidth:number
  setId(row, i,) {
    this.currentIndex = i;
    this.currentId = row.id;
    this.currentStatusId = row.statusId;
     this.starWidth=  row.rating*86/5;
     console.log(this.starWidth);
     
  }


  goto(place: string) {
    this.router.navigate(["/" + place]);
    this.showGraphHeader = false;
  }

  subscribeRouteChanges() {
    this.activatedRoute.queryParams
      .subscribe((e: Params) => {
        if (e.sId || e.duration || e.pcId) {

          this.statusId = Number(e.sId);
          this.ProductCategoryId = Number(e.pcId) || Number(0);
          this.graphType = e.gType || "";
          this.stateId = e.stId || "";
          this.duration = e.duration || "";
          this.type = e.Type || "";
          this.categoryType = e.cType || "";
          this.warranty = e.warranty || "";
          this.rating = parseFloat(e.rating);
          this.startDate = e.start || '';
          this.endDate = e.end || '';

          if (e.sId) {

            this.getComplaints(this.statusId);
          }

          // pcId: 0, gType: 0, duration: 0
          if (e.duration) {

            this.showGraphHeader = true;
            this.getDashboardIncidents();
            // this.router.navigate(['/incidents'], { queryParams: { pcId: 0, gType: '', duration: '',Type:'',cType:'', stId:'', warranty:'',rating: 0 } });

          }
        }
        else {
          this.router.navigate(['/incidents'], { queryParams: { sId: 0, } });
        }

      });
  }

  onHeadingClick(statusId: number) {
    this.router.navigate(['/incidents'], { queryParams: { sId: statusId, } });
    this.sortActive = "";

  }




  getDashboardIncidents() {
    this.filterDashboardIncidents = {};

    if (this.duration === "byRange") {
      this.filterDashboardIncidents['startDate'] = this.startDate;
      this.filterDashboardIncidents['endDate'] = this.endDate;
    }

    this.filterDashboardIncidents["duration"] = this.duration
    this.filterDashboardIncidents["graphType"] = this.graphType

    this.filterDashboardIncidents["categoryType"] = this.categoryType
    if (this.ProductCategoryId) {
    }
    this.filterDashboardIncidents["categoryId"] = this.ProductCategoryId

    if (this.type) {
      this.filterDashboardIncidents["type"] = this.type
    }

    if (this.rating || this.rating == 0) {
      this.filterDashboardIncidents["rating"] = this.rating
    }

    if (this.warranty) {
      this.filterDashboardIncidents["warrantyStatus"] = this.warranty
    }

    if (this.stateId) {
      this.filterDashboardIncidents["state"] = this.stateId
    }






    this.showLoader = true;

    if (this.graphType === "warranty") {

      this.dashboardService.getProductWarrantyStatus(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = false;
          this.filtercomplaints = res;

        }, (err) => {

          this.showLoader = false;
          this.tostservice.showNotificationFailure(err);
        }
        )
    }

    if (this.graphType === "rating") {
      this.dashboardService.getProductRating(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        }
        )
    }
    if (this.graphType === "region") {
      this.dashboardService.getStateByStatus(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        }
        )
    }
    if (this.graphType === "status") {
      this.dashboardService.get_Product_Status(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        }
        )
    }
    if (this.graphType === "incident-age") {
      this.dashboardService.getProductIncidentAge(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        }
        )
    }
    if (this.graphType === "avg") {
      this.dashboardService.getAVG(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        })
    }
    if (this.graphType === "mttr") {
      this.dashboardService.getMTTR(this.filterDashboardIncidents, this.valTrue)
        .subscribe((res: any) => {
          this.showLoader = false;
          this.showNoMore = true;
          this.filtercomplaints = res;
        }, (err) => {
          this.tostservice.showNotificationFailure(err);
          this.showLoader = false;
        })
    }



  }


  getComplaints(sId) {
    this.selectedHeadingId = sId;
    this.currentPage = 1;
    if (this.statusId == 0) {
      this.getAllComplaints();
    } else {
      this.getFilterComplants(this.stateId);
    }

  }
  getComplaintStatus() {
    this.incidentService.getCompStatus()
      .subscribe((res: any) => {
        res.unshift(this.allHeading[0]);
        this.statusHeading = res;
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)

        })
  }
  getAllComplaints() {

    this.showLoader = true;
    this.showNoMore = false;
    this.incidentService.getAllComplaint(this.currentPage)
      .subscribe((res: any) => {
        // this.complaints = res;
        this.filtercomplaints = res;
        this.showLoader = false;

      },
        (err) => {
          this.showLoader = false;
          this.tostservice.showNotificationFailure(err)

        })
  }

  //get filter complaints
  getFilterComplants(sId: number, ) {
    this.filtercomplaints = [];
    this.showLoader = true;
    this.showNoMore = false;
    this.currentPage = 1;
    // if ( this.statusId) {
    if (this.statusId) {
      this.filterBy['statusId'] = this.statusId || sId;
    }
    // if (this.ProductCategoryId) {
    //   this.filterBy["categoryId"] = this.ProductCategoryId;
    // }
    // if (this.stateId != "0" && this.stateId != "") {
    //   this.filterBy['location'] = this.stateId;
    // }
    // if (this.incidentCategoryId) {
    //   this.filterBy['complaintCategoryId'] = this.incidentCategoryId;
    // }
    // } else {
    //   this.getAllComplaints();
    // }



    this.incidentService.getFillterComplaint(this.filterBy, this.currentPage)
      .subscribe((res: any) => {
        console.log(res);
        this.filtercomplaints = res;
        this.showLoader = false;

      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
          this.showLoader = false;

        })
  }


  x = false;
  onScroll() {
    console.log('scrolled!! ' + this.x);

    if (!this.x) {
      this.x = true;
      this.lodeMore();
    } else {
      return;
    }
  }


  lodeMore() {
    this.showLoader = true;

    this.showNoMore = false;


    if (this.duration) {

      this.getDashboardIncidents()




    } else {
      if (this.selectedHeadingId === 0) {
        this.incidentService.getAllComplaint(this.currentPage + 1)
          .subscribe((res: Array<any>) => {
            this.x = false;
            if (res.length) {

              this.filtercomplaints = this.filtercomplaints.concat(res);
              this.currentPage++;
            } else {
              this.showNoMore = true;
            }

            this.showLoader = false;
          },
            (err) => {
              this.x = true;
              this.showLoader = false;
              this.showNoMore = false;

              this.tostservice.showNotificationFailure(err)
            })
      }
      else {
        this.incidentService.getFillterComplaint({ "statusId": this.statusId }, this.currentPage + 1)
          .subscribe((res: Array<any>) => {
            this.x = false;
            this.showLoader = false;

            if (res.length) {

              this.filtercomplaints = this.filtercomplaints.concat(res);
              this.currentPage++;
            } else {

              this.showNoMore = true;
            }

          },
            (err) => {
              this.x = true;
              this.showNoMore = false;

              this.showLoader = false;
              this.tostservice.showNotificationFailure(err)

            })

      }
    }
  }


  isAscn(val) {
    this.isAsc = val;
    if(this.sortActive){

      this.sortBy(this.sortActive);
    }
  }

  sortBy(val) {

    this.currentRouteParams();

    this.sortActive = val;
    this.showLoader = true;
    if (this.statusId == 0 && this.ProductCategoryId == 0 && this.stateId == 0 || "") {
      this.filtercomplaints = [];
      this.incidentService.getSorting(val, this.isAsc)
        .subscribe((res: any) => {
          this.filtercomplaints = res;
          this.showLoader = false;
        }, (err) => {
          this.tostservice.showNotificationFailure(err)
          this.showLoader = false;

        })

    } else {
      this.filtercomplaints = [];

      this.showLoader = true;
      this.incidentService.getFilterSorting(val, this.filterbysort, this.isAsc)
        .subscribe((res) => {
          this.filtercomplaints = res;
          this.showLoader = false;
        }, (err) => {
          this.tostservice.showNotificationFailure(err)
          this.showLoader = false;

        })
    }
  }


  currentRouteParams() {
    let query = this.activatedRoute.snapshot.queryParams
    for (let key in query) {
      if (key == "sId" && query[key] != "0") {
        this.filterbysort['statusId'] = query[key];
      }
      // if (key == "pcId" && query[key] != "0") {
      //   this.filterbysort['categoryId'] = query[key];
      // }
      // if (key == "stId" && query[key] != "0" || "") {
      //   this.filterbysort['location'] = query[key];
      // }
      // if (key == "icId" && query[key] != "0") {
      //   this.filterbysort['complaintCategoryId'] = query[key];
      // }

      console.log(query[key])
      console.log(this.filterbysort)
    }


  }


  clearSortBy(i) {
    console.log(i)

    this.getFilterComplants(i)

    this.sortActive = "";
  }








  getAssingedId(id, AssignEngName?) {
    if (AssignEngName) {
      this.assignTitle = "Change";
    } else {
      this.assignTitle = "Assign";
    }

    this.resetform();
    this.incidentService.getServiceEngAgainstComplaindId(id)
      .subscribe((res: any) => {
        console.log(res);
        this.listServiceEngineer = res.filter(element => element.name != AssignEngName);

      }, (err) => {
        this.tostservice.showNotificationFailure(err)

      })
  }





  getCommentsId(id) {
    this.loadingHistory = false;
    this.incidentService.getComplaintsHistory(id)
      .subscribe((res: number) => {
        this.commentsHistory = res;
        this.loadingHistory = true;
        console.log(res)
      }, (err) => {
        this.loadingHistory = true
        this.tostservice.showNotificationFailure(err)

      })
  }



  getRejectId(id) {
    this.resetform();
    this.RejectId = id;
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      this.imgfile = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.urlTOShowImg = event.target.result;
      }
    }
  }





  onSubmit() {
    this.rejectButtonHide = true;
    // console.log(this.assingedEngineer)
    // console.log(this.comment + "nothing to")
    const fd = new FormData();
    fd.append("comment", this.rejectComplaint.comment);
    fd.append("pic", this.imgfile);
    fd.append("updateInfo ", "reject");
    this.incidentService.rejectComplaint(fd, this.currentId)
      .subscribe((res: number) => {
        console.log(res)
        this.rejectButtonHide = false;
        this.filtercomplaints.splice(this.currentIndex, 1)
        this.closeRejectModal();
        this.showNotification("Incident Reject successfuly")
        this.resetform();
      }, (err) => {
        this.rejectButtonHide = true;
        this.tostservice.showNotificationFailure(err)
      })
  }


  resetform() {
    this.comment = "";
    this.imgfile = null;
    this.urlTOShowImg = "";
    this.rejectComplaint = new RejectComplaint();

    this.assingedEngineer = new AssingedEngineer();
  }


  //assign engineer 

  assignFormData() {
    this.assignButtonHide = true;
    const fd = new FormData();

    for (const key in this.assingedEngineer)
      fd.append(key, this.assingedEngineer[key]);
    this.incidentService.assignEngineer(fd, this.currentId)

      .subscribe((res: any) => {
        this.assignButtonHide = false;
        if (this.filtercomplaints[this.currentIndex].statusName != 'New') {
          this.filtercomplaints[this.currentIndex] = res;
          console.log("if condition")

        } else {
          this.getFilterComplants(this.currentStatusId)

        }
        this.closeAssignModal();
        this.showNotification();
        this.resetform();
      }, (err) => {
        this.assignButtonHide = false;
        this.tostservice.showNotificationFailure(err)

      })
  }


  closeAssignModal() {
    $('#assignModal').modal('hide')
  }


  closeRejectModal() {
    $('#rejectModal').modal('hide')
  }

  showNotification(msg?) {

    $.notify({

      icon: "add_alert",
      message: msg || "Incident Assign successfuly"



    }, {
        type: 'success',
        timer: 1000,
        placement: {
          from: "top",
          align: "right"
        }
      });
  }



}
