import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HttpCacheService } from '../services/http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService:HttpCacheService){}
  // check each request from browser
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(req.method !== 'GET')
    {
      console.log(`Invalidating cache : ${req.method} ${req.url}`);
      this.cacheService.invalidateCache();
      return next.handle(req);
    }
    // Retrieving cached response for the request url
    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);
    // If cache has response then take cached response 
    if(cachedResponse)
    {
      console.log(`Returning from cache : ${cachedResponse.url}`);
      console.log(cachedResponse);
      return of(cachedResponse);
    }
    // send request to the server and save the response in cache
    return next.handle(req)
      .pipe(
        tap(result =>{
          if(result instanceof HttpResponse)
          {
            console.log(`Adding response to cache: ${req.url}`);
            this.cacheService.put(req.url, result);
          }
        })
      );
    
  }

     
}
