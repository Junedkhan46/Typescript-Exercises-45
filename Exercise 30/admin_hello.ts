/*Qno.31: Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.*/
let user_names:string[] = [`admin`,`user1`,`user2`,`user3`,`user4`]
for (let i=0;i<user_names.length;i++){
    console.log(`Hi there! Welcome.. `+ user_names[i])
};
if(user_names.includes(`admin`)) {
    console.log(`Hello admin, would you like to see a status report`)
}
else {console.log(+user_names[1][2][3] ,`thank you for logging in again.`)}