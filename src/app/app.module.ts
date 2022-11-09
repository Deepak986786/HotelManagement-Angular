import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RoomBookingComponent } from './modules/booking/components/room-booking.component';
import { MembershipComponent } from './modules/shared/components/membership/membership.component';
import { UsersModule } from './modules/users/users.module';

@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
         ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [
    //{provide:"UserService",useClass:HttpUserService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

