import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { elementAt } from 'rxjs';
import { LoginComponent } from '../modules/users/components/login/login.component';
import { HttpUserService } from '../modules/users/services/http-user-service';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
 let el:DebugElement;
 let userService:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[HttpClientModule, FormsModule, RouterModule],
      providers:[{
        provide:"UserService",useValue:HttpUserService
      }]
     
    })
    .compileComponents();

  fixture = TestBed.createComponent(LoginComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
  //   userService=TestBed.get('UserService');
  //  const de = fixture.debugElement.query(By.css('.new-test-order-icd10-code-selection-modal.component'));
  //   const element=de.nativeElement
  //   el=fixture.nativeElement.querySelector('.welcome');
  });
 

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });
// it('should welcome the user',()=>{
//     fixture.detectChanges();
//     const content=el.textContent;
//     expect(content).withContext('"Welcome..."').toContain('Welcome');
//     expect(content).withContext('expected name')
//     .toContain('amirtha');
// })


 
});