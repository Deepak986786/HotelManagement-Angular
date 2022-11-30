import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';
import { Observable } from 'rxjs';
import { LoggedInDetails, LoginInfo, User } from '../../models/user';
import { UserService } from '../../services/user.service';

/**
 * Login component
 */
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  /*
  * Constructor for Login Component used to inject dependencies 
  */
  constructor(
    @Inject("UserService") private userService: UserService, private router: Router, private logger:NGXLogger
  ) { }
  /**
   * Declaration of login info of type LoginInfo 
   */
  loginInfo:LoginInfo={
    email: '',
    password:''
  };  
  /**
   * Declaring loggedInUser of type User 
   */
  loggedInUser?:User;
  /**
   * Declaring status of type string
   */
  status?:string;
  /**
   * Declaring statusStyle of type string
   */
  statusStyle?:string;
  /**
   * This method calls the login method of user service and subscribes to the update
   */
   handleLogin(){
        (<Observable<LoggedInDetails>>(this.userService
        .login(this.loginInfo)))
        .subscribe({
          next: (info:LoggedInDetails)=>{ 
            console.log(info);
            const user=info.user;
            console.log('user',user);
            this.status=`Welcome ${user.name}`;
            this.statusStyle='text-success';
            this.router.navigate(['home']);
          },
          error: (error:any)=>{
            this.logger.error('Error in login details, user trying to login with invalid credentials');
            this.status=`Error: ${error.status}`;
            this.statusStyle='text-danger';
          }
        });

        this.status='please wait...';
        this.statusStyle='text-primary';


  }
  /**
   * @ignore
   */
  ngOnInit(): void {
   
  }

}



