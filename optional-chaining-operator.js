// ============================
//  Optional Chaining Operator
// ============================
// The optional chaining operator (?.) in JavaScript allows you to safely access deeply nested object properties without having to manually check for the existence of each property in the chain. If any part of the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

// -------- Example 01 --------

// const person = {
//   name: "Hussain",
//   address: {
//     city: "Lahore",
//     zipCode: 12345,
//   },
// };

// accesing the nested properties without optional chaining
// const city = person.address ? person.address.city : "Unknown";
// console.log(city);

// accesing the nested properties without optional chaining
// const city = person.address?.city || "Unknown";
// const city = person.address?.city ?? "Unknown";
// console.log(city);

// -------- Example 02 --------
const person = {
  name: "Hussain",
  address: {
    city: "Lahore",
    zipCode: 12345,
    coordinates: {
      latitude: 40.7128,
      longitude: -72.009,
    },
  },
};

let latitude = person.address?.coordinates?.latitude ?? "Not present.";
console.log(latitude);
