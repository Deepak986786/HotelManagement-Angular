import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Booking, BookingDetails } from "src/app/modules/booking/models/booking";
import { BookingService } from "src/app/modules/booking/services/booking.service";
import { LoggedInDetails, User } from "../../models/user";
import { UserService } from "../../services/user.service";

/**
 * User Profile Component
 */
@Component({
  selector:"user-profile",
  templateUrl:"./user-profile.component.html",
  styleUrls:['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  /**
   * Value of booking
   */
  booking: any;
  /*
  * Constructor for User-profile Component with dependency injection
  */
  constructor(
    @Inject("UserService") private userService: UserService,
    private activatedRoute: ActivatedRoute,
    @Inject("BookingService") private bookingService: BookingService,
    private router: Router
  ) { }

  /**
   * Declaring details variable of type LoggedInDetails
   */
  details?: LoggedInDetails;
  /**
   * user variable of type User
   */
  user?: User;
  /**
   * id variable of type string 
   */
  id: string = '';
  /**
   * search variable with empty string
   */
  search='';
  /**
   * userBookings variable of type Booking[]
   */
  userBookings?:Booking[];

  /**
   * This method is called to initializes the component with logged in user details
   */
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      this.id = params["id"];

    })
    this.userService.getUserByEmail(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user);
      this.userBookings=this.user.userBookings;
    })
  }
  /**
   * visible variable for popup visibility - cancel booking
   */
  visible: boolean = false;
  /**
   * updatevisible variable for popup visibility - edit booking
   */
  updatevisible:boolean=false;
  // This method sets the visibility of cancel pop up to true. 
  showPopup() {
    this.visible = true;
  }
  /**
   * This method sets the visibility of edit pop up to true. 
   */
  edit(){
    this.updatevisible=true;
  }
  /**
   * Value of booking Id
   */
  bookingId:number=1;
  /**
   * This method gets the booking id to cancel and call popup method
   * @param {number} id 
   */
  handleCancel(id: number) {
    this.showPopup();
    console.log("cancel clicked");
    console.log(id);
    this.bookingId =id;

  }

  /**
   * This method gets the booking id to edit and call edit method
   * @param {number} id  
   */
  handleEdit(id: number) {
    this.edit();
    this.bookingId=id;

  }

  /**
   * This method cancel the booking based on the confirmation value passed
   * @param confirmation 
   * 
   */
  handleClick(confirmation: boolean) {
    console.log(confirmation);
    if (!confirmation) {
      this.visible = false;
      return;
    }
    if(confirmation == true){

      this.bookingService.cancelBooking(this.bookingId).subscribe(()=>{

       console.log("booking cancelled")

       this.userService.getUserByEmail(this.id).subscribe(user => {

         this.user = user;

         console.log(this.user);

         this.userBookings=this.user.userBookings;

       })
     }
      )
   }

 }
 /**
  * updateBooking value
  */
 updateBooking:BookingDetails={
   userId:'',
   numberOfDaysStay:1

 }

 /**
  * This method update the booking based on the confirmation value passed
  * @param confirmation 
  */
 updateBookings(confirmation:boolean){
  if(confirmation){
      this.updateBooking.userId = this.user!.email
      this.bookingService.updateBooking(this.updateBooking,this.bookingId).subscribe(x=>{
        console.log("booking updated" , x);
        this.userService.getUserByEmail(this.id).subscribe(user => {
          this.user = user;
          console.log(this.user);
          this.userBookings=this.user.userBookings;
        })
      });
      }
}

}