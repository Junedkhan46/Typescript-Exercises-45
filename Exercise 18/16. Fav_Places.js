"use strict";
/* Q.No:18
*Write any five your favourite places,
*Print those places,
*Print places in alphabetical order without modifying array,
*show by priniting that your actual array is in its same values (un-ordered),
*Print array in reverse alphabetical order without modifying original one.
*again print your original array,
*Reverse the order of your list and print it to show changings.
*Reverse the order of the array to restore it to previous order.
*sort your array so it's stored in alphabetical order and print to show changings.
*
 */
// 1. Write any five your favourite places without alphabetical order,
let places = [`Karachi`, `Hyderabad`, `Nawabshah`, `Sukkur`, `Ghotki`];
console.log(`Original: ` + places);
// 2. Printing the array in alphabetcal order.
//Make a copy of the array
console.log(`Copy: ` + [...places].sort()); //[...array name] is used to make a copy of array. .sort() is used to set aplhabetical order
// 3. Show that your original array is in its original order.
console.log(`Original: ` + places);
// 4. Reverse the order of list and print. 
console.log([...places].sort().reverse());
//5. Showing original array
console.log(`Original: ` + places);
//6. Reverse the order of your list and show array that its order has been changed.
console.log(places.reverse);
//7. Reverse in order and alphabets
console.log(`Original in reverse and sorted ` + places.sort().reverse());
