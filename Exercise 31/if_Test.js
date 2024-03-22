"use strict";
/* Qno.31: No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//If the list is empty, print the message We need to find some users!
let user_names = [];
if (user_names.length === 0) {
    console.log(`We need to find some users!`);
}
;
//Remove all of the usernames from your array, and make sure the correct message is printed.
let user_names1 = [`admin`, `user1`, `user2`, `user3`, `user4`];
if (user_names1.splice(0, 5)) {
    console.log(user_names1);
}
;
