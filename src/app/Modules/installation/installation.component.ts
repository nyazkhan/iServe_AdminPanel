import { Component, OnInit } from '@angular/core';
import { RejectInstallation, AssingedEngineer } from '../../interface/user';
import { InstallationService } from './installation.service';
declare const $: any;

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {

 
 
    constructor(private installationservice: InstallationService) {

  }
 



 currentId: number;
  imgfile: any;
  urlTOShowImg: string;
  Installations: Array<any>;
  installationsHistory: any;
  showLoader: boolean = false;
  filterInstallation = [];
  currentPage = 1;
  comment: string;
  RejectId: number;
  statusHeading = ["All"];
  headerRow = ["Incident_No. ", "Date", "Product Name","Description", "Product Category", "Incident_Category", "Priority", "Status"];

  // statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed" ,"Rejected"];
  selectedHeadingIndex = 0;
  
  down: any;
  isDown: boolean = false;

  rejectInstallation = new RejectInstallation;

  assingedEngineer = new AssingedEngineer;

  listServiceEngineer: Array<any>;


  ngOnInit() {
    this.getInstallations(0);
    this.getchart();
    this.getInstallationStatus();
  }
  getId(id) {

    this.currentId = id;
  }
  getchart() {
    // this.installationservice.getChartData()
    // .subscribe((res:any)=>{
    //   console.log(res);
    // })

  }



  getInstallations(i?: number) {
    this.selectedHeadingIndex = i;
    this.currentPage = 1;
    if (i === 0) {
      this.getAllInstallations();
    } else {
      this.getFilterInstallations(i);
    }

  } 


  getInstallationStatus() {
    console.log("hello")
    this.installationservice.getInstallationStatus()
      .subscribe((res: any) => {
        res.forEach(element => {
          this.statusHeading.push(element.name)

        });
        console.log(this.statusHeading)
        console.log(res)
      })
  }



  getAllInstallations() {

    this.showLoader = true;
    this.installationservice.getAllInstallation(this.currentPage)
      .subscribe((res: any) => {
        this.Installations = res;
        this.filterInstallation = res;
        console.log(res);
        this.showLoader = false;

      },
        (err) => {
          this.showLoader = false;
          // throw err;
          alert(JSON.stringify(err));
        })
  }



  //get filter Installations
  getFilterInstallations(i) {
    this.filterInstallation=[];
    this.showLoader = true;
    this.currentPage = 1;
    this.installationservice.getFillterInstallation(i, this.currentPage)
      .subscribe((res: any) => {
        this.filterInstallation = res;
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
  //   this.installationservice.getFillterComplaint(i, i)
  //     .subscribe((res: any) => {
  //       console.log("filter")

  //       console.log(res)
  //     })
  //   this.selectedHeadingIndex = i;
  //   this.filterInstallation = [];

  //   if (i == 0) {
  //     this.filterInstallation = this.Installations;
  //   } else {
  //     this.filterInstallation = this.Installations.filter(element => element.statusName == this.statusHeading[i]);

  //   }
  // }






  lodeMore() {

    if (this.selectedHeadingIndex === 0) {
      this.showLoader = true;
      this.installationservice.getAllInstallation(this.currentPage + 1)
        .subscribe((res: Array<any>) => {
          console.log(this.currentPage);

          if (res.length) {
            // console.log('sssssssss');

            this.filterInstallation = this.filterInstallation.concat(res);
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
      this.installationservice.getFillterInstallation(this.selectedHeadingIndex, this.currentPage + 1)
        .subscribe((res: Array<any>) => {
          console.log(this.currentPage);

          if (res.length) {
            // console.log('sssssssss');

            this.filterInstallation = this.filterInstallation.concat(res);
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
      this.filterInstallation=[];
      this.installationservice.getSorting(val)
      .subscribe((res:any)=>{
this.filterInstallation=res;
this.showLoader = false;
      })

    } else {
      this.filterInstallation=[];

      this.showLoader = true;
      this.installationservice.getFilterSorting(val, this.selectedHeadingIndex)
        .subscribe((res) => {
          this.filterInstallation = res;
          this.showLoader = false;
        })
    }
  }


  getAssingedId(id) {

    this.installationservice.getServiceEngAgainstInstallationId(id)
      .subscribe((res: any) => {
        this.listServiceEngineer = res;

        console.log(res)
      }, (err) => {
        // throw err;
        alert(JSON.stringify(err));

      })
  }





  getInstallationsId(id) {

    this.installationservice.getInstallationsHistory(id)
      .subscribe((res: number) => {
        this.installationsHistory = res;
        console.log(res)
      }, (err) => {
        // throw err;
        alert(JSON.stringify(err));

      })
  }

  // sortComments(res) {
  //   this.installationsHistory = res.sort((a, b) => parseFloat(a.statusId) - parseFloat(b.statusId));
  //   console.log(this.installationsHistory.length)
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
    fd.append("comment", this.rejectInstallation.comment);
    fd.append("pic", this.imgfile);
    fd.append("updateInfo ", "reject");
    this.installationservice.rejectInstallation(fd, this.currentId)
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
    this.rejectInstallation = new RejectInstallation();

    this.assingedEngineer = new AssingedEngineer();
  }


  //assign engineer 

  assignFormData(data) {
    console.log(data);

    const fd = new FormData();

    for (const key in this.assingedEngineer)
      fd.append(key, this.assingedEngineer[key]);
    this.installationservice.assignEngineer(fd, this.currentId)

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
