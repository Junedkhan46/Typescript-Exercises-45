/*QNo.37: Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.*/

function make_shirt(size:string = `Large`, text:string = `I love typescript.`){
    console.log(`Here the shirt ${size} is printed with message: ${text}`)
}
make_shirt() //here by default parameters are called
make_shirt(`medium`) // in this line, only parameter 1st (size) is changed
make_shirt(`XL`, `I am a Developer!`); // in this line function parameters are changed..