import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../users/services/user.service';

/**
 * Interceptor Service 
 */
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {
    /**
     * constructor of InterceptorService for dependency injection
     * @param userService 
     */
    constructor(@Inject("UserService")private userService: UserService) { }
    /**
     * Implementing intercept method with two arguments the HTTP request and the HTTP handler
     * @param request sends the HTTP request to the server
     * @param next 
     * @returns modified request
     */
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
    }
