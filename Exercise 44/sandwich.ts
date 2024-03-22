/*Sandwiches: Write a function that accepts an array of items, a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.*/

function orderSandwich(items:string[]) {
        console.log("Making the order with:\n");
        items.forEach(element => console.log(element));
        console.log(`Have a nice diet!\n`);
    }

    orderSandwich([`chicken`, `Buttur`,`\n`]);
    orderSandwich([`korma`,`Jam`,`\n`]);
    orderSandwich([`Chicken`,`jam`,`buttur`,`\n`]);