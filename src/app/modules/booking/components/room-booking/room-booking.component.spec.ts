import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpUserService } from 'src/app/modules/users/services/http-user-service';
import { HttpBookingService } from '../../services/http-booking-service';

import { RoomBookingComponent } from './room-booking.component';

describe('RoomBookingComponent', () => {
  let component: RoomBookingComponent;
  let fixture: ComponentFixture<RoomBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomBookingComponent ],
      imports:[HttpClientModule,FormsModule],
      providers:[{provide:"BookingService",useClass:HttpBookingService},
      {provide:"UserService",useClass:HttpUserService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
