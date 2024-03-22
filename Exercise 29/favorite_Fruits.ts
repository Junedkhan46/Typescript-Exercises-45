/*Qno.29: Favorite Fruit: Make a array of your favorite fruits, 
and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
let favorite_fruits:string[] = [`Olive`, `watermelon`,`Banana`,`Apple`,`Orange`];
for (let i=0;i<favorite_fruits.length;i++) {console.log(favorite_fruits[i]+ ``, `is my favorite fruit`)};

// Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if(favorite_fruits.includes(`Olive`)) {console.log(`I really like ${favorite_fruits[0]}`)};
if(favorite_fruits.includes(`watermelon`)) {console.log(`I really like ${favorite_fruits[1]}`)};
if(favorite_fruits.includes(`Banana`)) {console.log(`I really like ${favorite_fruits[2]}`)};
if(favorite_fruits.includes(`Apple`)) {console.log(`I really like ${favorite_fruits[3]}`)};
if(favorite_fruits.includes(`Orange`)) {console.log(`I really like ${favorite_fruits[4]}`)};

