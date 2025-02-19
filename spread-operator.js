// ====================
//   Spread Operator
// ====================
// The spread operator in JavaScript, represented by three dots (...), allows you to expand or spread elements of an iterable (like an array or a string) into individual elements. It can be used in various scenarios,

// 1. Copying Arrays:
// let fruits = ["Apple", "Orange", "Mango", "Banana"];
// let newFruits = [...fruits];
// console.log(newFruits);

// 2. Combining Arrays:
// let number1 = [1, 2, 3];
// let number2 = [4, 5, 6];
// let number = [...number1, ...number2];
// console.log(number);

// 3. Adding Elements to Arrays:
// let fruits = ["Apple", "Orange", "Mango", "Banana"];
// => 1st method
// let newFruits = ["Grapes", ...fruits, "Guava"];
// console.log(newFruits);
// => 2nd method
// fruits.push(...["Grapes", "Guava"]);
// console.log(fruits);

// 4. One more use case:
// in javascript, when you spread a string using the spread operator (...), it convert the string into array of its individuals characters.
// let country = "Pakistan";
// traditional way
// console.log(country.split(""));
// new way of doing it
// console.log([...country]);

// 5. Combining Objects:
// let obj1 = {key1: "value1"};
// let obj2 = {key2: "value2"};
// let obj = {...obj1, ...obj2};
// console.log(obj);

// 6. Merging Objects:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const merged = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 } - `b` is overwritten
// console.log(merged);

// 7. Copy of an object:
// const originalObject = { name: "John", age: 25 };
// const copyObject = { ...originalObject };
// console.log(copyObject);