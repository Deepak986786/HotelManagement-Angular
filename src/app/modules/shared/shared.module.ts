import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
<<<<<<< HEAD
=======
import { SearchPipe } from './pipes/pipes';
>>>>>>> eb978e3e5c9779c0df56e7aab661076e4eda9701



@NgModule({
  declarations: [
  
<<<<<<< HEAD
    PopUpComponent
=======
    PopUpComponent,
    SearchPipe
>>>>>>> eb978e3e5c9779c0df56e7aab661076e4eda9701
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
<<<<<<< HEAD
    PopUpComponent
=======
    PopUpComponent,
    SearchPipe
>>>>>>> eb978e3e5c9779c0df56e7aab661076e4eda9701
  ]
})
export class SharedModule { }
