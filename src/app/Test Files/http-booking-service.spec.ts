import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { dummybookings, dummybookingsmock } from "server-data/db-data";
import { BookingModule } from "../modules/booking/booking.module";
import { BookingService } from "../modules/booking/services/booking.service"
import { HttpBookingService } from "../modules/booking/services/http-booking-service"
import {HttpErrorResponse} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { HttpUserService } from "../modules/users/services/http-user-service";
import { UserService } from "../modules/users/services/user.service";
import { Booking } from "../modules/booking/models/booking";

const Url='https://localhost:5000/api/bookings';
describe('BookingService',()=>{

   // let bookingService:BookingService;
    let httpTestingController: HttpTestingController;
    let service:BookingService;
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[BookingModule, HttpClientTestingModule],
            providers:[{provide:"BookingService",useClass:HttpBookingService},
        {provide:"UserService",useClass:HttpUserService}]
        });
        httpTestingController = TestBed.get(HttpTestingController);
        service=TestBed.get('BookingService');
    });
    it('return all bookings',()=>{
        service.getAllBookings()
        .subscribe((bookings)=>{
            expect(bookings).toBeTruthy();
            console.log("bookings.length",bookings.length)
            expect(bookings.length).toBe(dummybookings.length);
          // const dummmybooking=dummybookings.find(dummybooking=>dummybooking.id==1);
           
        });
       
        const req=httpTestingController.expectOne(Url);
        expect(req.request.method).toEqual("GET");
        req.flush(dummybookings)
     
            });
            
            it('should find by id',()=>{
                service.getBookingById(dummybookings[0].id)
                .subscribe(booking=>{
                    expect(booking).toBeTruthy();
                    expect(booking.id).toBe(dummybookings[0].id);
        });
        const req=httpTestingController.expectOne(`${Url}/1`);
        expect(req.request.method).toEqual("GET");
        req.flush(dummybookings[0]);
    });

    it('should update details by id',()=>{
        service.updateBooking(dummybookings[0],dummybookings[0].id)
        .subscribe(bookings=>{
            expect(bookings).toBeTruthy();
            console.log(dummybookings.numberOfDaysStay);
            expect(bookings.numberOfDaysStay).toEqual(dummybookingsmock[0].numberOfDaysStay);
        });
        const req=httpTestingController.expectOne(`${Url}/${dummybookingsmock[0].id}`);
        expect(req.request.method).toEqual("PUT");    
        req.flush(dummybookingsmock[0]);
        });
        
        it('should delete a booking by id', () => {
            service.cancelBooking(dummybookings.id)
                   .subscribe(result =>{
                        expect(result).toBeNull();
                });              
            const req = httpTestingController.expectOne(`${Url}/${dummybookings.id}`);        
            expect(req.request.method).toEqual("DELETE");
            req.flush(null);       
        });  
       
    
    it('should add booking',()=>{
        const changes:Partial<Booking>={numberOfDaysStay:7};
        service.addBooking(dummybookings).subscribe(dummybookings=>{
            expect(dummybookings.id).toBe(1);
        });
        const req=httpTestingController.expectOne(`${Url}`);
        expect(req.request.method).toEqual("POST");
    });

    afterEach(() => {
        httpTestingController.verify();
    
    });
    
    
});

