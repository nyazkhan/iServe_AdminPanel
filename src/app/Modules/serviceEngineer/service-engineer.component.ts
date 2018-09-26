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
  addCatShow = false;
  removeCatShow = false;
  pinChangeSuccessfuly = false;
  categoryChangeSuccessfuly = false;
  catarray: Array<number>;
  subCatArray = [];
  productType = [];
  constructor(
    private router: Router,
    private tostservice: TostService,
    private engineerService: ServiceEngineerService,
  ) { }

  dataRows: any;
  isDataLoad: boolean = true;
  imgfile: any;
  urlTOShowImg: string;
  headerRow: Array<string> = ['S.No.', 'Name', 'User Name', 'Email', 'Phone No', 'Specialization', 'Action']
  engineerDetails = new EngineerDetails
  pinIstrue: boolean = true;
  loadingButton: boolean = false;
  productCategory: any
  selectedProductCategories: Array<any>;
  selectedProductCategoryChildren: Array<any>;
  addressTypeOptions = ['Home', 'Office', 'Permanent'];
  pins: any;
  editpins = [];
  ProductCategoryTypeIds: Array<number>
  subCatArray1 = [];

  assignedProductType = [];
  assignedProductTypeId = [];

  addCategoryTypeId = []
  currentRow: any;
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
          this.pinIstrue = false;
        });


      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  getProductCategorys() {
    this.engineerService.getProductCategory()
      .subscribe((res: any) => {
        this.productCategory = res;
        this.selectedProductCategories = res[0];
        console.log(this.productCategory);


      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }

  onProductTypeIdChange() {
    console.log(this.selectedProductCategories);
    if (this.selectedProductCategories) {
      this.selectedProductCategoryChildren = [];
      this.selectedProductCategories.forEach(product => {
        this.selectedProductCategoryChildren = this.selectedProductCategoryChildren.concat(product.childCategory);
      });
    }
  }


  getId(row) {
    this.assignpincode = []
    this.assignedProductTypeId = [];
    this.assignedProductType = []
    this.selectedProductCategories=[];
    this.selectedProductCategoryChildren = [];
    this.productType =[];

    this.currentRow = row;
    this.addCatShow = false;
    this.removeCatShow = false;
    this.editPinShow = false;
    this.assignedProductType = row.productTypes.slice(0);
    this.assignedProductType.forEach(element => {
      this.assignedProductTypeId.push(element.id)
    });

    this.currentId = row.id;

    this.assignpincode = row.assignPincodes.slice(0);

    this.filterPincode();

  }

  editManager() {

  }

  deleteEngineer() {
    this.engineerService.deleteEngineer(this.currentId)
      .subscribe((res: any) => {
        this.tostservice.showNotificationSuccess("Service Engineer Delete Successfuly")
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
  }


  getProdutId() {
    this.engineerService.getProductTypeIds(this.ProductCategoryTypeIds)
      .subscribe((res: any) => {
        this.productType = res
        console.log(res)
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

  creatEngineer() {

    this.loadingButton = true;
    const fd = new FormData();

    for (const key in this.engineerDetails) {
      if (key == "address") {
        for (const key1 in this.engineerDetails.address) {
          fd.append(key + "." + key1, this.engineerDetails.address[key1])
        }
      } else {
        fd.append(key, this.engineerDetails[key]);
      }
    }

    if (this.imgfile) {

      fd.append("pic", this.imgfile);
    }







    this.engineerService.addEngineer(fd)
      .subscribe((res: any) => {
        this.resetform();
        this.loadingButton = false;

        this.closeEngineerFormModal();
        this.dataRows.unshift(res);
        this.tostservice.showNotificationSuccess("Service Engineer Creat Successfuly")
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
    this.filterPincode();


  }


  addPin(pin) {
    this.editpins = this.editpins.filter(element => element != pin)
    this.assignpincode.push(pin);

  }

  filterPincode() {
    this.editpins = this.editpins.filter(element => this.assignpincode.indexOf(element) == -1);
  }

  canclePinchanges(row) {
    this.assignpincode = [];
    this.assignpincode = row.assignPincodes.slice(0);
    console.log(row)
    this.editpins = [];
    this.pins.forEach(element => {

      this.editpins.push(element.pincode);
    });
    this.filterPincode();
    this.editPinShow = false;

  }


  changePincode() {
    this.pinChangeSuccessfuly = true;
    console.log(this.assignpincode)

    this.engineerService.editPincodes({ "pincodes": this.assignpincode, "serviceEngineerId": this.currentId })
      .subscribe((res: any) => {
        this.pinChangeSuccessfuly = false;
        this.editPinShow = false;
        this.filterPincode();

        console.log(res);
        this.tostservice.showNotificationSuccess("change successfuly")
        this.engineerService.getEngineer()
          .subscribe((res: any) => {
            this.dataRows = res.slice(0)
          }, (err) => {

          })
      }, (err) => {
        this.pinChangeSuccessfuly = false;
        this.tostservice.showNotificationFailure(err)
      })
  }

  //////////////pincode change end here/////////////




  //////////product category change start here///////

  editProductCategory(value?) {

    this.getProductCategorys();
    if (value === 'add') {
      this.addCatShow = true;
    }
    if (value === 'remove') {
      this.removeCatShow = true;

    }


  }



  removeCategory(type) {
    this.assignedProductType = this.assignedProductType.filter(element => element.id != type.id);
    this.assignedProductTypeId = this.assignedProductTypeId.filter(element => element != type.id);

  }



  cancleChange() {
    this.getId(this.currentRow);
    this.assignedProductType = this.currentRow.productTypes.slice(0);
    this.addCatShow = false;
    this.removeCatShow = false;
    this.addCategoryTypeId = []
  }



  changeCategory() {
    this.categoryChangeSuccessfuly = true;

    let tempArray: any

    tempArray = this.assignedProductTypeId.filter(element => this.addCategoryTypeId.indexOf(element) == -1).concat(this.addCategoryTypeId);
    console.log(this.assignedProductTypeId);
    console.log(tempArray);

    console.log(this.addCategoryTypeId);

    this.engineerService.editProductCategoryType(tempArray, this.currentId)
      .subscribe((res: any) => {
        this.addCatShow = false;
        this.removeCatShow = false;
        this.categoryChangeSuccessfuly = false
        this.tostservice.showNotificationSuccess();


        this.engineerService.getEngineer()
          .subscribe((res: any) => {
            this.dataRows = res.slice(0)
          }, (err) => {

          })

      }, (err) => {
        this.categoryChangeSuccessfuly = false;
        this.tostservice.showNotificationFailure(err)
      })


  }






  /////////product categor ends here////////////


  resetform() {

    this.imgfile = null;
    this.engineerDetails = new EngineerDetails();
  }

  closeEngineerFormModal() {
    $('#EngineerFormModal').modal('hide')


  }







}
