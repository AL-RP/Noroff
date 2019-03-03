/*
Emil Strøm
Javascript 1 Module Assignment 1.

This Javascript file while contain the following scripts:
  -  An 'if else' statement that tests a variable to see if it is orange.
  -  A switch statement that iterates through every month of the year displaying how many days in each month.
  -  An array of objects with three peoples' names, ages and hobbies.
  -  A block of code that logs the iteration number to the console 10 times and stops.
  -  A 'try catch' statement that FAILS.

The scripts will be dispalyed in that order.
*/

// 1.
var color = "Orange";

if (color == "Orange") {
  console.log("It's orange!")
} else {
  console.log("It's not orange!")
}
// End 1.

// 2.
var a = parseInt(prompt("enter a month number please."), 10);
var month = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var b = month[a - 1];
var season;
switch (a) {
  case 12: days = "31";
  case 1: days = "31";
  case 2: days = "28/29";
  case 3: days = "31";
  case 4: days = "30";
  case 5: days = "31";
  case 6: days = "30";
  case 7: days = "31";
  case 8: days = "31"
  case 9: days = "30";
  case 10: days = "31";
  case 11: days = "30";
}try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
alert(" It is " + b + ", which has " + days + " days.");
// End 2.


// 3/4. Just to note, I could've used "while i < 3". I did it this way, I hope it's not wrong.
var hobbies = ["Hiking", "Gaming", "Dancing"];
var names = ["John", "Jenny", "James"]
var age = ["17", "21", "19"]
for (var i=0;i<hobbies.length;i+=1) {
 console.log("hobby: " + hobbies[i]);
}
// End 3/4.


// 5.
var iteration;
for (iteration = 0; iteration < 10; iteration++) {
  console.log("Iteration " + iteration)
}
// End 5.


// 6. Not sure if I got this one right.
try {
  throw 'IntentionalFail'; // generates an exception
}
catch (e) {
  console.log(e + " Failed."); // pass exception object to error handler
}
// End 6.
