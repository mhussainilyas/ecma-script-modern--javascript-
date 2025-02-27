// ==============================
//  Nullish coalescing operator
// ==============================
// The nullish coalescing operator (??) in JavaScript is a logical operator that returns its right-hand operand when the left-hand operand is null or undefined. This operator is useful for providing default values without being affected by other falsy values, such as 0, false, or an empty string.

// let value1 = null;  
// let value1 = undefined;  
// let value2 = 'Default Value';  
// let result = value1 ?? value2; // result will be 'Default Value'  
// console.log(result);

// With Falsy Values 
let value1 = 0;  
let value2 = 'Another Default';  
let result = value1 ?? value2; // result will be 0, since 0 is not null or undefined  
console.log(result);