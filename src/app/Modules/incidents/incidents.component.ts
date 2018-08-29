import { Component, OnInit } from '@angular/core';
import { IncidentsService } from './incidents.service';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';
import { TostService } from 'src/app/providers/tost.service';
import { Router, ActivatedRoute,  Params } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {
  loadingHistory: boolean = false;
  assignTitle: string;
  currentIndex: number;
  assignButtonHide: boolean = false;
  rejectButtonHide: boolean = false;
  currentStatusId: number;


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
  selectedHeadingId = 0;
  headerRow = ["Incident No. ", "Date", "Product Name"," Product Description", "Product Category", "Incident Category", "Priority", "Status"];
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

          const statusId = Number(e.sId);
          this.getComplaints(statusId);
        } else {
          this.router.navigate(['/incidents'], { queryParams: { sId: 0 } });
        }

      });
  }

  onHeadingClick(statusId:number){
    this.router.navigate(['/incidents'], { queryParams: { sId: statusId } });

  }

  getComplaints(id: number) {
    this.selectedHeadingId = id;
    this.currentPage = 1;
    if (id === 0) {
      this.getAllComplaints();
    } else {
      this.getFilterComplants(id);
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
  getFilterComplants(i) {
    this.filtercomplaints = [];
    this.showLoader = true;
    this.currentPage = 1;
    this.incidentService.getFillterComplaint(i, this.currentPage)
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



  onScroll() {
    console.log('scrolled!!');
    // this.lodeMore();
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
      this.incidentService.getFillterComplaint(this.selectedHeadingId, this.currentPage + 1)
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


  sortBy(val) {
    this.showLoader = true;
    if (this.selectedHeadingId === 0) {
      this.filtercomplaints = [];
      this.incidentService.getSorting(val)
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
      this.incidentService.getFilterSorting(val, this.selectedHeadingId)
        .subscribe((res) => {
          this.filtercomplaints = res;
          this.showLoader = false;
        }, (err) => {
          this.tostservice.showNotificationFailure(err)
          this.showLoader = true;

        })
    }
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

  // sortComments(res) {
  //   this.commentsHistory = res.sort((a, b) => parseFloat(a.statusId) - parseFloat(b.statusId));
  //   console.log(this.commentsHistory.length)
  // }

  getRejectId(id) {
    this.resetform();
    this.RejectId = id;
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
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

  assignFormData(data) {
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