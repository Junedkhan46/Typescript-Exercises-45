//QNo.23: Write a series of conditional tests. Print a statement describing each test and your prediction for result of each test. 
let car:string = 'Subaru'
// Test 01
console.log("Is car === Subaru? I preduct True"); // This console is to print my message.
console.log(car === `Subaru`);                     // This console checks equality between code and variable 
// Test 02
console.log("Is car == Subaru? I preduct True");
console.log(car == `Subaru`);
// Test 03
console.log("Is car != Toyota? I preduct True");
console.log(car != `Toyota`);
// Test 04
console.log("Is car != SUBARU? I preduct True");
console.log(car != `SUBARU`);
// Test 05
console.log("Is car.upperCase != Subaru? I preduct True");
console.log(car.toLocaleUpperCase() != `subaru`);
// Test 06
console.log("Is car.upperCase === Subaru? I preduct False");
console.log(car.toLocaleUpperCase() === `subaru`);
// Test 07
console.log("Is car != Subaru? I preduct False");
console.log(car != `Subaru`);
// Test 08
console.log("Is car == Honda? I preduct False");
console.log(car == `Honda`);
// Test 09
console.log("Is car === SUBARU? I preduct False"); //=== will check datatype of variable so it will give output `False`
console.log(car === `SUBARU`);
// Test 10
console.log("Is car === Aeroplane? I preduct False");
console.log(car === `Aeroplane`);

// this loop was made to check an other way of priniting true 5 times as per question statment.
/*for (let i=1;i<car.length;i++){if(car = `Subaru`) {console.log(i+ `${car},`True`);}
else{console.log(false)};}*/


