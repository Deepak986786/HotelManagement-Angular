import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UsersModule } from '../users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RoomBookingComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
   GalleryComponent
  ]
})
export class BookingModule { }
