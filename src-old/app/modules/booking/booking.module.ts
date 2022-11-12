import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { GalleryComponent } from './components/gallery/gallery.component';



@NgModule({
  declarations: [
    RoomBookingComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GalleryComponent
  ]
})
export class BookingModule { }
