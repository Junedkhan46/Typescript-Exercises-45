"use strict";
//Qno. 19; Print a message indicating the number of people you're inviting to dinner. 
let guests = [`D`, `B`, `C`];
/*for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
};*/
let absent_Guest = `D`;
let new_guest = `A`;
guests[0] = new_guest;
/*for (let i = 0; i < guests.length; i++) {
 console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
};*/
//console.log(`${absent_Guest}couldn't come to attend here!\n\n`);
//Announcing new guests at expanded table
console.log('HELLO EVERYBODY! THERE ARE MORE TABLES FOR NEW COMERS! \n');
guests.unshift(`G`);
guests.splice(2, 0, `E`);
guests.push(`F`);
// for (let i = 0; i < guests.length; i++) {
//     console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);};
//console.log(`Sorry we can't arrange more table and only two persons will be invited`);
while (guests.length > 2) {
    let univited = guests.pop();
    //console.log(`Sorry Mr. ${univited}, we couldn't make more space to invite you`); this was commented bcz we're counting total guests
}
//Remaining invited guests
/*for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n You're still invited cordially. \n\nThanks!\n\n`);}*/
guests.splice(0, 2);
console.log(guests);
// To count invited guests:
console.log(`Total guests invited are: ${guests.length}`);
