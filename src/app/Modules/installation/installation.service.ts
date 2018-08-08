import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class InstallationService {

  constructor( private customHttp :CustomHttpService) { }
   
    
  
   
  
  
  
   
  
  
    //get installe details
    getInstallation(i:number){
      // let header = this.getAccessToken();
      const Installation_api = `/m/installation/page/${i}`
      return this.customHttp.get(Installation_api)
    }
  
  
      // get complaints history
      getInstallationHistory(i){
        // let header = this.getAccessToken();
        const InstallationHistory_api = `/m/installation/${i}/history`
        return this.customHttp.get(InstallationHistory_api)
      }
      getServiceEngAgainstinstallationId(i){
        // let header = this.getAccessToken();
        const Installation_api = `/m/installation/${i}/service-engineer`
        return this.customHttp.get(Installation_api)
      }



      assingEngineer(fd,id){
        // let header = this.getAccessToken();
        const Installation_api = `/m/installation/${id}`
        return this.customHttp.put(Installation_api, fd)
   
      }
}
