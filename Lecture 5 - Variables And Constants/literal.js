/*
Value of a variable/constant is called literal.
It can be of various data types:
1. Primitive data types -> number, bigint, string, boolean, null, undefined, symbol(will be discussed later on)
2. Non-primitive/Composite/Reference data types(will be discussed later on)
*/

/*
Number - It represents integer or floating-point numbers.
Range of values -> -2^53 + 1 to 2^53 - 1
Some special number values -> NaN, Infinity, -Infinity
Exponent numbers are also supported
*/

const a = 4;
const b = 4.6;
console.log(a, b);
const c = Infinity;
console.log(c);
const d = -Infinity;
console.log(d);
const e = NaN;
console.log(e);

console.log(3125e3); // -> 3125 x 10^3
console.log(3.125e6); // -> 3.125 x 10^6

// Bigint -> store arbitary length integer

console.log(1900);
console.log(9007199254740991);
console.log(9007199254740992);
console.log(9007199254740993);
console.log(9007199254740994);
console.log(9007199254740995);
console.log(9007199254740995223);

const f = 324234n;
console.log(f);
console.log(9007199254740991n);
console.log(9007199254740992n);
console.log(9007199254740993n);
console.log(9007199254740994n);
console.log(9007199254740995n);
console.log(9007199254740995223n);
console.log(90071992547409952234311234234342524532453453453453453453453245n);

/*
String - Store collection of characters
3 ways to represent strings:
1. Single quote
2. Double quote
3. Backticks
There is no difference between double quotes / single quotes. But backticks give you some more extended functionality
*/

const g = "Tushar";
console.log(g);
// const h = Tushar; -> wont work
const h = "Tushar";
console.log(h);

const i = `Tushar`;
console.log(i);

const j = "1234";
console.log(j);

const name = "Tushar";
const age = 20;

/*
Does not work -
console.log("
    Hello
")
console.log('
    Hello
')
*/

const finalStrWithDoubleQuote =
    "My name is " + name + " and my age is " + age + ".";
console.log(finalStrWithDoubleQuote);
const finalStringWithBackticks = `My name is ${name} and my age is ${age}.`;
console.log(finalStrWithDoubleQuote);
console.log(`My name is ${"Tushar"} and my age is ${20}.`);

console.log(`
Hi Hello
`);

// Boolean - true or false

const k = true;
const l = false;
console.log(k, l);

const canVote = true;
console.log(canVote);

// Null V/S Undefined -> Null means intentional absence of a value whereas undefined means variable has not been assigned any value.

const m = null;
const n = undefined;
console.log(m);
console.log(n);
let o;
console.log(o);
