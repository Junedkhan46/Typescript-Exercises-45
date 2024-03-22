let guests = [`Juned khan`, `Sir Zia`, `Asim Munir`]; //This is called an array. It saves more data in one variable.
/*for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
}
;*/
let absent_Guest = `Juned Khan`;
let new_guest = `Dr Bashir Ahmed`
guests[0] = new_guest;
// for (let i = 0; i < guests.length; i++) {
//     console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
// }
// ;
console.log(`${absent_Guest} couldn't come to attend here!\n\n`);
console.log('HELLO EVERYBODY! THERE ARE MORE TABLES FOR NEW COMERS! \n');

guests.unshift(`Anwar ul haq`); //(array).unshift() is used to add a new name at first(0) index in an array at first index(0).
guests.splice(2, 0, `Faez Essa`); //Array.splice(2, 0, `added name`) is used to add new name in an array at second index (1)
//Remember! .splice(2{ means at what place do you want to add a name},0 {on the second place it asks to delete something from number 2. we add 0 means we do not want to delete the name} )
guests.push(`Governor Sindh`); // array.push() is used to place a name at the end of array name.
for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
}
;
console.log(`Sorry we can't arrange more table and only two persons will be invited`);
while(guests.length >2) {
    let univited = guests.pop();
    console.log(`Sorry Mr. ${univited}, we couldn't make more space to invite you`);
}
for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n You're still invited cordially. \n\nThanks!\n\n`);}

    guests.splice(0, 2);
    console.log(guests);