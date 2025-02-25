// =======================
//    String Padding
// =======================
// string padding can be accomplished using the padStart() and padEnd() methods. These methods allow you to add padding to the start or the end of a string until it reaches a specified length.
// TODO NOTES => the specified length in the padstart()/padEnd() should be greater than the string length. otherwise it does not works. 

// 1. padStart()
// let str = "42";
// let stringPadding = str.padStart(5, "0");
// console.log(stringPadding);

// 1. padEnd()
// let str = "42";
// let stringPadding = str.padEnd(5, "0");
// console.log(stringPadding);

// ------ Together Example -------
let number = '123';  

// Padding at the start  
let startPadding = number.padStart(6, '0');   
console.log(startPadding);  

// Padding at the end  
let endPadding = number.padEnd(6, '0');   
console.log(endPadding);  

// Using a custom pad-string  
let customPaddingStart = number.padStart(8, '-');   
console.log(customPaddingStart);  
let customPaddingEnd = number.padEnd(8, '-');   
console.log(customPaddingEnd);