"use strict";
/*Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.*/
let magician_Names = [`Uqab`, `Junaid bangali`, `shuf suhuf sarkar`];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician_Names);
