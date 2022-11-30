import { Observable } from "rxjs";
import { Booking, BookingDetails } from "../models/booking";

/**
 * Interface with booking related CRUD methods 
 */
export interface BookingService
{
    getAllBookings(): Observable<Booking[]>;

    getBookingById(id: number): Observable<Booking>;

    addBooking(booking: BookingDetails): Observable<Booking>;
   
    cancelBooking(id: number): Observable<void>;
   
    updateBooking(booking:BookingDetails,id:number): Observable<Booking>;
}