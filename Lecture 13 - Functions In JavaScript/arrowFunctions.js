const a = function () {
    console.log("a");
}

a();

const b = () => {
    console.log("b");
}

b();

const c = () => console.log("c");

c();

const d = (n) => console.log(n);

d(4);

const e = n => console.log(n);

e(5);

const f = (n, g) => console.log(n, g);

f(4, 5);

/*
const g = n, g => console.log(n, g);
g(5, 6)
*/

/*
function printNumberUptoN(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
*/

const printNumberUptoN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoN(4);

const printNumberUptoNAlternative = n => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
};

printNumberUptoNAlternative(5);

/*
function introduceMe(name, age) {
    console.log(`My name is ${name} and my age is ${age}.`);
}
*/

const introduceMe = (name, age) => {
    console.log(`My name is ${name} and my age is ${age}.`);
}

introduceMe("Tushar", 20);
