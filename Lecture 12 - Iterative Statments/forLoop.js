/*
Syntax of for loop:

for (initial expression; condition; iterator) {
    block of code ...
}

initial expression - this expression is evaluated before loop starts
condition - decides whether loop is going to run further or not
iterator - runs after execution of block
*/

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// console.log(i); -> error

// Print first n numbers

const n = 40;
for (let i = 1; i <= n; i++) {
    console.log(i);
}

// Calculate sum of first n numbers

const n2 = 40;
let sum = 0;
for (let i = 1; i <= n2; i++) {
    console.log(i);
    sum += i;
}

console.log(sum);
