import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor( private customHttp: CustomHttpService) { }
   
  
  //get complaints details
    getAllComplaint(i:number){
      // let header = this.getAccessToken();
      const complaint_api = `/m/complaint/page/${i}`
      return this.customHttp.get(complaint_api)
    }
    

  
// get filter complaints
    // getFillterComplaint(id:number,pageNo:number){
    //   const filter_api = `/m/complaint/filter/page/${pageNo}`
    //   return this.customHttp.post(filter_api,{"categoryId":3})
    // }

    // get filter complaints
    getFillterComplaint(fd,pageNo:number){
      const filter_api = `/m/complaint/filter/page/${pageNo}`
      return this.customHttp.post(filter_api,fd)
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
  
  


// get  list of engineer for perticuler type of  complaints
      getServiceEngAgainstComplaindId(i){
        const Installation_api = `/m/complaint/${i}/service-engineer`
        return this.customHttp.get(Installation_api)
      }
  
      
      
      
      //assign Engineer for complaint
      assignEngineer(fd,id){
        // let header = this.getAccessToken();
        const Installation_api = `/m/complaint/${id}`
        return this.customHttp.put(Installation_api, fd)
   
      }









      getChartData(){
        // const I_api = `/m/status/complaint`

        const I_api = `/m/complaint/graph/status`
        // const I_api = `/m/complaint/graph/product`
        // const I_api = ` /m/complaint/graph/category`
        // const I_api = `/m/complaint/graph/product-status`
        // const I_api = `/m/complaint/graph/category-status`

        return this.customHttp.get(I_api)
       
      }


      
      
      // status heading from backend
      getCompStatus(){
        const status=`/m/status/complaint`
        return this.customHttp.get(status)
      }

      // sorting against diffrent value
      getSorting(sort ,isAsc){
        const sort_api =`/m/complaint/sort/${sort}/${isAsc}`
        return this.customHttp.get(sort_api)
      }

      // sorting by status, priority, category filter by status id
getFilterSorting(sort,filter,isAsc){
  const filterSort_api =`/m/complaint/filter-sort/${sort}/${isAsc}`
  return this.customHttp.post(filterSort_api,filter)
}




    }

