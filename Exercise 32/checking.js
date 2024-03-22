"use strict";
/* Qno.32: Checking Usernames: Do the following to create a program that simulates
 how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users.
 Make sure one or two of the new usernames are also in the current_users list.

 • Loop through the new_users list to see if each new username has already been used.
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
// let current_Users = [`A`,`B`,`C`,`D`,`E`];
// let new_Users = [`E`,`F`,`G`,];
// // Function to check for same elements in arrays
// function checkSameElement(current_Users:any, new_Users:any) {
//     for (let i = 0; i < current_Users.length; i++) {
//         for (let j = 0; j < new_Users.length; j++) {
//             if (current_Users[i] === new_Users[j]) {
//                 return true; // Same element found
//              }
//         }
//     }
//     return false; // No same element found
// }
// // Checking output
// if (checkSameElement(current_Users, new_Users)) {
//     console.log('Enter new name...');
// } else {
//     console.log('Username is Available.');
// }
let current_Users = [`JuNed`, `BilAl`, `SijAwal`, `ZAheer`, `lAtif`];
let new_Users = [`Kamran`, `Usman`, `BilAl`, `Zulfiqar`, `ZAheer`];
new_Users.forEach(freshUser => {
    let lowerCase = freshUser.toLowerCase();
    if (current_Users.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The user name  ${freshUser} is not availabe. try different one!`);
    }
    else {
        console.log(`User Name ${freshUser} is available`);
    }
});
