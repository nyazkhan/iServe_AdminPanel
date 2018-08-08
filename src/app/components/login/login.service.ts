import { Injectable } from '@angular/core';
import { CustomHttpService } from '../../providers/custom-http.service';
import { Observable } from '../../../../node_modules/rxjs';
import { UserInfo } from '../../interface/user';
import { HttpHeaders } from '../../../../node_modules/@angular/common/http';




@Injectable()
export class LoginService {

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

}
