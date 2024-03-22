/* QNo.26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.*/

//If the color is green
let alien_color:string = `Green`
if(alien_color === `Green`) {console.log(`You've got 5 points!`)};
// if the color is not green
alien_color = `Yellow`
if(alien_color = `Yellow`) {console.log(`You've got 10 points!`)};
// if-else chain
if(alien_color=`Green`){console.log(`You've got 5 points!`)} else{console.log(`You've got 10 points!`)};