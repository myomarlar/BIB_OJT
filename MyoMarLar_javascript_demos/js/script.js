/** @format */

// Variables
if (true) {
  var y = 10;
}
console.log(y);

// Functions

function myFunction() {}

// Arrow Functions
const myArrowFunction = () => {};

// Loops
// While loop
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}

//For Loops
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});

fruits.forEach((fruit) => {
  console.log(fruit);
});

//Conditions
// Normal If Statement

let x = 10;
if (x > 5) {
  console.log("x > 5");
} else if (x === 5) {
  console.log("x === 5");
} else {
  console.log("x < 5");
}

// Switch Statement
let fruit = "banana";
switch (fruit) {
  case "apple":
    console.log("This is an apple.");
    break;
  case "banana":
    console.log("This is a banana.");
    break;
  default:
    console.log("Unknown fruit.");
}

// Ternary Operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);
