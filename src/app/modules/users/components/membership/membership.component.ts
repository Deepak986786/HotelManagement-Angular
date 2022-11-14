import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/users/services/user.service';

@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  user?:any;  

  constructor(@Inject("UserService")private userService: UserService, private router:Router) { }  

  updateUserStatus(details:any): void {
    
    if(details)
      this.user=details.user;
    else
      this.user=undefined;

  }

  ngOnInit(): void {
    
      console.log('membership component initialized');
      var details= this.userService.getLoggedInUser();
      if(details)
        this.user=details.user;
      this
        .userService
        .getUserStatusAnnouncement()
<<<<<<< HEAD
        .subscribe(details=>this.updateUserStatus(details))
      console.log("Membership user",this.user);
      
=======
        .subscribe(details=>this.updateUserStatus(details))      
>>>>>>> a9f22bb091d9ef54c827d0cc7ce61e596cefad54
  }


  ngOnDestroy(): void {
   
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

 
  
  async handleLogout(){
    await this.userService.logOut();
  this.router.navigate(['user/login'])
  }

  
}
