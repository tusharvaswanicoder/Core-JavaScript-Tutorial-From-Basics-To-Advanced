/*
Comma operator evaluates each operand from left to right and returns the value of the last operand. Very unusual and rarely used operator.
*/

const b = (2, 3, 4);
console.log(b);

let c = 1;
const d = ((c = c + 2), (c = c * 3), (c -= 2));
/*
d = ((c = c + 2), (c = c * 3), (c -= 2))
d = (3, (c = c * 3), (c -= 2)) // c -> 3
d = (3, 9, (c -= 2)) // c -> 9
d = (3, 9, 7) // c -> 7
d = 7
*/

console.log(c);
console.log(d);
