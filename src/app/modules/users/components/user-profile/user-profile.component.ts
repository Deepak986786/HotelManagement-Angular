import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggedInDetails, User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
    @Inject("UserService") private userService: UserService ,
    private activatedRoute: ActivatedRoute,
  ) { }

   details?:LoggedInDetails;
   user?:User;
   id='';

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      this.id =params["id"];
    })

     this.details=this.userService.getLoggedInUser();
     this.user = this.details?.user;

     console.log(this.user);
     

  }

}
