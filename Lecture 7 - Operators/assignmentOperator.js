/*
Assignment operator assigns a value to its left operand based on the value of its right operand. 

All of them are binary operators.

left operand (operator) right operand

= -> simple assignment
+= -> addition assignment
-= -> subtraction assignment
*= -> multiplication assignment
/= -> division assignment
%= -> modulo/remainder assignment
**= -> exponentiation assignment
??= -> nullish coalescing assignment
*/

// = -> simple assignment

const a = 2;
let b = 4;
b = 5;

// += -> addition assignment

console.log(b);
b = b + 4;
console.log(b);
b += 4; // b = b + 4 => b = 9 + 4 => b = 13
console.log(b);

// -= -> subtraction assignment

b -= 8;
console.log(b);

// *= -> multiplication assignment

b *= 8;
console.log(b);

// /= -> division assignment

b /= 10;
console.log(b);

// %= -> modulo/remainder assignment

b %= 10;
console.log(b);

// **= -> exponentiation assignment

b **= 2;
console.log(b);

// value this returns -> assigned value

console.log((b /= 8));
console.log(b);

// ??= -> nullish coalescing assignment
