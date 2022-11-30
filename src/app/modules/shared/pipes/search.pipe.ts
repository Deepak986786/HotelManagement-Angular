import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../../booking/models/booking';

/**
 * Search pipe
 */
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  /**
   * transform method 
   * @param bookings 
   * @param search 
   * @param args 
   * @returns Booking array
   */
  transform(bookings: Booking[]|undefined,search:string, ...args: unknown[]): Booking[] {
    return bookings!.filter(booking=>booking.bookingDate.includes(search));
  }

}
