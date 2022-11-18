import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms 14-11-2022 00:00:00 to 14',()=>{
    const pipe = new SearchPipe();
    // bookings:Booking[]=[];
    
    // expect(pipe.transform(bookings,"14")).toBe();
  })
});
