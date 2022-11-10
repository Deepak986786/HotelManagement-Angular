import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from '../users/components/membership/membership.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MembershipComponent
  ]
})
export class SharedModule { }
