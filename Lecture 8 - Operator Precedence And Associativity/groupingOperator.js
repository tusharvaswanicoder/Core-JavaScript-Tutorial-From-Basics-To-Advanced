/*
Grouping operator "()" helps to control the precedence and associativity of evaluation in expressions.
*/

// Example 1: 2 ** 3 ** 2

console.log(2 ** 3 ** 2);

/*
(2 ** 3) ** 2
8 ** 2
64
*/
console.log((2 ** 3) ** 2);

// Example 2: 2 * 3 + 4

console.log(2 * 3 + 4); // 2 * 3 + 4 -> 6 + 4 -> 10
console.log(2 * (3 + 4)); // 2 * (3 + 4) -> 2 * 7 -> 14
