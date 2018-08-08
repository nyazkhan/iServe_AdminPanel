import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class Auth1Guard implements CanActivate {
 constructor(private loginservice:LoginService,private router:Router){

 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.loginservice.isLoggedIn()&&(localStorage.getItem("currentUserName")=="management")){

      return true;
      }
      
      else(!this.loginservice.isLoggedIn())
      {
      
      this.router.navigate(['/login']);
      
          return false;
        }
      }
  
}
