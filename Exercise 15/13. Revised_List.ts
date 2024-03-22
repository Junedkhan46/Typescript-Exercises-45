let guests = [`Juned khan`, `Sir Zia`, `Governor Sindh`];
for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
}
;
let absent_Guest = `Juned Khan`;
let new_guest = `Dr Bashir Ahmed`
guests[0] = new_guest;
for (let i = 0; i < guests.length; i++) {
    console.log(`Mr. ` + guests[i] + `,`, `\n\n It is our pleasure that you\'ve been invited. \n\nThanks!\n\n`);
}
;
console.log(`${absent_Guest} is couldn't come to attend here!`);