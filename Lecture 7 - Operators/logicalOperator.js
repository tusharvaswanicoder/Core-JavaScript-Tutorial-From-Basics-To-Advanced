/*
Logical operators are used in two ways:
1. With boolean operands -> return a boolean value (topic for this lecture)
2. With non boolean operands -> returns value from one of the specified operands (except for not operator as that always returns a boolean value). This is called short circuiting (we will understand this later on).

These are all the logical operators:

&& -> logical and
|| -> logical or
! -> logical not -> always returns a boolean value
?? -> nullish coalescing
*/

// && (binary operator) -> returns true only when both operands are true

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// || (binary operator) -> return true when at least one of the operands is true

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// logical not (unary operator)

console.log(!true);
console.log(!false);
console.log(!!true); // !!true -> !false -> true
console.log(!!false); // !!false -> !true -> false
