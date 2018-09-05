import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceEngineerService {

  constructor(private customHttp: CustomHttpService) { }
 
 
 
 
 
  //add engineer
  addEngineer(fd){
        // const engineer_api = `/sa/service-engineer`
    return this.customHttp.post("/sa/service-engineer", fd, )
   
  }


  // get pincodes from server
  getPincode(){
        // const pincode_api =`/sa/pincode-detail`
    return this.customHttp.get("/sa/pincode-detail")
  }



  // get product category from server
  getProductCategory(){
        // const productCategory_api =`/sa/product-category`
    return this.customHttp.get("/sa/product-category")
  }



  // //get brand id
  // getBrandIds(){
  //       // const brandIds_api =`/sa/product-category`
  //   return this.customHttp.get("/sa/product-category")
  // }




  //get service engineer details  from server 
  getEngineer(){
    
        return this.customHttp.get("/sa/service-engineer" )
   

  }



deleteEngineer(delete_id){
  return this.customHttp.delete(`/sa/service-engineer/${delete_id}`)
}

editPincodes(fd){
  console.log(fd);
  return this.customHttp.post(`/sa/pincode-service-engineer`, fd)
}
}
