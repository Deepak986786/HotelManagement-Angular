// import { HttpClient } from "@angular/common/http";
// import { Inject, Injectable } from "@angular/core";
// import { from, map, Observable, tap } from "rxjs";
// import { UserService } from "../../users/services/user.service";
// import { Booking } from "../models/booking";
// import { BookingService } from "./booking.service";
// const url = "http://localhost:5000/api/bookings";

// @Injectable({
//     providedIn:"root"    
// })
// export class HttpBookingService implements BookingService {
//     constructor(
//         private http: HttpClient,
//         @Inject("UserService") private userService: UserService,
//     ){  }
   
    
   

//     async _getAllBookingsPromise(){
//         var response = await fetch(url);
//         return await response.json();
//     }

    
//     getAllBookings(): Observable<Booking[]> {
//         return from(this._getAllBookingsPromise())   
//             .pipe(
//                 tap((x: any) => console.log('json', x)),
//                 map((bookings: Booking[]) => bookings.map((b: any) => ({ ...b, user: b.user.email }))),
              
//             );
//     }
    
//     getBookingById(id: number): Observable<Booking> {
//         return this
//                     .http
//                     .get<Booking>(`${url}/${id}`);
//     }

//     get options(){
//         return {
//             headers: this.userService.getAuthenticationHeader()
//         }
//     }

//     addBooking(booking: Booking): Observable<Booking> {
//         return this
//         .http
//         .post<Booking>(url,booking, this.options );
//     }
//     cancelBooking(id: number): Observable<void> {
//         return this
//         .http
//         .delete<void>(`${url}/${id}`,this.options);
//     }
//     updateBooking(booking: Booking , bookingId:number): Observable<Booking> {
//         return this
//         .http
//         .put<Booking>(`${url}/${bookingId}`,booking,this.options);
//     }

// }