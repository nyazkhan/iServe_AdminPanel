import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor( private customHttp: CustomHttpService) { }
    //get complaints details
    getComplaint(i:number){
      // let header = this.getAccessToken();
      const complaint_api = `/m/complaint/page/${i}`
      return this.customHttp.get(complaint_api)
    }
    
  
    // get complaints history
    getComplaintsHistory(i){
      // let header = this.getAccessToken();
      const complaintHistory_api = `/m/complaint/${i}/history`
      return this.customHttp.get(complaintHistory_api)
    }
  
  
  
    //reject complaints put request
    rejectComplaint(fd, complaintId){
      const rejectComplaint_api = `/m/complaint/${complaintId}`
      return this.customHttp.put(rejectComplaint_api, fd, )
    }
  
  
    // //get installe details
    // getInstallation(i:number){
    //   // let header = this.getAccessToken();
    //   const Installation_api = `/m/complaint/page/${i}`
    //   return this.customHttp.get(Installation_api)
    // }
  
  
      // // get complaints history
      // getInstallationHistory(i){
      //   // let header = this.getAccessToken();
      //   const InstallationHistory_api = `/m/installation/${i}/history`
      //   return this.customHttp.get(InstallationHistory_api)
      // }
      getServiceEngAgainstComplaindId(i){
        // let header = this.getAccessToken();
        const Installation_api = `/m/complaint/${i}/service-engineer`
        return this.customHttp.get(Installation_api)
      }
  
      //assign Engineer for complaint
      assignEngineer(fd,id){
        // let header = this.getAccessToken();
        const Installation_api = `/m/complaint/${id}`
        return this.customHttp.put(Installation_api, fd)
   
      }
}
