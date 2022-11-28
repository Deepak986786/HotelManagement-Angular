/**
 * 
 * Booking Details interface with necessary fields
 */
export interface BookingDetails{
    /**
     * userId property of type string
     */
    userId:string;
    /**
     * numberOfDaysStay property of type number 
     */
    numberOfDaysStay:number;
}
/**
 * Booking interface with necessary fields
 */
export interface Booking{
    /**
     * id property of type number 
     */
    id: number;
    /**
     * room No property of type string
     */
    roomNo?:string;
    /**
     * price property of type string
     */
    price:string;
    /**
     * bookingDate property of type string
     */
    bookingDate:string;
    /**
     * numberOfDaysStay property of type number 
     */
    numberOfDaysStay:number;
    /**
     * userId property of type string
     */
    userId:string;
}