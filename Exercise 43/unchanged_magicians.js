"use strict";
/*Unchanged Magicians: Start with your work from Exercise 42. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.*/
let magician = [`Uqab`, `Junaid bangali`, `shuf suhuf sarkar`];
function copyarray(Arr) {
    return [...Arr];
}
;
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = `The great ` + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyarray(magician);
make_great(copyMagicianArray);
console.log(`\n\nThis is original array.`);
show_magicians(magician);
console.log(`\n\nThis is the modified array.`);
show_magicians(copyMagicianArray);
