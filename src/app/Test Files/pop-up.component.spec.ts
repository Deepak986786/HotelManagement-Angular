import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PopUpComponent } from '../modules/shared/components/pop-up/pop-up.component';

describe('PopUpComponent', () => {
  let component: PopUpComponent;
  let fixture: ComponentFixture<PopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should not display the modal unless the button is clicked', () => {
  //     expect(element.innerHTML).not.toContain("source-modal");
  //    expect(component.showModal).toBeFalsy("Show modal should be initially false");
  // })

  it('should display popup when button clicked',fakeAsync(()=>{
    spyOn(component,'visibleChange');
    let button=fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.done).toHaveBeenCalled();
  }));

  it('should display popup when button clicked',fakeAsync(()=>{
    spyOn(component,'done');
    let button=fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.done).toHaveBeenCalled();
  }));

  

});
