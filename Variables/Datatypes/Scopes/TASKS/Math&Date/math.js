/*
Math .PI=3.14

1.Math.round() round is method that round the nearest integer

use cases :
reviews 

2.math.floor():it removes the decimal point and reduce the value
3.math.ceil() it  goes next integer

use cases:-
-page nation //multiple pages
 
4.math.trunc()it removes the decimal part 
   
5.math.absolute()it returns the absolute value
max() filter the products  

math.random()create a random number 0 to 1 
use cases :-
OTp

Date:-

*/
console.log(Math.PI);

console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.8));


console.log(Math.floor(4.4));
console.log(Math.floor(4.5));
console.log(Math.floor(4.8));


console.log(Math.ceil(4.4));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.8));


console.log(Math.trunc(4.4));
console.log(Math.trunc(4.5));
console.log(Math.trunc(-4.8));


console.log(Math.max(10,20,30,40));

console.log(Math.random());// when we refresh it change the value

console.log(Math.random()*10)+1;

console.log(Math.trunc(Math.random()*1000000));