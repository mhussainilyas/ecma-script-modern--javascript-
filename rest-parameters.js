// ========================
//     Rest Parameters
// ========================
// Rest parameters allow you to represent an indefinite number of arguments as an array. This feature is particularly useful when you want to handle functions that accept a varying number of arguments without explicitly defining each one.

// traditional way of doing it
// const sum = (a, b, c, d) => {
//   return a + b + c + d;
// };

// with rest parameters
// const sum = (...numbers) => {
//   console.log(typeof numbers);
//   return numbers.reduce((accum, val, index, arr) => (accum = accum + val), 0);
// };

// function invocation(Calling)
// console.log(sum(1, 2, 3, 4));

// TODO NOTE :=> A function defination can only have one rest parameter, and the rest parameter must be the last parameter in the function defination.
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg1, arg2) {}
// function correct1(arg1, arg2, ...correct) {}
// function correct2(...correct) {}

// Example Code
// const sum = (a, b, ...numbers) => {
//   return numbers.reduce((accum, val, index, arr) => (accum = accum + val), 0);
// };

// Function Call
// console.log(sum(2, 3, 4, 5, 6)); // output 15