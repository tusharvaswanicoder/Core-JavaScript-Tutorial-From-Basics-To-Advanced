// uncomment only when you want to see function declaration becoming block scoped
// "use strict";

// creating a function as value -> function expression

// function declaration

function printNumberUptoN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoN(10);

function introduceMe(name, age) {
    return `My name is ${name} and my age is ${age}.`;
}

console.log(introduceMe("Tushar", 20));

// function expression

const printNumberUptoNWithExpression = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

printNumberUptoNWithExpression(10);

const introduceMeWithExpression = function (name, age) {
    return `My name is ${name} and my age is ${age}.`;
};

console.log(introduceMeWithExpression("Tushar", 20));

// create a function expression with function name

let sum = function functionExpressionSum(a, b) {
    console.log(functionExpressionSum);
    console.log(sum);
    console.log(a + b);
};

sum(2, 3); // -> working fine
// console.log(functionExpressionSum); -> this is not defined
// functionExpressionSum(); -> this is not defined

/*
Difference between function declaration and function expression:
1. function declaration is hoisted
2. function declaration are not block scoped (although in strict mode they become block scoped)
*/

// function declaration is hoisted

/*
console.log(a); // Cannot access 'a' before initialization
let a = 2;
console.log(a); // 2
*/

console.log(a); // undefined
var a = 2;
console.log(a); // 2

b();

function b() {
    console.log("b");
}

b();

/*
c(); // Cannot access 'c' before initialization
const c = function () {
    console.log("c");
}
c();
*/

console.log(d);
// d(); -> d is not function

var d = function () {
    console.log("d");
};

d();

// function declarations are not block scoped (only in sloppy mode)

{
    const e = 2;
    console.log(e);
    function f() {
        console.log("f");
    }
    f();
    const g = () => {
        console.log("g");
    };
    g();
    var h = () => {
        console.log("h");
    };
    h();
}

// console.log(e); -> e is not accessible outside the block
f();
// g(); -> g is not accessible outside the block
h();
