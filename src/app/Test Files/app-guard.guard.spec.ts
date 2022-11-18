import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppGuardGuard } from '../modules/guards/app-guard.guard';
import { HttpUserService } from '../modules/users/services/http-user-service';

describe('AppGuardGuard', () => {
  let guard: AppGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[{
        provide:"UserService",useClass:HttpUserService
      }]
    });

    guard = TestBed.inject(AppGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
