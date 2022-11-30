import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * popup component
 */
@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Input properties for title, confirmText, cancelText, preventDefault
   */
  @Input() title:string="pop-up title";
  @Input() confirmText:string="pop-up confirm text";
  @Input() cancelText:string="pop-up cancel text";
  @Input() preventDefault:boolean=false;

  /**
   * Input and output property variable for visible and visibleChange 
   */
  @Input() visible:boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  /**
   * output property for done
   */
  @Output() done=new EventEmitter<boolean>();
  
  /**
   * handleDone method for handling pop up comment visibility
   * @param response 
   */
  handleDone(response:boolean){
    this.done.emit(response);
    if(!this.preventDefault){
      this.visible=false;
      this.visibleChange.emit(false);
    }
  }

  /**
   * This method sends true value for the handleDone method
   */
  handleConfirm(){
    this.handleDone(true);
  }

  /**
   * This method sends false value for the handleDone method
   */
  handleCancel(){
    this.handleDone(false);
  }

}
