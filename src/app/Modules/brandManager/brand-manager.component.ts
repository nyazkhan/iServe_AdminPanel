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

  isDataLoad: boolean = true;
  loadingButton: boolean = false;
  isBrandId: boolean = false;
  submitButtonHide: boolean = false;

  headerRow = ['S.No.', 'Name', 'User Name', 'Email', 'Phone No', "Action"]

  imgfile: any;
  urlTOShowImg: any;
  dataRows: any;
  brands: any;

  currentId: number;

  managerDetails = new ManagerDetails;

  constructor(
    private brandService: BrandManagerService,
    private tostservice: TostService
  ) { }

  ngOnInit() {

    this.getManagers();
    this.getBrandIds();
  }


  getManagers() {
    this.brandService.getManager()
      .subscribe((res: any) => {
        this.dataRows = res;
        this.isDataLoad = false;
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  getBrandIds() {
    this.brandService.getBrandIds()
      .subscribe((res: any) => {
        this.brands = res;
        this.isBrandId = false;
      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  // upload manager img 
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


  // creat new manager
  onSubmit() {
    this.submitButtonHide = true;

    this.loadingButton = true;
    const fd = new FormData();

    for (const key in this.managerDetails) {
      fd.append(key, this.managerDetails[key]);
      if (this.imgfile) {
        fd.append("pic", this.imgfile)
      }
    }

    this.brandService.addManager(fd)
      .subscribe((res: any) => {
        this.resetform();
        this.closeManagerFormModal();
        this.dataRows.unshift(res)
        this.tostservice.showNotificationSuccess("Manager add successfuly");
      }, (err) => {
        this.loadingButton = false;

        this.tostservice.showNotificationFailure(err)
      })


  }


  getId(id) {
    this.currentId = id;
  }


  // delete manager 
  deleteManager() {
    this.brandService.deleteManager(this.currentId)
      .subscribe((res: any) => {
        this.tostservice.showNotificationSuccess("Manager Delete successfuly");
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
  }


  // reset manager form
  resetform() {
    this.imgfile = null;
    this.managerDetails = new ManagerDetails();
  }


  closeManagerFormModal() {
    $('#ManagerFormModal').modal('hide')
  }



}
