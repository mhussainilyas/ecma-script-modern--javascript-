// What is Destructuring?
// Destructuring in JavaScript is a convenient way to extract values from arrays or properties from objects into distinct variables. It makes your code cleaner and more readable.

// =========================
//    Array Destructuring
// =========================
// You can extract values from an array using square brackets [ ]. in array destructuring order matters.

// const number = [10, 20, 30];

// traditional way
// const first = number[0];
// const second = number[1];
// const third = number[2];

// Modern Way
// const [first, second, third] = number;

// output
// console.log(first);
// console.log(second);
// console.log(third);

// ignoring the elements
// const [, , third] = number;
// console.log(third);

//! ---------- Practice Example ----------
//! Write a program that swap two variables without using 3rd variable.

// let a = 10;
// let b = 30;
// console.log(a, b);

// mostly will do using 3rd variable
// let c = b;
// b = a;
// a = c;
// console.log(a, b);

// without using 3rd variable
// [a, b] = [b, a];
// console.log(a, b);

// =========================
//   Object Destructuring
// =========================
// For objects, destructuring uses curly braces { }. order does not metter in object destructuring.

// let user = {
//   name: "Hussain",
//   age: 19,
// };

// traditional way
// let name = user.name;
// let age = user.age;
// console.log(name, age);

// Modern way
// let { name, age } = user;
// let { age, name } = user; //(or)
// console.log(name, age);

// Renaming Property
// rename "name" to "myName"
// let {name: myName, age} = user;
// console.log(myName);
// console.log(age);