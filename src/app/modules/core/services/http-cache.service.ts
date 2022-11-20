import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService  {

  private requests:any = {};
  constructor() { }
  // Storing the http response for the requested url
  put(url:string, response:HttpResponse<any>):void{
    this.requests[url] = response;
  
  }
  // Retrieve the response 
  get(url:string):HttpResponse<any>{
    return this.requests[url];    
  }
  // Destroy the cache value from variable
  invalidateCache():void{
    this.requests = { };
  }
  
}
