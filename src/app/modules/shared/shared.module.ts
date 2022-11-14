import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';



@NgModule({
  declarations: [
  
    PopUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    PopUpComponent
  ]
})
export class SharedModule { }
