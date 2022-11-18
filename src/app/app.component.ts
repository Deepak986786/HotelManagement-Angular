import { Component } from '@angular/core';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logger: NGXLogger)
  {
    this.logger.info("Application started");
  }
  title = 'HotelManagement-Client';
 
}
