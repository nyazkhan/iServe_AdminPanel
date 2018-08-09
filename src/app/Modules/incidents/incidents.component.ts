import { Component, OnInit } from '@angular/core';
import { IncidentsService } from './incidents.service';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';

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
  statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed" ,"Rejected"];
  selectedHeadingIndex = 0;
  headerRow = [" S.No.", "Date", "Product Name", "Product Category", "Problem Category", "Priority", "Status"];
  down: any;
  isDown: boolean = false;

  rejectComplaint = new RejectComplaint;

  assingedEngineer = new AssingedEngineer;
  
  listServiceEngineer: Array<any>;


  ngOnInit() {
    this.getComplaints();


  }
  getId(id){

    this.currentId=id;
  }

  getComplaints() {

    this.showLoader = true;
    this.incidentService.getComplaint(this.currentPage)
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




  onScroll() {
    console.log('scrolled!!');
    // this.lodeMore();
  }


  filtterIncidents(i) {
    this.selectedHeadingIndex = i;
    this.filtercomplaints = [];

    if (i == 0) {
      this.filtercomplaints = this.complaints;
    } else {
      this.filtercomplaints = this.complaints.filter(element => element.statusName == this.statusHeading[i]);

    }
  }






  lodeMore() {
    this.showLoader = true;

    this.incidentService.getComplaint(this.currentPage + 1)
      .subscribe((res: Array<any>) => {
        console.log(this.currentPage);

        if (res.length) {
          console.log('sssssssss');

          this.complaints = this.complaints.concat(res);
          this.currentPage++;
          this.filtterIncidents(this.selectedHeadingIndex);
        }

        this.showLoader = false;
      },
        (err) => {
          this.showLoader = false;
          alert(JSON.stringify(err));
          // throw err;
        })
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
  
  assignFormData(data){
console.log(data);

const fd = new FormData();

  for (const key in this.assingedEngineer)
  fd.append(key, this.assingedEngineer[key]);
this.incidentService.assignEngineer(fd, this.currentId)

.subscribe((res: number) => {

  this.resetform();
}, (err) => {
  alert(JSON.stringify(err));
  // throw err;
})
  }



 
}