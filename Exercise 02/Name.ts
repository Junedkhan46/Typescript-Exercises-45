/* Qno2:  Name Cases: Store a person’s name in a variable.
Then print that person’s name in lowercase, uppercase, and titlecase.*/

//storing person's name:
let personName = `Juned Khan`;

//Person's name in small letters:
let lowerCase :string= personName.toLowerCase();

//Person's name in capital letters:
let upperCase :string= personName.toUpperCase();

//Person's Name in "Title Case":
let titleCase :string= personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).
toLowerCase()).join('');

if (personName !== null && personName !=='') {console.log(`Hello ${personName}, Here is your name in:
Lower Case: ${lowerCase}
Upper Case: ${upperCase}
Title Case: ${titleCase}`
)} else {console.log(`Enter Your Name!`)};