import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from '../../../node_modules/rxjs';
import { BASEURL } from './app.constants';
import { UserInfo } from '../interface/user';
import { Observable } from '../../../node_modules/rxjs';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  getAccessToken() {
    let basicToken = "nxtlifecustomersupport:suvidha";
    const token = localStorage.getItem('access_token')?'Bearer '+localStorage.getItem('access_token'):'Basic ' + btoa(basicToken);
    return new HttpHeaders().set("Authorization",token ).set("isWeb","true");

  }

//check local storage access token for authantication
  isLoggedIn = () => {
    return localStorage.getItem('access_token') ? true : false;
  }



  login(data){
    localStorage.setItem("currentUserName",data.userType);
    localStorage.setItem("name",data.name);
    // set('x-account', loginType)
    let header = this.getAccessToken();
    header = header.append('x-account', data.userType);
    const login_api = `${BASEURL}/oauth/token?grant_type=password&username=${data.name}&password=${data.password}`;
    return this.http.post(login_api, {}, { headers: header })
    
   }



  //get user info after login 
  getUserInfo(){
    let header = this.getAccessToken();
    const userInfo_api = `${BASEURL}/user-info`
    return this.http.get(userInfo_api, { headers: header })
  }



  //store user info in local storage
  storeUserInfo = (userInfo: UserInfo): Observable<any> => {
    return Observable.create((observer) => {
      Object.keys(userInfo).forEach((key, index) => {
        localStorage.setItem(key, userInfo[key]);
      });
      observer.next('success');
      observer.complete();
    });
  }


//delete access token from local storage
  logout(){
return localStorage.clear()
}


  //add engineer
  addEngineer(fd){
    let header = this.getAccessToken();
    const engineer_api = `${BASEURL}/sa/service-engineer`
    return this.http.post(engineer_api, fd, { headers: header })
   
  }


  // get pincodes from server
  getPincodes(){
    let header = this.getAccessToken();
    const pincode_api =`${BASEURL}/sa/pincode-detail`
    return this.http.get(pincode_api,{headers:header})
  }



  // get product category from server
  getProductCategory(){
    let header = this.getAccessToken();
    const productCategory_api =`${BASEURL}/sa/product-category`
    return this.http.get(productCategory_api,{headers:header})
  }



  //get brand id
  getBrandIds(){
    let header = this.getAccessToken();
    const brandIds_api =`${BASEURL}/sa/product-category`
    return this.http.get(brandIds_api,{headers:header})
  }




  //get service engineer details  from server 
  getEngineers(){
    let header = this.getAccessToken();
    const engineer_api = `${BASEURL}/sa/service-engineer`
    return this.http.get(engineer_api,{ headers: header })
   

  }




  //add manager
  addManager(fd){
    let header = this.getAccessToken();
    const manager_api = `${BASEURL}/sa/employee`
    return this.http.post(manager_api, fd, { headers: header })
  }



  //get manager details
  getManager(){
    let header = this.getAccessToken();
    const manager_api = `${BASEURL}/sa/brand-manager/page/1`
    return this.http.get(manager_api,{ headers: header })
  }

  //get complaints details
  getComplaint(i:number){
    let header = this.getAccessToken();
    const complaint_api = `${BASEURL}/m/complaint/page/${i}`
    return this.http.get(complaint_api,{ headers: header })
  }
  

  // get complaints history
  getComplaintsHistory(i){
    let header = this.getAccessToken();
    const complaintHistory_api = `${BASEURL}/m/complaint/${i}/history`
    return this.http.get(complaintHistory_api,{ headers: header })
  }



  //reject complaints put request
  rejectComplaint(fd, complaintId){
    let header = this.getAccessToken();
    const rejectComplaint_api = `${BASEURL}/m/complaint/${complaintId}`
    return this.http.put(rejectComplaint_api, fd, { headers: header })
  }


  //get installe details
  getInstallation(i:number){
    let header = this.getAccessToken();
    const Installation_api = `${BASEURL}/m/installation/page/${i}`
    return this.http.get(Installation_api,{ headers: header })
  }


    // get complaints history
    getInstallationHistory(i){
      let header = this.getAccessToken();
      const InstallationHistory_api = `${BASEURL}/m/installation/${i}/history`
      return this.http.get(InstallationHistory_api,{ headers: header })
    }



    // get service engineer details against complaind id
    getServiceEngAgainstComplaindId(i){
      let header = this.getAccessToken();
      const ServiceEngAgainstComplaindId_api = `${BASEURL}/m/complaint/${i}/service-engineer`
      return this.http.get(ServiceEngAgainstComplaindId_api,{ headers: header }) 
    }
}
