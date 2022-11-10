import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './modules/booking/components/gallery/gallery.component';
import { RoomBookingComponent } from './modules/booking/components/room-booking/room-booking.component';





import { HomeComponent } from './modules/core/components/home/home.component';
import { LoginComponent } from './modules/users/components/login/login.component';
import { RegisterComponent } from './modules/users/components/register/register.component';

const routes: Routes = [
  {path:"user/register",component:RegisterComponent},
  {path:"user/login",component:LoginComponent},
  {path:"",component:HomeComponent},
  {path:"booking/gallery",component:GalleryComponent},

  {path:'home',component:HomeComponent},
  //{path:'booking',component:RoomBookingComponent}

 
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
