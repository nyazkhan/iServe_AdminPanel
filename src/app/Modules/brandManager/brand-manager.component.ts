import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { BrandManagerService } from './brand-manager.service';
import { ManagerDetails } from '../../interface/manager_details';
declare const $: any;
@Component({
  selector: 'app-brand-manager',
  templateUrl: './brand-manager.component.html',
  styleUrls: ['./brand-manager.component.scss']
})
export class BrandManagerComponent implements OnInit {

  constructor(private router: Router, private brandService: BrandManagerService) { 
   
  }

  dataRows: any;
  isDataLoad: boolean = true;
  loadingButton: boolean = false;
  isBrandId: boolean = false;
  brands: any;
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
        console.log(res)
      },
        (err) => {
          // throw err;
          alert(JSON.stringify(err));
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
          alert(JSON.stringify(err));
        })
  }



 
  onSubmit() {
    this.closeManagerFormModal();
    $('#loaderModel').modal('show')
    this.loadingButton = true;
    const fd = new FormData();

    for (const key in this.managerDetails) {
      fd.append(key, this.managerDetails[key]);
    }

    this.brandService.addManager(fd)
      .subscribe((res: any) => {
        console.log(res);
        this.dataRows.unshift(res)
        this.resetform();
        $('#loaderModel').modal('hide')
        this.showNotification("success");
      }, (err) => {
        $('#loaderModel').modal('hide')
        this.showNotification("danger",JSON.stringify(err));
        
      })


  }



  resetform() {

    this.managerDetails = new ManagerDetails();
  }


  closeManagerFormModal() {
    $('#ManagerFormModal').modal('hide')
    // $('#loaderModel').modal('show')

    
  }

  showNotification(type,error?) {
    if(type=="success"){
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
      if (type=="danger") {
        $.notify({
      
          icon: "error_outline",
          message: '"Failed to submit form data" <br> <b>"Try Again Later"<b> <br> '+error
       
       
  
      }, {
          type: 'danger',
          timer: 1000,
          placement: {
            from: "top",
            align: "right"
          }
        });
      } else {
        
      }



      }



}
