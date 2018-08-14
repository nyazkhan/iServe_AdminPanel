import { Component, OnInit } from '@angular/core';
import { IncidentsService } from './incidents.service';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';
import { element } from '../../../../node_modules/protractor';
declare const $: any;

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})
export class IncidentsComponent implements OnInit {


  constructor(private incidentService: IncidentsService) {

  }


  currentId: number;
  imgfile: any;
  urlTOShowImg: string;
  complaints: Array<any>;
  commentsHistory: any;
  showLoader: boolean = false;
  filtercomplaints = [];
  currentPage = 1;
  comment: string;
  RejectId: number;
  statusHeading = ["All"];
  // statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed" ,"Rejected"];
  selectedHeadingIndex = 0;
  headerRow = ["Incident_No. ", "Date", "Product Name","Description", "Product Category", "Incident_Category", "Priority", "Status"];
  down: any;
  isDown: boolean = false;

  rejectComplaint = new RejectComplaint;

  assingedEngineer = new AssingedEngineer;

  listServiceEngineer: Array<any>;


  ngOnInit() {
    this.getComplaints(0);
    this.getchart();
    this.getComplaintStatus();
  }
  getId(id) {

    this.currentId = id;
  }
  getchart() {
    // this.incidentService.getChartData()
    // .subscribe((res:any)=>{
    //   console.log(res);
    // })

  }



  getComplaints(i?: number) {
    this.selectedHeadingIndex = i;
    this.currentPage = 1;
    if (i === 0) {
      this.getAllComplaints();
    } else {
      this.getFilterComplants(i);
    }

  }


  getComplaintStatus() {
    console.log("hello")
    this.incidentService.getCompStatus()
      .subscribe((res: any) => {
        res.forEach(element => {
          this.statusHeading.push(element.name)

        });
        console.log(this.statusHeading)
        console.log(res)
      })
  }



  getAllComplaints() {

    this.showLoader = true;
    this.incidentService.getAllComplaint(this.currentPage)
      .subscribe((res: any) => {
        this.complaints = res;
        this.filtercomplaints = res;
        console.log(res);
        this.showLoader = false;

      },
        (err) => {
          this.showLoader = false;
          // throw err;
          alert(JSON.stringify(err));
        })
  }



  //get filter complaints
  getFilterComplants(i) {
    this.filtercomplaints=[];
    this.showLoader = true;
    this.currentPage = 1;
    this.incidentService.getFillterComplaint(i, this.currentPage)
      .subscribe((res: any) => {
        this.filtercomplaints = res;
        this.showLoader = false;
        console.log(res)
      })
  }



  onScroll() {
    console.log('scrolled!!');
    // this.lodeMore();
  }


  // filtterIncidents(i) {
  //   console.log(i + "   id ")
  //   this.incidentService.getFillterComplaint(i, i)
  //     .subscribe((res: any) => {
  //       console.log("filter")

  //       console.log(res)
  //     })
  //   this.selectedHeadingIndex = i;
  //   this.filtercomplaints = [];

  //   if (i == 0) {
  //     this.filtercomplaints = this.complaints;
  //   } else {
  //     this.filtercomplaints = this.complaints.filter(element => element.statusName == this.statusHeading[i]);

  //   }
  // }






  lodeMore() {

    if (this.selectedHeadingIndex === 0) {
      this.showLoader = true;
      this.incidentService.getAllComplaint(this.currentPage + 1)
        .subscribe((res: Array<any>) => {
          console.log(this.currentPage);

          if (res.length) {
            // console.log('sssssssss');

            this.filtercomplaints = this.filtercomplaints.concat(res);
            this.currentPage++;
            // this.filtterIncidents(this.selectedHeadingIndex);
          }

          this.showLoader = false;
        },
          (err) => {
            this.showLoader = false;
            alert(JSON.stringify(err));
            // throw err;
          })
    }
    else {
      this.showLoader = true;
      this.incidentService.getFillterComplaint(this.selectedHeadingIndex, this.currentPage + 1)
        .subscribe((res: Array<any>) => {
          console.log(this.currentPage);

          if (res.length) {
            // console.log('sssssssss');

            this.filtercomplaints = this.filtercomplaints.concat(res);
            this.currentPage++;
            // this.filtterIncidents(this.selectedHeadingIndex);
          }

          this.showLoader = false;
        },
          (err) => {
            this.showLoader = false;
            alert(JSON.stringify(err));
            // throw err;
          })

    }
  }


  sortBy(val) {
    this.showLoader = true;
    if (this.selectedHeadingIndex === 0) {
      this.filtercomplaints=[];
      this.incidentService.getSorting(val)
      .subscribe((res:any)=>{
this.filtercomplaints=res;
this.showLoader = false;
      })

    } else {
      this.filtercomplaints=[];

      this.showLoader = true;
      this.incidentService.getFilterSorting(val, this.selectedHeadingIndex)
        .subscribe((res) => {
          this.filtercomplaints = res;
          this.showLoader = false;
        })
    }
  }


  getAssingedId(id) {

    this.incidentService.getServiceEngAgainstComplaindId(id)
      .subscribe((res: any) => {
        this.listServiceEngineer = res;

        console.log(res)
      }, (err) => {
        // throw err;
        alert(JSON.stringify(err));

      })
  }





  getCommentsId(id) {

    this.incidentService.getComplaintsHistory(id)
      .subscribe((res: number) => {
        this.commentsHistory = res;
        console.log(res)
      }, (err) => {
        // throw err;
        alert(JSON.stringify(err));

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
    // console.log(this.assingedEngineer)
    // console.log(this.comment + "nothing to")
    const fd = new FormData();
    fd.append("comment", this.rejectComplaint.comment);
    fd.append("pic", this.imgfile);
    fd.append("updateInfo ", "reject");
    this.incidentService.rejectComplaint(fd, this.currentId)
      .subscribe((res: number) => {

        this.resetform();
      }, (err) => {
        alert(JSON.stringify(err));
        // throw err;
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
    console.log(data);

    const fd = new FormData();

    for (const key in this.assingedEngineer)
      fd.append(key, this.assingedEngineer[key]);
    this.incidentService.assignEngineer(fd, this.currentId)

      .subscribe((res: number) => {
        this.closeAssignModal();
        this.resetform();
      }, (err) => {
        alert(JSON.stringify(err));
        // throw err;
      })
  }


  closeAssignModal() {
    $('#assignModal').modal('hide')
  }



}