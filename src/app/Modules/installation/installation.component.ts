import { Component, OnInit } from '@angular/core';
import { RejectComplaint, AssingedEngineer } from '../../interface/user';
import { InstallationService } from './installation.service';

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

 
 
    constructor(private installationService: InstallationService) {

  }
  complaints: Array<any>;
  commentsHistory: any;
  showLoader: boolean = false;
  filtercomplaints = [];
  currentPage = 1;
  comment: string;
  RejectId: number;
  assingId: number;
  statusHeading = ["ALL", "New", "Assigned", "Scheduled", "Installed", "OnHold"];
  selectedHeadingIndex = 0;
  headerRow = [" S.No.", "Date", "Product Name", "Priority", "Status", "More_Details"];
  listServiceEngineer: Array<any>;


  assingedEngineer = new AssingedEngineer;





  ngOnInit() {
    this.getInstallationRequests();

  }

  getInstallationRequests() {

    this.showLoader = true;
    this.installationService.getInstallation(this.currentPage)
      .subscribe((res: any) => {
        this.complaints = res;
        this.filtercomplaints = res;
        console.log(res)
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

    this.installationService.getInstallation(this.currentPage + 1)
      .subscribe((res: Array<any>) => {
        console.log(this.currentPage);

        if (res.length) {
          // console.log('sssssssss');

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
    this.assingId = id;
    this.installationService.getServiceEngAgainstinstallationId(id)
      .subscribe((res: any) => {
        this.listServiceEngineer = res;
        // this.assingId=id;
        // this.commentsHistory = res;
        console.log(res)
      }, (err) => {
        alert(JSON.stringify(err));
      })
  }





  getCommentsId(id) {

    this.installationService.getInstallationHistory(id)
      .subscribe((res: number) => {
        this.commentsHistory = res;
        console.log(res)
      }, (err) => {
        alert(JSON.stringify(err));
      })
  }


  // getRejectId(id) {
  //   this.resetform();
  //   this.RejectId = id;
  // }





  onSubmit() {
    // console.log(this.comment + "nothing to")
    const fd = new FormData();
    fd.append("comment", this.assingedEngineer.comment);
    fd.append("serviceEngineerId", this.assingedEngineer.serviceEngineerId.toString());
    fd.append("updateInfo ", this.assingedEngineer.updateInfo);
    this.installationService.assingEngineer(fd, this.assingId)
      .subscribe((res: number) => {

        this.resetform();
      }, (err) => {
        alert(JSON.stringify(err));
        // throw err;
      })
  }


  resetform() {

    this.assingedEngineer = new AssingedEngineer();
  }

}
