import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PopUpComponent } from './pop-up.component';

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

  it('should close when cancel is clicked',()=>{
    component.handleCancel();
    expect(component.visible).toBeFalse();
    fixture.detectChanges();
  });
  
  it('should display popup when button clicked', fakeAsync(()=>{
    spyOn(component,'done');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.done).toHaveBeenCalled();
  }));
});
