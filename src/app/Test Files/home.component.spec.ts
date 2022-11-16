import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../modules/core/components/footer/footer.component';
import { HeaderComponent } from '../modules/core/components/header/header.component';

import { HomeComponent } from '../modules/core/components/home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el:DebugElement;
  let userService:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain header,footer',()=>{
    expect(HeaderComponent).toBeTruthy();
    expect(FooterComponent).toBeTruthy();
  })
});
