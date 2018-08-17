import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandManagerService } from './brand-manager.service';
import { ManagerDetails } from '../../interface/manager_details';
import { TostService } from 'src/app/providers/tost.service';

declare const $: any;
@Component({
  selector: 'app-brand-manager',
  templateUrl: './brand-manager.component.html',
  styleUrls: ['./brand-manager.component.scss']
})
export class BrandManagerComponent implements OnInit {

  constructor(private router: Router, private brandService: BrandManagerService,private tostservice: TostService) { 
   
  }

  dataRows: any;
  isDataLoad: boolean = true;
  loadingButton: boolean = false;
  isBrandId: boolean = false;
  brands: any;
  submitButtonHide:boolean= false;
  managerDetails = new ManagerDetails;

  headerRow: Array<string> = ['S.No.','Profile Picture','Name','User Name','Phone No','Email',]
  ngOnInit() {

    this.getManagers();
    this.getBrandIds();
  }


  getManagers() {
    this.brandService.getManager()
      .subscribe((res: any) => {
        this.dataRows = res;
        this.isDataLoad = false;
        // console.log(res)
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  getBrandIds() {
    this.brandService.getBrandIds()
      .subscribe((res: any) => {
        this.brands = res;
        console.log(res)
        this.isBrandId = false;
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
                })
  }



 
  onSubmit() {
    this.submitButtonHide=true;
    // this.closeManagerFormModal();
    // $('#loaderModel').modal('show')
    this.loadingButton = true;
    const fd = new FormData();

    for (const key in this.managerDetails) {
      fd.append(key, this.managerDetails[key]);
    }

    this.brandService.addManager(fd)
      .subscribe((res: any) => {
        this.resetform();
            this.closeManagerFormModal();
        this.dataRows.unshift(res)
        this.showNotification();
      }, (err) => {
        this.tostservice.showNotificationFailure(err)        
      })


  }



  resetform() {

    this.managerDetails = new ManagerDetails();
  }


  closeManagerFormModal() {
    $('#ManagerFormModal').modal('hide')
    // $('#loaderModel').modal('show')

    
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
