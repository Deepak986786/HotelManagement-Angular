import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService  {

  /**
   * local variable - requests
   */
  private requests:any = {};
  /**
   * @ignore
   */
  constructor() { }
  /**
   * Storing the http response for the requested url
   * @param url 
   * @param response 
   */
  put(url:string, response:HttpResponse<any>):void{
    this.requests[url] = response;
    localStorage.setItem(url,JSON.stringify(response));
  }
  
  /**
   * Retrieve the response 
   * @param url 
   * @returns HttpResponse
   */
  get(url:string):HttpResponse<any>{
    return this.requests[url];    
  }
  
  /**
   * Destroy the cache value from variable
   */
  invalidateCache():void{
    this.requests = { };
  }
  
}
