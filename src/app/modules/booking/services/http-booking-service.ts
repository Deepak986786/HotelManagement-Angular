import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { from, map, Observable, tap } from "rxjs";
import { UserService } from "../../users/services/user.service";
import { Booking, BookingDetails } from "../models/booking";
import { BookingService } from "./booking.service";

const url = "https://localhost:7066/api/bookings";

@Injectable({
    providedIn:"root"    
})
export class HttpBookingService implements BookingService {
    constructor(
        private http: HttpClient,
        @Inject("UserService") private userService: UserService,
    ){  }
   
    
   


    
    getAllBookings(): Observable<Booking[]> {
       
        return this.http.get<Booking[]>(url);
    }
    
    getBookingById(id: number): Observable<Booking> {
        return this
                    .http
                    .get<Booking>(`${url}/${id}`);
    }

    get options(){
        return {
            headers: this.userService.getAuthenticationHeader()
        }
    }

    addBooking(booking: BookingDetails): Observable<Booking> {
        return this
        .http
        .post<Booking>(url,booking);
    }
    cancelBooking(id: number): Observable<void> {
        return this
        .http
        .delete<void>(`${url}/${id}`);
    }
    updateBooking(booking: BookingDetails , bookingId:number): Observable<Booking> {
        return this
        .http
        .put<Booking>(`${url}/${bookingId}`,booking);
    }

}