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


  //eddit manager details
  // editManagerDetails(edit_id){
  //   const edit_api =`/sa/employee/${edit_id}`
  //   return this.customHttp.get(edit_api )
  // }


  deleteManager(delete_id){
  return this.customHttp.delete(`/sa/employee/${delete_id}`)
  }
}
