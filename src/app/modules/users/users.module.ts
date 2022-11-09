import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
<<<<<<< HEAD
<<<<<<< HEAD

//import { RoomBookingComponent } from './components/room-booking/room-booking.component';

=======
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
=======
//import { RoomBookingComponent } from './components/room-booking/room-booking.component';
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
import { LoginComponent } from './components/login/login.component';

import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpUserService } from './services/http-user-service';
import { CompareDirective } from '../shared/directives/compare.directive';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { HttpUserService } from './services/http-user-service';

@NgModule({

  declarations: [
<<<<<<< HEAD
<<<<<<< HEAD

    LoginComponent,
    RegisterComponent,

=======
    LoginComponent,
    RegisterComponent,
    CompareDirective
 
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
=======
    LoginComponent,
    RegisterComponent,
    CompareDirective
 
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
  ],

  imports: [
<<<<<<< HEAD
<<<<<<< HEAD

    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],

  exports:[

    LoginComponent,
   RegisterComponent,
=======
=======
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    CompareDirective
<<<<<<< HEAD
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42
=======
>>>>>>> c2bfde499fc95ffe6af4a31956e3561060226c42

  ]

})

export class UsersModule { }


