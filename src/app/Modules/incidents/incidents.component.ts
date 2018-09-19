import { Component, OnInit } from '@angular/core';
import { IncidentsService } from './incidents.service';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';
import { TostService } from 'src/app/providers/tost.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
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

  statusId:number;
  ProductCategoryId:number;
  incidentCategoryId:number;
  stateId:any;

  sortActive: string
  filterBy = {};
  filterbysort = {}
isAsc=true;

  constructor(
    private incidentService: IncidentsService,
    private tostservice: TostService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

  }


  currentId: number;
  imgfile: any;
  urlTOShowImg: string;
  // complaints: Array<any>;
  commentsHistory: any;
  showLoader: boolean = false;
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
  selectedHeadingIndex=0;
  headerRow = ["Incident_No. ", "Date", "Product Name", "Description", "Product Category", "Incident_Category", "Priority", "Status"];
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
  setId(id, i, statusId) {
    this.currentIndex = i;
    this.currentId = id;
    this.currentStatusId = statusId;
  }

  subscribeRouteChanges() {
    this.activatedRoute.queryParams
      .subscribe((e: Params) => {
        if (e.sId) {

          this.statusId = Number(e.sId) || Number(0);
          this.ProductCategoryId = Number(e.pcId) || Number(0);
          this.incidentCategoryId = Number(e.icId) || Number(0);
          this.stateId = e.stId || 0;

          this.getComplaints(this.statusId);
        } else {
          this.router.navigate(['/incidents'], { queryParams: { sId: 0, pcId: 0, icId: 0, stId: 0 } });
        }

      });
  }

  onHeadingClick(statusId: number) {
    this.router.navigate(['/incidents'], { queryParams: { sId: statusId, pcId: 0, icId: 0, stId: 0 } });
    this.sortActive = "";

  }

  getComplaints(sId,) {
    this.selectedHeadingId = sId;
    this.currentPage = 1;
    if (this.statusId== 0 && this.ProductCategoryId == 0 && this.incidentCategoryId == 0 && this.stateId == 0||"") {
      this.getAllComplaints();
    } else {
      this.getFilterComplants(sId);
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
    this.currentPage = 1;
    if (this.ProductCategoryId != 0 || this.statusId != 0 || this.stateId != 0 || this.incidentCategoryId != 0) {
      if (this.statusId||sId) {
        this.filterBy['statusId'] = this.statusId||sId;
      }
      if (this.ProductCategoryId) {
        this.filterBy["categoryId"] = this.ProductCategoryId;
      }
      if (this.stateId != "0" && this.stateId != "") {
        this.filterBy['location'] = this.stateId;
      }
      if (this.incidentCategoryId) {
        this.filterBy['complaintCategoryId'] = this.incidentCategoryId;
      }
    } else {
      this.getAllComplaints();
    }



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


  x=1;
  onScroll() {
    console.log('scrolled!! ' + this.x);
  
    if(this.x===1){
      setTimeout(()=>{

        this.lodeMore();
      },1000)
      this.x++;
    }else{
      //  setTimeout(() => {
        this.x=1
    console.log("hey there");
    
  //  }, 200);
  }
  }









  lodeMore() {

    if (this.selectedHeadingId === 0) {
      this.showLoader = true;
      this.incidentService.getAllComplaint(this.currentPage + 1)
        .subscribe((res: Array<any>) => {

          if (res.length) {

            this.filtercomplaints = this.filtercomplaints.concat(res);
            this.currentPage++;
          }

          this.showLoader = false;
        },
          (err) => {
            this.showLoader = false;
            this.tostservice.showNotificationFailure(err)
          })
    }
    else {
      this.showLoader = true;
      this.incidentService.getFillterComplaint({"statusId":this.statusId}, this.currentPage + 1)
        .subscribe((res: Array<any>) => {

          if (res.length) {

            this.filtercomplaints = this.filtercomplaints.concat(res);
            this.currentPage++;
          }

          this.showLoader = false;
        },
          (err) => {
            this.showLoader = false;
            this.tostservice.showNotificationFailure(err)

          })

    }
  }


  isAscn(val){
    this.isAsc=val;
  }

  sortBy(val) {
    this.currentRouteParams();

    this.sortActive = val;
    this.showLoader = true;
    if (this.statusId== 0 && this.ProductCategoryId == 0 && this.incidentCategoryId == 0 && this.stateId == 0||"") {
      this.filtercomplaints = [];
      this.incidentService.getSorting(val, this.isAsc)
        .subscribe((res: any) => {
          this.filtercomplaints = res;
          this.showLoader = false;
        }, (err) => {
          this.tostservice.showNotificationFailure(err)
          this.showLoader = true;

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
          this.showLoader = true;

        })
    }
  }


  currentRouteParams() {
    let query = this.activatedRoute.snapshot.queryParams
    for (let key in query) {
      if (key == "sId" && query[key] != "0") {
        this.filterbysort['statusId'] = query[key];
      }
      if (key == "pcId" && query[key] != "0") {
        this.filterbysort['categoryId'] = query[key];
      }
      if (key == "stId" && query[key] != "0" || "") {
        this.filterbysort['location'] = query[key];
      }
      if (key == "icId" && query[key] != "0") {
        this.filterbysort['complaintCategoryId'] = query[key];
      }

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
