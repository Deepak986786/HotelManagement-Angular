import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() title:string="pop-up title";
  @Input() confirmText:string="pop-up confirm text";
  @Input() cancelText:string="pop-up cancel text";
  @Input() preventDefault:boolean=false;


  @Input() visible:boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>;

  @Output() done=new EventEmitter<boolean>();
  
  handleDone(response:boolean){
    this.done.emit(response);
    if(!this.preventDefault){
      this.visible=false;
      this.visibleChange.emit(false);
    }
  }

  handleConfirm(){
    this.handleDone(true);
  }

  handleCancel(){
    this.handleDone(false);
  }

}
