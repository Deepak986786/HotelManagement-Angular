import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { from, map, Observable, tap } from "rxjs";
import { UserService } from "../../users/services/user.service";
import { Booking, BookingDetails } from "../models/booking";
import { BookingService } from "./booking.service";

/**
 * API url for bookings
 */
const url = "https://localhost:5000/api/bookings";

/**
 * HttpBookingService class registered as a service 
 */
@Injectable({
    providedIn:"root"    
})
export class HttpBookingService implements BookingService {
    /**
     * Constructor with dependency injection
     * @param http 
     * @param logger 
     * @param userService 
     */
    constructor(
        private http: HttpClient, private logger:NGXLogger,
        @Inject("UserService") private userService: UserService,
    ){  }
   
    /**
     * This method sends the http get request to the api server 
     * @returns Observable of list of bookings
     */
    getAllBookings(): Observable<Booking[]> {
       this.logger.info('Entering into getAllBookings method of booking service');
        return this.http.get<Booking[]>(url);
    }
    
    /**
     * This method sends the http get request for particular id passed
     * @param id 
     * @returns booking observable
     */
    getBookingById(id: number): Observable<Booking> {
        this.logger.info('Entering into getBookingById method of booking service');
        return this
                    .http
                    .get<Booking>(`${url}/${id}`);
    }

    

    /**
     * This method sends the http post request to server to add booking details
     * @param booking 
     * @returns Observable of booking
     */
    addBooking(booking: BookingDetails): Observable<Booking> {
        this.logger.info('Entering into addBooking method of booking service');
        return this
        .http
        .post<Booking>(url,booking);
    }

    /**
     * This method sends http delete request to api server
     * @param id 
     * @returns nothing
     */
    cancelBooking(id: number): Observable<void> {
        this.logger.info('Entering into cancelBooking method of booking service');
        return this
        .http
        .delete<void>(`${url}/${id}`);
    }

    /**
     * This method sends the http put request to api server for updating booking details
     * @param booking 
     * @param bookingId 
     * @returns Observable of booking
     */
    updateBooking(booking: BookingDetails , bookingId:number): Observable<Booking> {
        this.logger.info('Entering into updateBooking method of booking service');
        return this
        .http
        .put<Booking>(`${url}/${bookingId}`,booking);
    }

}