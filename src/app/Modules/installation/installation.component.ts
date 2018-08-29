import { Component, OnInit } from '@angular/core';
import { RejectInstallation, AssingedEngineer } from '../../interface/user';
import { InstallationService } from './installation.service';
import { TostService } from 'src/app/providers/tost.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-installation',
  templateUrl: './installation.component.html',
  styleUrls: ['./installation.component.scss']
})
export class InstallationComponent implements OnInit {
  currentIndex: number;
  currentStatusId: number;
  assignButtonHide: boolean=false;
  assignTitle: string;

 
 
    constructor(private installationservice: InstallationService ,
       private tostservice :TostService,
       private router: Router,
       private activatedRoute: ActivatedRoute) {

  }
 


  loadingHistory:boolean=false;
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
  allHeading = [
    {
      name: 'All',
      color: "#FFD600",
      id: 0,

    },
  ]
  statusHeading:Array<any>;
  headerRow = ["Installation No. ", "Date", "Product Name", "Product Category", "Priority", "Status","Comment",];

  // statusHeading = ["ALL", "New", "Assigned Service Engineer", "Scheduled", "Fixed", "OnHold", "Not Fixed" ,"Rejected"];
  selectedHeadingId = 0;
  
  down: any;
  isDown: boolean = false;

  rejectInstallation = new RejectInstallation;

  assingedEngineer = new AssingedEngineer;

  listServiceEngineer: Array<any>;


  ngOnInit() {
    
    this.getInstallationStatus();
    this.subscribeRouteChanges();
  }
  setId(id,i,statusId ) {
    this.currentIndex=i;
        this.currentId = id;
        this.currentStatusId= statusId;
      }
 
      subscribeRouteChanges() {
        this.activatedRoute.queryParams
          .subscribe((e: Params) => {
            if (e.sId) {
    
              const statusId = Number(e.sId);
              this.getInstallations(statusId);
            } else {
              this.router.navigate(['/installation'], { queryParams: { sId: 0 } });
            }
    
          });
      }
    
      onHeadingClick(statusId:number){
        this.router.navigate(['/installation'], { queryParams: { sId: statusId } });
    
      }


  getInstallations(id: number) {
    this.selectedHeadingId = id;
    this.currentPage = 1;
    if (id === 0) {
      this.getAllInstallations();
    } else {
      this.getFilterInstallations(id);
    }

  } 


  getInstallationStatus() {
    this.installationservice.getInstallationStatus()
      .subscribe((res: any) => {
 
        res.unshift(this.allHeading[0]);
        this.statusHeading=res;

      },(err)=>{
        this.tostservice.showNotificationFailure(err)

      })
  }



  getAllInstallations() {

    this.showLoader = true;
    this.installationservice.getAllInstallation(this.currentPage)
      .subscribe((res: any) => {
        this.Installations = res;
        this.filterInstallation = res;
        this.showLoader = false;

      },
        (err) => {
          this.showLoader = false;
          this.tostservice.showNotificationFailure(err)

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
      },(err)=>{
        this.tostservice.showNotificationFailure(err)

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
  //   this.selectedHeadingId = i;
  //   this.filterInstallation = [];

  //   if (i == 0) {
  //     this.filterInstallation = this.Installations;
  //   } else {
  //     this.filterInstallation = this.Installations.filter(element => element.statusName == this.statusHeading[i]);

  //   }
  // }






  lodeMore() {

    if (this.selectedHeadingId === 0) {
      this.showLoader = true;
      this.installationservice.getAllInstallation(this.currentPage + 1)
        .subscribe((res: Array<any>) => {

          if (res.length) {

            this.filterInstallation = this.filterInstallation.concat(res);
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
      this.installationservice.getFillterInstallation(this.selectedHeadingId, this.currentPage + 1)
        .subscribe((res: Array<any>) => {

          if (res.length) {

            this.filterInstallation = this.filterInstallation.concat(res);
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
      this.filterInstallation=[];
      this.installationservice.getSorting(val)
      .subscribe((res:any)=>{
this.filterInstallation=res;
this.showLoader = false;
      },(err)=>{
        this.tostservice.showNotificationFailure(err)
        this.showLoader = false;

      })

    } else {
      this.filterInstallation=[];

      this.showLoader = true;
      this.installationservice.getFilterSorting(val, this.selectedHeadingId)
        .subscribe((res) => {
          this.filterInstallation = res;
          this.showLoader = false;
        },(err)=>{
          this.tostservice.showNotificationFailure(err)
          this.showLoader = false;

        })
    }
  }


  getAssingedId(id,AssignEngName?) {
    if (AssignEngName) {
      this.assignTitle= "Change";
    } else {
      this.assignTitle= "Assign";
    }
    this.installationservice.getServiceEngAgainstInstallationId(id)
      .subscribe((res: any) => {
        console.log(res)
        this.listServiceEngineer =res.filter( element=> element.name != AssignEngName);
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
  }





  getInstallationsId(id) {
this.loadingHistory=false;
    this.installationservice.getInstallationsHistory(id)
      .subscribe((res: number) => {
        this.loadingHistory=true;
        this.installationsHistory = res;
        console.log(res)
      }, (err) => {
        this.loadingHistory= true;
        this.tostservice.showNotificationFailure(err)


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
    const fd = new FormData();
    fd.append("comment", this.rejectInstallation.comment);
    fd.append("pic", this.imgfile);
    fd.append("updateInfo ", "reject");
    this.installationservice.rejectInstallation(fd, this.currentId)
      .subscribe((res: number) => {

        this.resetform();
      }, (err) => {
        this.tostservice.showNotificationFailure(err)

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
this.assignButtonHide=true;
    const fd = new FormData();

    for (const key in this.assingedEngineer)
      fd.append(key, this.assingedEngineer[key]);
    this.installationservice.assignEngineer(fd, this.currentId)

      .subscribe((res: number) => {
        this.assignButtonHide=false;
        if(this.filterInstallation[this.currentIndex].statusName!='New'){
          this.filterInstallation[this.currentIndex]=res;
          console.log("if condition")
 
         } else{
           this.getFilterInstallations(this.currentStatusId)
 
         }
        this.closeAssignModal();
        this.showNotification("Engineer Change successfuly")

        this.resetform();
      }, (err) => {
        this.assignButtonHide=false;

        this.tostservice.showNotificationFailure(err)

      })
  }


  closeAssignModal() {
    $('#assignModal').modal('hide')
  }


  showNotification(msg?) {
   
    $.notify({

      icon: "add_alert",
      message: msg || "Installation Assign successfuly"



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
