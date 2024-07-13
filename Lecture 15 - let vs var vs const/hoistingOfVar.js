// console.log(a); -> can not access a before initilization
const a = 4;
console.log(a);

console.log(b);
var b = 6;
console.log(b);

c = 9;
console.log(c);
var c = 8;
console.log(c);

add(2, 3);

function add(a, b) {
    console.log(a + b);
}

add(2, 3);

// addWithLet(4, 5); -> Cannot access 'addWithLet' before initialization

let addWithLet = (a, b) => {
    console.log(a + b);
};

addWithLet(4, 5);

console.log(addWithVar);
// addWithVar(6, 7); -> addWithVar is not a function

var addWithVar = (a, b) => {
    console.log(a + b);
};

addWithVar(6, 7);
