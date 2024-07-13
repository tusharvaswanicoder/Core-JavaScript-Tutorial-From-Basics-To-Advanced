// console.log(c); -> c is not defined
// console.log(a); -> Cannot access 'a' before initialization
// console.log(b); -> Cannot access 'b' before initialization

console.log("Hi");
console.log("Hello");

const d = () => {
    console.log(a);
    console.log(b);
};

// d(); -> Cannot access 'a' and 'b' before initialization

let a = 4;
console.log(a);

// d(); -> Cannot access 'b' before initialization

const b = 6;
console.log(b);

const c = () => {
    console.log(a);
    console.log(b);
};

c();
d(); // -> this is working fine
