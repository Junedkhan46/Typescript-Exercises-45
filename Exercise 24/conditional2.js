"use strict";
/* Qno.24: Try out more conditional tests. You don't have to limit out number of tests you create to 10.
if you want to try more comparisons, write more tests having atleast one true and one false result each.
* Test for equality and inequality with strings.
* Test using the lowerCase function.
* Numerical test using =, !=, >, <, == , <= , >=,
* Test using && and || operators
* Test an item in an array
* Test an item not in an array.*/
// *Test for equality and inquality with strings
console.log("Test of euality: ", `car` === `car`);
console.log(`Test for inquality: `, `car` != `plane`); // we write (`any data`) in brackets to compare it byslef.
// Test using lower case function
console.log(`Test for lowerCase: `, `HELLO`.toLowerCase() === `hello`);
// Numericals test using mathematical signs.
console.log("Test for numbers: ", 46 === 46); //Numbers
console.log("Test of not equals to : ", 4 + 2 !== 4 * 8); // not equals to (!=)
console.log("Test of greater than: ", 46 > 45); // greater than (>)
console.log("Test of less than: ", 46 < 47); // less than (<)
console.log("Test of greater than or equals to: ", 46 >= 46); // greater than or equals to (>=)
console.log("Test of less than or equals to: ", 46 <= 46); // less than or equals to (<=)
// Test using && (and and) & || (or) operators
console.log(`Testing &&: `, 5 === 5 && 46 > 5); // && operators
console.log(`Testing or operator: `, 5 + 5 || 7 + 3); // output will be 10 as of first sum
// Test item in an array
let title = [`Juned Khan`, `GIAIC`, `Typescript`];
console.log(`Testing item in an array: `, title.includes(`Juned Khan`)); // array.include checks the value inside the array
//Test item out of the array
console.log(`Testing item outside the array: `, title.includes(`Sir Zia Khan`));
//output will be false because Sir Zia Khan is not in the array.
console.log(`Testing item outside the array with !array: `, !title.includes(`Sir Zia Khan`));
//Now output will come true because code says check that Sir Zia is not included in the array.
