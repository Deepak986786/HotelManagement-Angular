import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UsersModule } from '../users/users.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RoomBookingComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
   GalleryComponent
  ]
})
export class BookingModule { }
