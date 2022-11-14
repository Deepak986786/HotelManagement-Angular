import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpBookingService } from 'src/app/modules/booking/services/http-booking-service';
import { HttpUserService } from '../../services/http-user-service';
import { UserService } from '../../services/user.service';

import { UserProfileComponent } from './user-profile.component';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let userService: UserService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports:[HttpClientModule,
        RouterModule,
      AppRoutingModule,
    FormsModule],
        providers:[
          {provide:"UserService",useClass:HttpUserService , multi:true},
        {provide:"BookingService",useClass:HttpBookingService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  userService =TestBed.get(UserService);

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get particular user',()=>{
    userService.getUserByEmail("amirtha@gmail.com").subscribe((User)=>{
      expect(User).toBeTruthy();
      expect(User.email).toBe("amirtha@gmail.com");
    });
  });
});
