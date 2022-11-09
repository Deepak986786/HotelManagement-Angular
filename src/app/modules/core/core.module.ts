import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './users/users.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
   
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    RoomBookingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
