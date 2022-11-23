import { HttpClientModule } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { loggedInDetails } from 'server-data/db-data';
import { HttpUserService } from '../../users/services/http-user-service';
import { UserService } from '../../users/services/user.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,LoggerTestingModule],
      providers:[AuthGuard,{
        provide:"UserService",useClass:HttpUserService
      },
]
    });
    guard = TestBed.inject(AuthGuard);
    
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
