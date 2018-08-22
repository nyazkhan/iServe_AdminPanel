import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class BrandManagerService {

  constructor(private customHttp: CustomHttpService) { }
  

  //add manager
  addManager(fd){
    // const manager_api = `/sa/employee`
    return this.customHttp.post("/sa/employee", fd,  )
  }

//get brand id
getBrandIds(){
  
  // const brandIds_api =`${BASEURL}/sa/product-category`
  return this.customHttp.get("/sa/brand")
}

  //get manager details
  getManager(){
    // const manager_api = `/sa/brand-manager/page/1`
    return this.customHttp.get("/sa/brand-manager/page/1")
  }

}
