/* Qno. 33: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/
// let number:number[] = [1,2,3,4,5,6,7,8,9]

// // for num in numbers:
let Order:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (Order[0] === 1){console.log(`${1}st`)}
    if (Order[1]===2){console.log(`${2}nd`)}
    if(Order[2]===3){console.log(`${3}rd`)};

for (let i=3;i<Order.length;i++){    
    console.log(Order[i]+`th`)
};

