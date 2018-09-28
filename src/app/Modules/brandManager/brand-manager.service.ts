import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class BrandManagerService {

  constructor(private customHttp: CustomHttpService) { }


  //add manager
  addManager(fd) {
    return this.customHttp.post("/sa/employee", fd)
  }

  //get brand id
  getBrandIds() {

    return this.customHttp.get("/sa/brand")
  }

  //get manager details
  getManager() {
    return this.customHttp.get("/sa/brand-manager/page/1")
  }




  // delete Manager

  deleteManager(delete_id) {
    return this.customHttp.delete(`/sa/employee/${delete_id}`)
  }
}
