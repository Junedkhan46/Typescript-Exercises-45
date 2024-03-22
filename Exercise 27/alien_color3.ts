/*QNo.27: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//If the color is green
let alien_color:string = `Green`
if(alien_color === `Green`) {console.log(`You've got 5 points!`)};
// If the color is yellow
alien_color = `Yellow`;
if(alien_color = `Yellow`) {console.log(`You've got 10 points!`)};
// If the color is Red
alien_color = `Red`
if(alien_color = `Red`) {console.log(`You've got 15 points!`)};
// Message containing color information
console.log(`For "GREEN", 5 points are awarded`);
console.log(`For "YELLOW", 10 points are awarded`);
console.log(`For "RED", 5 points are awarded`);

/*if(alien_color === `Green`) {console.log(`You've got 5 points`)}
else if(alien_color === `Yellow`) {console.log(`You've got 10 points`)}
else if(alien_color === `Red`) {console.log(`you've got 15 points`)};*/