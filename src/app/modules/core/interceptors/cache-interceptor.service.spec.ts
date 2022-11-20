import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { LoggerTestingModule } from 'ngx-logger/testing';
import { HttpUserService } from '../../users/services/http-user-service';

// describe('CacheInterceptorService', () => {
//   let service: CacheInterceptorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//         providers:[{provide:"UserService",useClass:HttpUserService},
//         {provide:"BookingService",useClass:HttpBookingService}],
//       imports:[HttpClientModule, LoggerTestingModule]
//     });
//     service = TestBed.inject(CacheInterceptorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
