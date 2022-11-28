import { Observable } from "rxjs";
import { Booking, BookingDetails } from "../models/booking";

/**
 * Interface with booking related CRUD methods 
 */
export interface BookingService
{
    /**
     * getAllBookings method declaration with return type of Booking[] Observable 
     */
    getAllBookings(): Observable<Booking[]>;

    /**
     * getBookingById method 
     * @param {number} id 
     */

    getBookingById(id: number): Observable<Booking>;

    /**
     * addBooking method
     * @param {BookingDetails} booking 
     */
    addBooking(booking: BookingDetails): Observable<Booking>;

    /**
     * cancelBooking method
     * @param {number} id 
     */
    cancelBooking(id: number): Observable<void>;
    /**
     * 
     * @param {BookingDetails} booking 
     * @param {number} id 
     */
    updateBooking(booking:BookingDetails,id:number): Observable<Booking>;
}