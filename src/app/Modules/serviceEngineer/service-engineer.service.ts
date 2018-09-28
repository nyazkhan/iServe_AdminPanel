import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEngineerService {

  constructor(private customHttp: CustomHttpService) { }





  //add engineer
  addEngineer(fd) {
    return this.customHttp.post("/sa/service-engineer", fd)

  }


  // get pincodes from server
  getPincode() {
    return this.customHttp.get("/sa/pincode-detail")
  }



  // get product category from server
  getProductCategory() {
    return this.customHttp.get("/sa/product-category")
  }


  // get product type id from server
  getProductTypeIds(ids: Array<number>) {
    const idss = ids.join(',');

    return this.customHttp.get(`/sa/product-type?categoryIds=${idss}`)
  }





  //get service engineer details  from server 
  getEngineer() {

    return this.customHttp.get("/sa/service-engineer")


  }


  //  delete engineer
  deleteEngineer(delete_id) {
    return this.customHttp.delete(`/sa/service-engineer/${delete_id}`)
  }


  // change pincode of engineer
  editPincodes(fd) {
    return this.customHttp.post(`/sa/pincode-service-engineer`, fd)
  }


  // change product type id of engineer
  editProductCategoryType(fd, id) {
    return this.customHttp.post(`/sa/product-type-service-engineer`, { "productTypeIds": fd, "serviceEngineerId": id })
  }



}
