// Arrays are used for storing multiple items in a single variable/constant.

const favColor1 = "red";
const favColor2 = "blue";
const favColor3 = "green";
const favColor4 = "purple";

/*
2 ways for creating an array:
1. Literal Syntax
2. Constructor Syntax
*/

// Literal Syntax

const arr1 = [];

// Constructor Syntax

const arr2 = new Array();

console.log(arr1);
console.log(arr2);

// Creating arrays with some values

const favColors = ["red", "green", "purple", "blue"];
console.log(favColors);

let x = 4;
console.log(x);
x = 8;
console.log(x);
x = "Tushar";
console.log(x);

const arrWithMixedDataTypeValues = [
    1,
    false,
    "Tushar",
    null,
    undefined,
    2.4,
    4n,
    NaN,
    Infinity,
    {
        a: 2,
    },
    () => console.log("Hello"),
    [1, 2, "Vaswani"], // multi dimensional array
];

// Checking length of an array

console.log(arr1.length);
console.log(arr2.length);
console.log(arr2["length"]);
console.log(favColors.length);
console.log(arrWithMixedDataTypeValues.length);

// Arrays are basically objects!

// Proof 1: you can access array properties and methods

console.log(arr1.length); // accessing length property

// Proof 2: viewing array in inspect element in browser

// Proof 3: object.values, object.keys and object.entries

console.log(Object.keys(favColors));
console.log(Object.values(favColors));
console.log(Object.entries(favColors));

// Proof 4: typeof

const obj = {
    a: 2,
    b: 3,
};

console.log(typeof obj);
console.log(typeof favColors);

// How are they different from objects

// Objects are not ordered. But arrays are ordered.

console.log(obj);
console.log(favColors);

const obj1 = {
    1: "Tushar",
    2: "Vaswani",
};

console.log(obj1);

const obj2 = {
    2: "Vaswani",
    1: "Tushar",
};

console.log(obj2);

console.log([2, 1]);

// Each item in an object (also called a property) needs a name. But that's not the case with arrays.

const person = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
};

console.log(person.firstName);

console.log(Object.values(person));

console.log(favColors);

const favColorsObject = {
    favColor1: "red",
    favColor2: "green",
    favColor3: "purple",
    favColor4: "blue",
};

// So to conclude arrays are useful to store multiple items whereas object is used to store multiple properties of a single entity.
