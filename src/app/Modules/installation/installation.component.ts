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

 
  statusId:number;
  ProductCategoryId:number;
  stateId:any;

  
  sortActive: string
  filterBy = {};
  filterbysort = {}

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
  headerRow = ["Installation No. ", "Date", "Product Name", "Product Category", "Priority","Comment", "Status",];

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
    
               this.statusId = Number(e.sId) || Number(0);
          this.ProductCategoryId = Number(e.pcId) || Number(0);
          this.stateId = e.stId || 0;

              this.getInstallations(this.statusId);
            } else {
              this.router.navigate(['/installation'], { queryParams: { sId: 0, pcId: 0, stId: 0 } });
            }
    
          });
      }
    
      onHeadingClick(statusId:number){
        this.router.navigate(['/installation'], { queryParams: { sId: statusId, pcId: 0,  stId: 0 } });
        this.sortActive = "";

      }


  getInstallations(sId: number) {
    this.selectedHeadingId = sId;
    this.currentPage = 1;
    if (this.statusId== 0 && this.ProductCategoryId == 0  && this.stateId == 0||"") {
      this.getAllInstallations();
    } else {
      this.getFilterInstallations(sId);
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
        // this.Installations = res;
        this.filterInstallation = res;
        this.showLoader = false;

      },
        (err) => {
          this.showLoader = false;
          this.tostservice.showNotificationFailure(err)

        })
  }



  //get filter Installations
  getFilterInstallations(sId:number) {
    this.filterInstallation=[];
    this.showLoader = true;
    this.currentPage = 1;

    if (this.ProductCategoryId != 0 || this.statusId != 0 || this.stateId != 0 ) {
      if (this.statusId||sId) {
        this.filterBy['statusId'] = this.statusId||sId;
      }
      if (this.ProductCategoryId) {
        this.filterBy["categoryId"] = this.ProductCategoryId;
      }
      if (this.stateId != "0" && this.stateId != "") {
        this.filterBy['location'] = this.stateId;
      }
      
    } else {
      this.getAllInstallations();
    }
    this.installationservice.getFillterInstallation(this.filterBy, this.currentPage)
      .subscribe((res: any) => {
        this.filterInstallation = res;
        this.showLoader = false;
      },(err)=>{
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
    this.currentRouteParams();
    this.sortActive = val;

    this.showLoader = true;
    if (this.statusId== 0 && this.ProductCategoryId == 0 &&  this.stateId == 0||"") {
      this.filterInstallation=[];
      this.installationservice.getSorting(val)
      .subscribe((res:any)=>{
this.filterInstallation=res;
this.showLoader = false;
      },(err)=>{
        this.tostservice.showNotificationFailure(err)
        this.showLoader = true;

      })

    } else {
      this.filterInstallation=[];

      this.showLoader = true;
      this.installationservice.getFilterSorting(val, this.filterbysort)
        .subscribe((res) => {
          this.filterInstallation = res;
          this.showLoader = false;
        },(err)=>{
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
      if (key == "pcId" && query[key] != "0") {
        this.filterbysort['categoryId'] = query[key];
      }
      if (key == "stId" && query[key] != "0" || "") {
        this.filterbysort['location'] = query[key];
      }
      

      console.log(query[key])
      console.log(this.filterbysort)
    }
  }


  clearSortBy(i) {
    console.log(i)
    
      this.getFilterInstallations(i)

    this.sortActive = "";
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

  assignFormData() {
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
