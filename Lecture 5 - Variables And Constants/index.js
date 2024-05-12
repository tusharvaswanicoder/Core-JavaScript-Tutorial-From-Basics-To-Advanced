/*
variables and constants -> used to store some data in memory and later on access that data
variables -> value can be changed
constants -> value can't be changed
*/

/*
Parts of variables/constants:
1. Identifier -> name of variable/constant
2. Literal -> data stored in variable/constant
*/

// create variables - let and var

let a = 10;
var b = 20;

// create constants - const

const c = 30;

// create variables or constant without specifying literal

let f; // undefined
console.log(f);

// const g; -> error

// Duplicate variables and constants can't be created

let g = 4;
// let g = 5; -> this wont work
console.log(g);
// const g = 5; -> this wont work

// Accessing value of variables and constants

console.log(a);
console.log(b);
console.log(c);
let d = c;
console.log(d);
const e = a;
console.log(e);

// Modifying value of variables and constants

let h = 10;
console.log(h);
h = 20;
console.log(h);

const i = 10;
console.log(i);
// i = 20; -> wont work
console.log(i);

h = "Tushar";
console.log(h);
h = true;
console.log(h);
h = 12n;
console.log(h);
h = null;
console.log(h);
h = undefined;
console.log(h);

let j;
console.log(j);
j = 4;
console.log(j);

j = null;
console.log(j);
