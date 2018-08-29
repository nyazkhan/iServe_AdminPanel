import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';
import { Observable, Subject } from 'rxjs';
import { UserInfo } from '../../interface/user';
import { HttpHeaders } from '@angular/common/http';




@Injectable()
export class LoginService {

  username:Subject<string> = new Subject();
  useremail:Subject<string> = new Subject();
  usercontactno:Subject<string> = new Subject();
  userpicture:Subject<any> = new Subject();

  constructor(private customHttp: CustomHttpService) { }



  isLoggedIn = () => {
    return localStorage.getItem('access_token') ? true : false;
  }




  login(data){

    localStorage.setItem("currentUserName",data.userType);
    localStorage.setItem("name",data.name);
    let header = new HttpHeaders()
          .set('x-account', data.userType);

    const login_api = `/oauth/token?grant_type=password&username=${data.name}&password=${data.password}`;
    return this.customHttp.post(login_api, {}, header )
    
   }


     //get user info after login 
  getUserInfo(){
    // let header = this.getAccessToken();
    const userInfo_api = `/user-info`
    return this.customHttp.get(userInfo_api)
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


updateUsername(updateName:string){
        localStorage.setItem("name", updateName);
  this.username.next(updateName);
}


updateUserEmail(updateEmail:string){
  localStorage.setItem("email", updateEmail);
this.useremail.next(updateEmail);
}


updateUserContactNo(updateContactNo:string){
  localStorage.setItem("contactNo", updateContactNo);
this.usercontactno.next(updateContactNo);
}


updateUserPicture(updatePicture:string){
  localStorage.setItem("picUrl", updatePicture);
this.userpicture.next(updatePicture);
}



// edit brand manager details

editManagerdetails(fd){
  // console.log(JSON.stringify(fd))
    return this.customHttp.put(`/m`,fd)
  }
  
  changePicture(fd){
    return this.customHttp.post(`/m/picture`,fd)
  }
  
  
  changeManagerPassword(fd){
  
    return this.customHttp.put(`/m/password`,fd)
  }
  




}
