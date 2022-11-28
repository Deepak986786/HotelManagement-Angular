import { Component, OnInit } from '@angular/core';
import { LoggerModule, NGXLogger } from 'ngx-logger';

/**
 * HomeComponent
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * Constructor with logger dependency injection
   * @param logger 
   */
  constructor(private logger:NGXLogger) { 
    this.logger.info("Home component created")
  }

  ngOnInit(): void {
 
  }

}
