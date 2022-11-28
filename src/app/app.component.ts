import { Component } from '@angular/core';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from 'ngx-logger';

/**
 * Application component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * constructor of AppComponent with dependency injection
   * @param logger 
   */
  constructor(private logger: NGXLogger)
  {
    this.logger.info("Application started");
  }
  /**
   * application title
   */
  title = 'HotelManagement-Client';
 
}
