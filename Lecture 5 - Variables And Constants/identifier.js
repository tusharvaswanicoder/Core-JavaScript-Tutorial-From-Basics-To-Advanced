// Some rules

// Identifier can only starts with a letter(uppercase or lowercase), underscore (_), or dollar sign ($).

const a = 4;
const _b = 5;
const $c = 5;
// const *e = 5; -> wont work
// const 4e = 5; -> wont work

// Subsequent characters can also be digits (0 - 9), A - Z (uppercase), a - z (lowercase), underscore (_), and dollar sign ($).

const d = 4;
const e4 = 5;
const e_ = 5;
// const g*h = 4; -> wont work

// JavaScript is case-sensitive so uppercase and lowercase matters.

let f = 4;
// const f = 5; -> wont work
const F = 5;
console.log(f);
console.log(F);
const abc1 = 6;
const aBc1 = 7;
console.log(abc1);
console.log(aBc1);

// Identifiers can not be keywords(reserved words that has some special meaning to JavaScript engine).

let letVariable = 5;
// let let = 6; -> wont work
// console.log(let); -> wont work
// const break = 4; -> wont work
// const continue = 5; -> wont work

// Camel case (not a rule but a convention)

/*
Python -> my_fav_name, my_fav_color, code, current_value
JavaScript -> Camel Case -> code, myFavName, myFavColor, currentValue
*/

const my_fav_name = 5;
const myFavName = 6;
