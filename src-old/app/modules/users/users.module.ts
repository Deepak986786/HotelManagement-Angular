import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpUserService } from './services/http-user-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    //CompareDirective
=======
  
>>>>>>> 152a29f077f25d9b649e553a576a5aa65c1700a4
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
   // CompareDirective
=======

>>>>>>> 152a29f077f25d9b649e553a576a5aa65c1700a4

  ]
})
export class UsersModule { }
