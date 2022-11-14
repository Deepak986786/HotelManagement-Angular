import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {

  constructor(@Inject("UserService") private userService : UserService,
  private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      console.log("guard activated");

      if(this.userService.getLoggedInUser()){
        return true;
      }else{
        alert("you need to login first");
        this.router.navigate(['/user/login']);

        return false;
      }
      
     // return this.userService.getLoggedInUser() != undefined
     
      //return true;
  }
  
}
