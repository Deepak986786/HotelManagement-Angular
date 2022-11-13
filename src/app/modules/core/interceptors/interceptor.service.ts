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
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
      this.token = this.userService.getAuthenticationHeader();
  
      if (this.token) {
  
        const tokenizedReq = req.clone(
            { headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
  
        return next.handle(tokenizedReq);
  
      }
  
      return next.handle(req);
  
    }
}
