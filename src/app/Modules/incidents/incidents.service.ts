import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  constructor(private customHttp: CustomHttpService) { }


  //get complaints details
  getAllComplaint(pageNo: number) {
    const complaint_api = `/m/complaint/page/${pageNo}`
    return this.customHttp.get(complaint_api)
  }





  // get filter complaints
  getFillterComplaint(fd, pageNo: number) {
    const filter_api = `/m/complaint/filter/page/${pageNo}`
    return this.customHttp.post(filter_api, fd)
  }


  // get complaints history
  getComplaintsHistory(i) {
    const complaintHistory_api = `/m/complaint/${i}/history`
    return this.customHttp.get(complaintHistory_api)
  }





  //reject complaints put request
  rejectComplaint(fd, complaintId) {
    const rejectComplaint_api = `/m/complaint/${complaintId}`
    return this.customHttp.put(rejectComplaint_api, fd)
  }




  // get  list of engineer for perticuler type of  complaints
  getServiceEngAgainstComplaindId(i) {
    const Installation_api = `/m/complaint/${i}/service-engineer`
    return this.customHttp.get(Installation_api)
  }




  //assign Engineer for complaint
  assignEngineer(fd, id) {
    const Installation_api = `/m/complaint/${id}`
    return this.customHttp.put(Installation_api, fd)

  }








  // get incidents count by status
  getStatusByCount() {
    return this.customHttp.get(`/m/complaint/graph/status`)

  }




  // status heading from backend
  getCompStatus() {
    const status = `/m/status/complaint`
    return this.customHttp.get(status)
  }

  // sorting against diffrent value
  getSorting(sort, isAsc) {
    const sort_api = `/m/complaint/sort/${sort}/${isAsc}`
    return this.customHttp.get(sort_api)
  }

  // sorting by status, priority, category filter by status id
  getFilterSorting(sort, filter, isAsc) {
    const filterSort_api = `/m/complaint/filter-sort/${sort}/${isAsc}`
    return this.customHttp.post(filterSort_api, filter)
  }




}

