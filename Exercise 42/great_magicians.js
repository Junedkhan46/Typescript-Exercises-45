"use strict";
/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.*/
let magician_Names = [`Uqab`, `Junaid bangali`, `shuf suhuf sarkar`];
function make_great(magicians) {
    magicians.forEach(element => {
        console.log(`${element}: The Great`); // This is almost similar to Q.41 but here we add The great in console.
    });
}
make_great(magician_Names);
