import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
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
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { RoomBookingComponent } from './modules/booking/components/room-booking.component';
import { MembershipComponent } from './modules/shared/components/membership/membership.component';
import { HttpUserService } from './modules/users/services/http-user-service';
import { UsersModule } from './modules/users/users.module';
import { CompareDirective } from './modules/shared/directives/compare.directive';

@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent,
    CompareDirective,
         ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule
  ],
  providers: [
    //{provide:"UserService",useClass:HttpUserService}
  ],
  bootstrap: [AppComponent]
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
})
export class AppModule { }

