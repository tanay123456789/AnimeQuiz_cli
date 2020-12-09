//dependency
var rs=require("readline-sync");

//starting messages
console.log("Hello welcome to my game");

var player=rs.question("Please enter your name");

var welcomeMessage=`Welcome ${player}`;

console.log(welcomeMessage);

console.log("You will get 1 score for correct answer and -1 for wrong answer")