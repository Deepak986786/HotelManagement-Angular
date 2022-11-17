import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpBookingService } from 'src/app/modules/booking/services/http-booking-service';
import { HttpUserService } from '../modules/users/services/http-user-service';
import { UserService } from '../modules/users/services/user.service';

import { UserProfileComponent } from '../modules/users/components/user-profile/user-profile.component';
import { dummybookings } from 'server-data/db-data';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let bookingService:any;


  beforeEach( async() => {
     await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports:[HttpClientModule,
        RouterModule,
      AppRoutingModule,
    FormsModule],
        providers:[
          {provide:"UserService",useClass:HttpUserService },
        {provide:"BookingService",useClass:HttpBookingService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should get particular user',()=>{
  //   userService.getUserByEmail("amirtha@gmail.com").subscribe((User)=>{
  //     expect(User).toBeTruthy();
  //     expect(User.email).toBe("amirtha@gmail.com");
  //   });
  // })

// it ('should display only filtered dates',()=>{
//   bookingService.find
// })

it('should correctly pass input user values', () => {
  component.userBookings = dummybookings[0];
  fixture.detectChanges();
  const compiled = fixture.debugElement.nativeElement;
  expect(compiled.querySelector('h3').textContent).toEqual("My Bookings ");
  

});

it('should verifies password',()=>{
  
})

});
