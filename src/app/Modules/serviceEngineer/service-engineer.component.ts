import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { ServiceEngineerService } from './service-engineer.service';
import { EngineerDetails } from '../../interface/engineer_details';
declare const $: any;
@Component({
  selector: 'app-service-engineer',
  templateUrl: './service-engineer.component.html',
  styleUrls: ['./service-engineer.component.scss']
})
export class ServiceEngineerComponent implements OnInit {


  constructor(private router: Router, private engineerService: ServiceEngineerService) { }

  dataRows: any;
  isDataLoad: boolean = true;

  headerRow: Array<string> = ['S.No.', 'Profile Picture', 'Name', 'User Name', 'Phone No', 'specialist', 'More details']
  engineerDetails = new EngineerDetails
  pinIstrue: boolean = true;
  loadingButton: boolean = false;
  prodTypeOptions: Array<any>
  addressTypeOptions = ['Home', 'Office', 'Permanent'];
  pins: any;




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
        console.log(res)
      },
        (err) => {

          alert(JSON.stringify(err));
        })
  }

  getPincodes() {
    this.engineerService.getPincode()
      .subscribe((res: any) => {
        this.pins = res;
        this.pinIstrue = false;
      },
        (err) => {
          alert(JSON.stringify(err));
        })
  }


  getProductCategorys() {
    this.engineerService.getProductCategory()
      .subscribe((res: any) => {
        this.prodTypeOptions = res;
      },
        (err) => {
          alert(JSON.stringify(err));
        })
  }






  onSubmit() {
    this.closeEngineerFormModal();
    $('#loaderModel').modal('show')

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
      }
    }
    this.engineerService.addEngineer(fd)
      .subscribe((res: any) => {
        $('#loaderModel').modal('hide')
        this.showNotification('success');
        this.resetform();
      }, (err) => {

        $('#loaderModel').modal('hide')
        this.showNotification('danger', JSON.stringify(err));

        alert(JSON.stringify(err));

      })


  }


  resetform() {

    this.engineerDetails = new EngineerDetails();
  }

  closeEngineerFormModal() {
    $('#EngineerFormModal').modal('hide')


  }

  showNotification(type, error?) {
    if (type == "success") {
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
    if (type == "danger") {
      $.notify({

        icon: "error_outline",
        message: '"Failed to submit form data" <br> <b>"Try Again With diffrent User Name"<b> <br> ' + error



      }, {
          type: 'danger',
          timer: 5000,
          placement: {
            from: "top",
            align: "right"
          }
        });
    } else {

    }



  }





}
