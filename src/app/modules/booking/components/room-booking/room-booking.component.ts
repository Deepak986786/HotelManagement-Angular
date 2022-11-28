import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

import { UserService } from 'src/app/modules/users/services/user.service';
import { BookingDetails } from '../../models/booking';
import { BookingService } from '../../services/booking.service';

/**
 * The Room booking component
 */
@Component({
  selector: 'room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css'],
})
export class RoomBookingComponent implements OnInit, OnDestroy {
  /**
   * Declaring user
   */
  user?: any;
  /**
   * Declaring booking of type BookingDetails
   */
  booking: BookingDetails = {
    userId: '',
    numberOfDaysStay: 1,
  };
  /**
   * Constructor with dependency injection of below parameters
   * @param userService This is userService instance paramater
   * @param bookingService This is bookingService instance paramater
   * @param router This is router instance paramater
   * @param fb This is form builder instance paramater
   * @param logger This is the logger instance paramater 
   */
  constructor(
    @Inject('UserService') private userService: UserService,
    @Inject('BookingService') private bookingService: BookingService,
    private router: Router,
    private fb: FormBuilder,
    private logger:NGXLogger
  ) {
    
  }

  /**
   * Updates the user details
   * @param details 
   */
  updateUserStatus(details: any): void {
    if (details) this.user = details.user;
    else this.user = undefined;
  }
  /**
   * Declaring subscription variable
   */
  subsciption: any;

  /**
   * Initializing the component with logged in user details
   */
  ngOnInit(): void {
    console.log('getting logged in user details');
    var details = this.userService.getLoggedInUser();
    if (details) this.user = details.user;
    this.subsciption = this.userService
      .getUserStatusAnnouncement()
      .subscribe((details) => this.updateUserStatus(details));
  }
  /**
   *  Unsubscribe the subscription
   */
  ngOnDestroy(): void {
    this.subsciption.unsubscribe();
  }

  /**
   * This method adds booking of a room and redirecting to user profile page
   */
  bookRoom() {
    this.logger.info("Entering into bookRoom method");
    console.log(this.booking);
    this.booking.userId = this.user.email;
    this.bookingService
      .addBooking(this.booking)
      .subscribe((x) => console.log(x));
    this.logger.trace("Booking completed and user redirected to my bookings page");  
    this.router.navigate(['user/profile',this.user.email]);
  }

}
