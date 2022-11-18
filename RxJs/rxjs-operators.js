//import {from} from 'rxjs';
/* from operator - converts almost anything to an Observable
 Creates an Observable from an Array, an array-like object, a Promise, an iterable object,
  or an Observable-like object.*/

var numbers = [1,2,4,6,7,8,10];
var result = from(numbers);

console.log(result);
