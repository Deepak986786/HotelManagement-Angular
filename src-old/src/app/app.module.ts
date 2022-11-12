import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/core/components/footer/footer.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { HomeComponent } from './modules/core/components/home/home.component';

//import { RoomBookingComponent } from './modules/booking/components/room-booking.component';

import { HttpUserService } from './modules/users/services/http-user-service';
import { UsersModule } from './modules/users/users.module';

import { SharedModule } from './modules/shared/shared.module';
import { BookingModule } from './modules/booking/booking.module';
import { CoreModule } from './modules/core/core.module';
import { HttpBookingService } from './modules/booking/services/http-booking-service';


@NgModule({
  declarations: [
    AppComponent,

         ],
         
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    {provide:"UserService",useClass:HttpUserService},
    {provide:"BookingService",useClass:HttpBookingService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
