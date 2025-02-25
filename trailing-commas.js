// ======================
//    Trailing Commas
// ======================
// This features allows to have trailing commas in function declaration, function calls, array literals and object literals.

// Function Declaration
function greet(name, age, ) {
  console.log(`Hye ${name}, you are ${age} years old.`);
}

// Function Calls
greet("Hussain", 19, );

// Object Literals
let obj = {
  myName: "Hussain",
  age: 19,
  dep: "BSCS",
};

// Array Literals
let arr = ["apple", "mango", "banana", ];
