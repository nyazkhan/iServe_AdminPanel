import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceEngineerService } from './service-engineer.service';
import { EngineerDetails } from '../../interface/engineer_details';
import { TostService } from 'src/app/providers/tost.service';

declare const $: any;
@Component({
  selector: 'app-service-engineer',
  templateUrl: './service-engineer.component.html',
  styleUrls: ['./service-engineer.component.scss']
})
export class ServiceEngineerComponent implements OnInit {
  currentId: number;
  assignpincode = [];
  editPinShow = false;
  changeSuccessfuly=false;
  constructor(private router: Router, private tostservice: TostService, private engineerService: ServiceEngineerService) { }

  dataRows: any;
  isDataLoad: boolean = true;
  imgfile: any;
  urlTOShowImg: string;
  headerRow: Array<string> = ['S.No.', 'Name', 'User Name', 'Email','Phone No', 'Specialization','Action']
  engineerDetails = new EngineerDetails
  pinIstrue: boolean = true;
  loadingButton: boolean = false;
  prodTypeOptions: Array<any>
  addressTypeOptions = ['Home', 'Office', 'Permanent'];
  pins: any;
  editpins = [];



  ngOnInit() {
    this.getEngineers();
    this.getPincodes();

    this.getProductCategorys();
  }





  getEngineers() {
    this.engineerService.getEngineer()
      .subscribe((res: any) => {
        this.dataRows = res;
        this.isDataLoad = false;
        console.log(res);

      },
        (err) => {

          this.tostservice.showNotificationFailure(err)
        })
  }

  getPincodes() {
    this.engineerService.getPincode()
      .subscribe((res: any) => {
        this.pins = res;
        res.forEach(element => {

          this.editpins.push(element.pincode);
        });

        console.log(this.editpins)
        this.pinIstrue = false;
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  getProductCategorys() {
    this.engineerService.getProductCategory()
      .subscribe((res: any) => {
        this.prodTypeOptions = res;
        console.log(res)
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  getId(row) {
    this.editPinShow = false;

    this.currentId = row.id;

    this.assignpincode = row.assignPincodes.slice(0);

    this.filterPincode();

  }

  editManager() {

  }

  deleteEngineer() {
    this.engineerService.deleteEngineer(this.currentId)
      .subscribe((res: any) => {
        this.tostservice.showNotificationSuccess(res)
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
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
    // this.closeEngineerFormModal();
    // $('#loaderModel').modal('show')

    this.loadingButton = true;
    const fd = new FormData();

    for (const key in this.engineerDetails) {
      if (key == "address") {
        for (const key1 in this.engineerDetails.address) {
          fd.append(key + "." + key1, this.engineerDetails.address[key1])
        }
      }




      else {
        fd.append(key, this.engineerDetails[key]);
        fd.append("pic", this.imgfile);
      }
    }
    this.engineerService.addEngineer(fd)
      .subscribe((res: any) => {
        this.resetform();
        this.closeEngineerFormModal();
        this.dataRows.unshift(res);
        this.showNotification();
      }, (err) => {
        this.loadingButton = false;

        this.tostservice.showNotificationFailure(err)

      })


  }


  ////////////////pincode Change start here////////////////

  removePincode(pin) {
    this.assignpincode = this.assignpincode.filter(element => element != pin);
    this.editpins.push(pin);
  }


  showEditPin() {
    this.editPinShow = true;

  }


  addPin(pin) {
    this.editpins = this.editpins.filter(element => element != pin)
    this.assignpincode.push(pin);

  }

  filterPincode() {
    this.editpins = this.editpins.filter(element => this.assignpincode.indexOf(element) == -1);
  }

  canclePinchanges(row) {
    this.assignpincode = row.assignPincodes;
    console.log(row)
    this.editpins = [];
    this.pins.forEach(element => {

      this.editpins.push(element.pincode);
    });
    this.filterPincode();
    this.editPinShow = false;

  }


  changePincode() {
    this.changeSuccessfuly=true;
    console.log(this.assignpincode)

    this.engineerService.editPincodes({ "pincodes": this.assignpincode, "serviceEngineerId": this.currentId })
      .subscribe((res: any) => {
        this.changeSuccessfuly=false;
        this.editPinShow = false;

        console.log(res);
        this.tostservice.showNotificationSuccess("change successfuly")
      }, (err) => {
        this.changeSuccessfuly=false;
        this.tostservice.showNotificationFailure(err)
      })
  }

//////////////pincode change end here/////////////




//////////product category change start here///////

editProductCategory(){

}



removeCategory(){}


addCategory(){}

cancleChange(){}


changeCategory(){}






/////////product categor ends here////////////


  resetform() {
    this.imgfile = null;
    this.engineerDetails = new EngineerDetails();
  }

  closeEngineerFormModal() {
    $('#EngineerFormModal').modal('hide')


  }

  showNotification() {

    $.notify({

      icon: "add_alert",
      message: "Manager add successfuly"



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
