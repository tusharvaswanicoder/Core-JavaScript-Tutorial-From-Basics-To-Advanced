/*
Arithmetic operator is used to perform arithmetic operations

+ -> addition
- -> subtraction
* -> multiplication
/ -> division
% -> modulo/remainder
++ -> increment
-- -> decrement
+ -> unary plus
- -> unary negation
** -> exponentiation
*/

// + -> addition (binary)

console.log(2 + 3);

// - -> subtraction (binary)

console.log(3 - 2);
console.log(2 - 3);

// * -> multiplication (binary)

console.log(2 * 3);

// / -> division (binary)

console.log(2 / 3);
console.log(3 / 2);
console.log(4 / 2);
console.log(2 / 0);
console.log(-2 / 0);

// % -> modulo/remainder (binary)

console.log(3 % 2);
console.log(2 % 3);

// ++ -> increment (unary)

let a = 2;
console.log(a);
console.log(++a);
console.log(a);
console.log(a++);
console.log(a);

// -- -> decrement (unary)

let b = 2;
console.log(b);
console.log(--b);
console.log(b);
console.log(b--);
console.log(b);

// + -> unary plus (unary)

console.log(+2);
console.log(+-3);

// - -> unary negation (unary)

const c = 2;
console.log(c);
console.log(-c);

const d = -3;
console.log(d);
console.log(-d); // -d => -(-3) => 3

// ** -> exponentiation (binary)

// 2^3 = 2 * 2 * 2 = 8

console.log(2 ** 3);
console.log(4 ** 2);
console.log(4 ** 4);
