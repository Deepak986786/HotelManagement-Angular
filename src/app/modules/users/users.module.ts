import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpUserService } from './services/http-user-service';
import { CompareDirective } from '../shared/directives/compare.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    //CompareDirective
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
   // CompareDirective

  ]
})
export class UsersModule { }
