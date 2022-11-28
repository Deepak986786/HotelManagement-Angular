import { Component, Input, OnInit } from '@angular/core';

/**
 * Header component
 */
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /**
   * title input property
   */
  @Input() title:string='HotelManagement-Client';
  
  constructor() { }

  ngOnInit(): void {
  }

}
