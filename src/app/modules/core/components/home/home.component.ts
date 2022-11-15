import { Component, OnInit } from '@angular/core';
import { LoggerModule } from 'ngx-logger';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logger:LoggerModule) { }

  ngOnInit(): void {
 
  }

}
