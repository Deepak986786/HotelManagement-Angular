import { HttpClientModule } from '@angular/common/http';
import { getTestBed, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { loggedInDetails } from 'server-data/db-data';
import { HttpUserService } from '../../users/services/http-user-service';
import { UserService } from '../../users/services/user.service';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let injector:TestBed;
  let authService:HttpUserService;
  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/booking'};
  let routerMock = {navigate: jasmine.createSpy('navigate')}

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[AuthGuard,{
        provide:"UserService",useClass:HttpUserService
      },
    {
      provide:Router, useValue:routeMock
    }]
    });
    //guard = TestBed.inject(AuthGuard);
    injector = getTestBed();
    authService = injector.get(HttpUserService);
    guard = injector.get(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should redirect an unauthenticated user to the login route', () => {
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(false);
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow the authenticated user to access app', () => {
    spyOn(authService, 'getLoggedInUser').and.returnValue(loggedInDetails);
    expect(guard.canActivate(routeMock, routeStateMock)).toEqual(true);
  });
});
