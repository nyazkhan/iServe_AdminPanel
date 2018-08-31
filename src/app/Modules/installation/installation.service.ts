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
  
  
      // // get installations history
      // getInstallationHistory(i){
      // //   // let header = this.getAccessToken();
      // //   const InstallationHistory_api = `/m/installation/${i}/history`
      // //   return this.customHttp.get(InstallationHistory_api)
      // // }
      // // getServiceEngAgainstinstallationId(i){
      // //   // let header = this.getAccessToken();
      // //   const Installation_api = `/m/installation/${i}/service-engineer`
      // //   return this.customHttp.get(Installation_api)
      // // }



      // // assingEngineer(fd,id){
      // //   // let header = this.getAccessToken();
      // //   const Installation_api = `/m/installation/${id}`
      // //   return this.customHttp.put(Installation_api, fd)
   
      // // }





//get installations details
    getAllInstallation(i:number){
      // let header = this.getAccessToken();
      const complaint_api = `/m/installation/page/${i}`
      return this.customHttp.get(complaint_api)
    }
    

  

    getFillterInstallation(fd,pageNo:number){
      const filter_api = `/m/installation/filter/page/${pageNo}`
      return this.customHttp.post(filter_api,fd)
    }


    // get installations history
    getInstallationsHistory(i){
      // let header = this.getAccessToken();
      const complaintHistory_api = `/m/installation/${i}/history`
      return this.customHttp.get(complaintHistory_api)
    }
  
  


  
    //reject installations put request
    rejectInstallation(fd, complaintId){
      const rejectComplaint_api = `/m/installation/${complaintId}`
      return this.customHttp.put(rejectComplaint_api, fd, )
    }
  
  



      getServiceEngAgainstInstallationId(i){
        // let header = this.getAccessToken();
        const Installation_api = `/m/installation/${i}/service-engineer`
        return this.customHttp.get(Installation_api)
      }
  
      
      
      
      //assign Engineer for installation
      assignEngineer(fd,id){
        // let header = this.getAccessToken();
        const Installation_api = `/m/installation/${id}`
        return this.customHttp.put(Installation_api, fd)
   
      }






      getChartData(){
        // const I_api = `/m/status/installation`

        const I_api = `/m/installation/graph/status`
        // const I_api = `/m/installation/graph/product`
        // const I_api = ` /m/installation/graph/category`
        // const I_api = `/m/installation/graph/product-status`
        // const I_api = `/m/installation/graph/category-status`

        return this.customHttp.get(I_api)
       
      }


      
      
      // status heading from backend
      getInstallationStatus(){
        const status=`/m/status/installation`
        return this.customHttp.get(status)
      }


      getSorting(sort){
        const sort_api =`/m/installation/sort/${sort}/true`
        return this.customHttp.get(sort_api)
      }

      // sorting by status, priority, category filter by status id
getFilterSorting(sort,filter){
  const filterSort_api =`/m/installation/filter-sort/${sort}/true`
  return this.customHttp.post(filterSort_api,filter)
}

    }



