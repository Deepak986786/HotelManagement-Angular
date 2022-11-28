import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { catchError, map, Observable, of, Subject, tap, throwError } from "rxjs";
import { LoggedInDetails, LoginInfo, User } from "../models/user";
import { UserService } from "./user.service";

/**
 * API url for users
 */
const baseUrl='https://localhost:5000/api/users';

/**
 * This class implements the User Service methods
 */
@Injectable()
export class HttpUserService implements UserService{

    /**
     * Declaration of loggedInUserAnnouncement
     */
    loggedInUserAnnouncement = new Subject<LoggedInDetails|undefined>();
    /**
     * Declaration of loggedInUser details
     */
    loggedInUser?:LoggedInDetails;
    /**
     * 
     * The constructor with dependency injection and get the user details from local storage 
     *
     */
    constructor(private http:HttpClient, private logger:NGXLogger){
        if(!this.loggedInUser)
        {
            var jsonString = localStorage.getItem("user");
            if(jsonString)
            {
                var user = JSON.parse(jsonString);
                this.updateCurrentUser(user);
            }
        }
    }

    /**
     * This method sends http get request to the server
     * @param{string} email 
     * @returns Observable of user
     */
    getUserByEmail(email: string): Observable<User> {
        this.logger.trace('Entering into getUserByEmail method of user service');
        return this.http.get<User>(baseUrl+'/'+email);
    }

    /**
     * This method
     * @returns logged in user details if logged in otherwise nothing.
     */
    getLoggedInUser(): LoggedInDetails|undefined {
        this.logger.trace('Entering into getLoggedInUser method of user service');
        return this.loggedInUser;
    }

     /**
     * This method sends the http get request to get all users
     * @returns all users
     */
    getAllUsers(): Observable<User[]> {
        this.logger.trace('Entering into getAllUsers method of user service');
        return this
                    .http
                    .get<User[]>(baseUrl);
    }
   
   
    /**
     * This method checks the user login status and send token as a request header
     * 
     * @returns Authorization token coming from server
     */
    getAuthenticationHeader()
    {
        if(!this.loggedInUser)
            return {};
        else
            return{
                Authorization:`BEARER ${this.loggedInUser.token}`
            }
    }

    /**
     * This method update the details of user in local storage based on login status
     * @param user 
     */
    updateCurrentUser(user?:LoggedInDetails){
        this.logger.trace('Entering into updateCurrentUser method of user service');
        this.loggedInUser=user;
        this.loggedInUserAnnouncement.next(user);
        if(this.loggedInUser)
            localStorage.setItem("user", JSON.stringify(this.loggedInUser));
        else    
            localStorage.removeItem("user");
    }

    /**
     * This method sends http post request to the server with login Info taken from client
     * and updates the current user status 
     * @param loginInfo 
     * @returns Observable of LoggedInDetails 
     */
    login(loginInfo: LoginInfo): Observable<LoggedInDetails> {
        return this
                    .http
                    .post<LoggedInDetails>(`${baseUrl}/login`,loginInfo)
                    .pipe(
                        tap( (info:LoggedInDetails)=>{
                            console.log('user info received on login:',info);
                            this.logger.trace('Inside login method of user service');
                            this.updateCurrentUser(info);
                        })
                    );


    }

    /**
     * This method sends the http post request with the entered details along with headers information
     * @param user 
     * @returns Observable of user
     */
    register(user: User):  Observable<User> {
        this.logger.trace('Entering into register method of user service');
        return this.http.post<User>(baseUrl , user,{headers:{
            "content-type":"application/json"
        }});
    }

    /**
     * This helper method checks the http error response and throws error
     * @param error 
     * @returns observable
     */
    _handleError(error:HttpErrorResponse){
        if(error.status === 404){
            return of(false);  //return false as an observable result
        } else{
            return throwError(()=> error); //else let the error go
        }
    }

    /**
     * This method sends the http get request to the server to validate email
     * @param email 
     * @returns 
     */
    isEmailRegistered(email: string): Observable<boolean> {

        return this
                    .http
                    .get(`${baseUrl}/validate/${email}`)
                    .pipe(
                        map(response=>true), //incase of no error
                        catchError(this._handleError) //in case of error
                    );
       
    }
    /**
     * This method returns the logged in user announcemnet details
     * @returns Logged in details if user logged in or nothing
     */
    getUserStatusAnnouncement(): Subject<LoggedInDetails | undefined> {
    this.logger.trace('Entering into getUserStatusAnnouncement method of user service');
    return this.loggedInUserAnnouncement;
    }

    /**
     * This method updates the user status as undefined 
     * @returns observable of void
     */
    logOut():Observable<void> {
        this.logger.trace('Entering into logOut method of user service');
        this.updateCurrentUser();
        return of(undefined);
    }
    
}