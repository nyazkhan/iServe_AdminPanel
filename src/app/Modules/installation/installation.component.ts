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
  
    modalTitle: string;
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
    statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed"];
    selectedHeadingIndex = 0;
    headerRow = [" S.No.", "Date", "Product Name", "Product Category", "Problem Category", "Priority", "Status"];
    down: any;
    isDown: boolean = false;
  
    rejectComplaint = new RejectComplaint;
  
    assingedEngineer = new AssingedEngineer;
    listServiceEngineer: Array<any>;
  
  
    ngOnInit() {
      this.getinstallations();
  
  
    }
    getId(id){
      this.currentId=id;
    }
  
    getinstallations() {
  
      this.showLoader = true;
      this.installationService.getInstallation(this.currentPage)
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
  
      this.installationService.getInstallation(this.currentPage + 1)
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
  
      this.installationService.getServiceEngAgainstInstallationId(id)
        .subscribe((res: any) => {
          this.listServiceEngineer = res;
         
          console.log(res)
        }, (err) => {
          throw err;
        })
    }
  
  
  
  
  
    getCommentsId(id) {
  
      this.installationService.getInstallationHistory(id)
        .subscribe((res: number) => {
          this.commentsHistory = res;
          console.log(res)
        }, (err) => {
          // throw err;
        })
    }
  
    // sortComments(res) {
    //   this.commentsHistory = res.sort((a, b) => parseFloat(a.statusId) - parseFloat(b.statusId));
    //   console.log(this.commentsHistory.length)
    // }
  
    // getRejectId(id) {
    //   this.resetform();
    //   this.RejectId = id;
    // }
  
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
      console.log(this.assingedEngineer)
      // console.log(this.comment + "nothing to")
      // const fd = new FormData();
      // fd.append("comment", this.comment);
      // fd.append("pic", this.imgfile);
      // fd.append("updateInfo ", "reject");
      // this.installationService.rejectComplaint(fd, this.RejectId)
      //   .subscribe((res: number) => {
  
      //     this.resetform();
      //   }, (err) => {
      //     alert(JSON.stringify(err));
      //     // throw err;
      //   })
    }
  
  
    resetform() {
      this.comment = "";
      this.imgfile = null;
      this.urlTOShowImg = "";
  
    }
  
  
  
    dropDown(i) {
      this.isDown = !this.isDown;
      this.down = i;
    }
  
  
  
  
    assign() {
      // $('#actionModal').modal();
      // this.modalTitle = 'Assign';
    }
  
}
