import { Component, Inject, OnInit } from '@angular/core';
<<<<<<< HEAD

import { UserService } from 'src/app/modules/users/services/user.service';



=======
import { UserService } from 'src/app/modules/users/services/user.service';

>>>>>>> a2912149843e02f3d23cc468a66484fca147c5ea
@Component({
  selector: 'membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
<<<<<<< HEAD

})

export class MembershipComponent implements OnInit {



  user?:any;

  



  constructor(@Inject("UserService")private userService: UserService) { }

  



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

      .subscribe(details=>this.updateUserStatus(details))    

}

  ngOnDestroy(): void {

  this.userService.getUserStatusAnnouncement().unsubscribe();

  }
  async handleLogout(){

  await this.userService.logOut();

  }
}
=======
})
export class MembershipComponent implements OnInit {

  user?:any;  

  constructor(@Inject("UserService")private userService: UserService) { }  

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
        .subscribe(details=>this.updateUserStatus(details))

      
  }


  ngOnDestroy(): void {
   
    this.userService.getUserStatusAnnouncement().unsubscribe();
  }

 
  
  async handleLogout(){
    await this.userService.logOut();
  }

  
}
>>>>>>> a2912149843e02f3d23cc468a66484fca147c5ea
