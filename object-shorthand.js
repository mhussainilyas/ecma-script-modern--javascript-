// =======================
//    Object Short Hand
// =======================
const myName = "Hussain";
const age = 19;
// traditional way
// const person = {
//   myName: myName,
//   age: age,
// };
// modern way
const person = {
  myName,
  age,
};
console.log(person);
