import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../users/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  token!: string;
    constructor(@Inject("UserService")private userService: UserService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      console.log(request);

      let headers = this.userService.getAuthenticationHeader();
      let modifiedRequest = request.clone({
        setHeaders:{
          ...headers
        }
      })
      
      return next.handle(modifiedRequest);
    }
     
  
    //   if (this.token) {
  
    //     const tokenizedReq = req.clone(
    //         { setHeaders:{...this.token}});
  
    //     return next.handle(tokenizedReq);
  
    //   }
  
    //  // return next.handle(req);
  
    }
