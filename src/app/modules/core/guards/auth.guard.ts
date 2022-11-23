import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../users/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( @Inject("UserService")private userService:UserService,
     private router:Router,
    )
  {

  }
  /**
   * Activate allows the guard to decide if a way can be activated with the “CanActivate ()” method or not.
   * @param route canActivate to “create” and “edit” routes
   * @param state 
   * @returns 
   */
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

  
  }
  

}
