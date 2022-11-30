import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/services/user.service';

/**
 * Membership component
 */
@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  /**
   * user variable declaration
   */
  user?:any;  
  /**
   * constructor with dependency injection
   * @param userService 
   * @param router 
   */
  constructor(@Inject("UserService")private userService: UserService, private router:Router) { }  
  /**
   * This is helper method sets the logged-in user
   * @param details 
   */
  updateUserStatus(details:any): void {
    
    if(details)
      this.user=details.user;
    else
      this.user=undefined;

  }
  /**
   * This method intializes the membership component
   */
  ngOnInit(): void {
      
      console.log('membership component initialized');
      var details= this.userService.getLoggedInUser();
      if(details)
        this.user=details.user;
      this
        .userService
        .getUserStatusAnnouncement()
        .subscribe(details=>this.updateUserStatus(details))      
      
  }

  /**
   * This method unsubscribe the getUserStatusAnnouncement
   */
  ngOnDestroy(): void {
   
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

 
  /**
   * This method handle logOut method and navigate to the login page
   */
  async handleLogout(){
    await this.userService.logOut();
    this.router.navigate(['user/login'])
  }

  
}
