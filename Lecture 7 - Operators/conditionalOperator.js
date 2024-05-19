/*
Conditional operator is used to perform conditional operations. It is also known as ternary operator (?:).

boolean expression ? x(if true) : y(if false)
*/

let age = 18;
console.log(age >= 18 ? "You can vote!" : "You can't vote!");
age = 16;
console.log(age >= 18 ? "You can vote!" : "You can't vote!");

console.log(true ? "true" : "false");
console.log(false ? "true" : "false");

console.log(
    age >= 18 ? console.log("You can vote!") : console.log("You can't vote!")
);
console.log(console.log("Hello"));
