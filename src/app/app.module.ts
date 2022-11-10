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
import { GalleryComponent } from './modules/booking/components/gallery/gallery.component';

import { SharedModule } from './modules/shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    
    GalleryComponent,

   
    HeaderComponent

    //CompareDirective,

         ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    UsersModule,
    SharedModule
  ],
  providers: [
    {provide:"UserService",useClass:HttpUserService}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
