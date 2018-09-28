import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../components/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthDashboardGuard implements CanActivate {
 constructor(private loginservice : LoginService, private router: Router){

 }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
if(this.loginservice.isLoggedIn()){

return true;
}

else
{

this.router.navigate(['/login']);

    return false;
  }
}
}
