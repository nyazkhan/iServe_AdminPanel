import { Component, OnInit } from '@angular/core';
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
 
 
  editPinShow = false;
  addCatShow = false;
  removeCatShow = false;
  pinChangeSuccessfuly = false;
  pinIstrue = true;
  loadingButton = false;
  categoryChangeSuccessfuly = false;
  isDataLoad = true;

  productType = [];
  assignpincode = [];
  editpins = [];
  assignedProductType = [];
  assignedProductTypeId = [];
  addCategoryTypeId = []

  catarray: Array<number>;
  selectedProductCategories: Array<any>;
  selectedProductCategoryChildren: Array<any>;
  ProductCategoryTypeIds: Array<number>

  headerRow = ['S.No.', 'Name', 'User Name', 'Email', 'Phone No', 'Specialization', 'Action']
  addressTypeOptions = ['Home', 'Office', 'Permanent'];

  currentId: number;
  searchText:any;
  dataRows: any;
  imgfile: any;
  productCategory: any
  pins: any;
  currentRow: any;
  searchPin:any
  urlTOShowImg: string;

  engineerDetails = new EngineerDetails

  constructor(
    private tostservice: TostService,
    private engineerService: ServiceEngineerService,
  ) { }



  ngOnInit() {
    this.getEngineers();
    this.getPincodes();

    this.getProductCategorys();
  }



  // get engineers from server
  getEngineers() {
    this.engineerService.getEngineer()
      .subscribe((res: any) => {
        this.dataRows = res;

        this.isDataLoad = false;

      },
        (err) => {

          this.tostservice.showNotificationFailure(err)
        })
  }


  // get pincodes from server
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


  //  get product category from  serve
  getProductCategorys() {
    this.engineerService.getProductCategory()
      .subscribe((res: any) => {
        this.productCategory = res;
        this.selectedProductCategories = res[0];


      },
        (err) => {
          this.tostservice.showNotificationFailure(err)
        })
  }


  // get product sub category  on the bases of selected product category
  onProductTypeIdChange() {
    if (this.selectedProductCategories) {
      this.selectedProductCategoryChildren = [];
      this.selectedProductCategories.forEach(product => {
        this.selectedProductCategoryChildren = this.selectedProductCategoryChildren.concat(product.childCategory);
      });
    }
  }


  //  function trigger when table row click  and store the data related to row
typeName=[];
  setId(row) {
    this.assignpincode = []
    this.assignedProductTypeId = [];
    this.assignedProductType = []
    this.selectedProductCategories = [];
    this.selectedProductCategoryChildren = [];
    this.productType = [];

    this.currentRow = row;
    this.addCatShow = false;
    this.removeCatShow = false;
    this.editPinShow = false;
    this.assignedProductType = row.productTypes.slice(0);
    this.assignedProductType.forEach(element => {
      this.assignedProductTypeId.push(element.id)
      this.typeName.push(element.name)
    });

    this.currentId = row.id;

    this.assignpincode = row.assignPincodes.slice(0);

    this.filterPincode();

  }


  // delete engineer
  deleteEngineer() {
    this.engineerService.deleteEngineer(this.currentId)
      .subscribe((res: any) => {
        this.tostservice.showNotificationSuccess("Service Engineer Delete Successfuly")
      }, (err) => {
        this.tostservice.showNotificationFailure(err)
      })
  }


  // get product type id from server on the bases of selected category or sub category
  getProdutId() {
    this.engineerService.getProductTypeIds(this.ProductCategoryTypeIds)
      .subscribe((res: any) => {
        this.productType = res
        console.log(res)
      })
  }


  //  for  img upload
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


  // creat a new engineer 

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

  showEditPin() {
    this.editPinShow = true;
    this.filterPincode();
  }


  removePincode(pin) {
    this.assignpincode = this.assignpincode.filter(element => element != pin);
    this.editpins.push(pin);
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
    this.setId(this.currentRow);
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


  // reset engineer form

  resetform() {

    this.imgfile = null;
    this.engineerDetails = new EngineerDetails();
  }


  closeEngineerFormModal() {
    $('#EngineerFormModal').modal('hide')


  }







}
