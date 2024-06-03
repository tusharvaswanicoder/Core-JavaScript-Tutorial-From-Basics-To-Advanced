/*
parameters - written in the function declaration
arguments - passed when calling a function
*/

// prints up to 40 always

function printNumberUpto40() {
    const n = 40;
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUpto40();

// prints according to n passed to it

function printNumberUptoN(n) {
    console.log(n);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoN(4);
printNumberUptoN(8);
printNumberUptoN(); // n will be undefined

function introduceMe(name, age) {
    console.log(`My name is ${name} and my age is ${age}.`);
}

introduceMe(); // name and age will be undefined
introduceMe("Tushar", 20);
