/*
Keys can be:
1. Single word names
2. Multi word names
3. Computed names

but data types allowed for keys is string or symbols
*/

const str1 = "a";
const str2 = "b";

const person = {
    firstName: "Tushar", // its a multi word key but its camel cased
    lastName: "Vaswani",
    age: 20, // single word key
    gender: "Male",
    passion: "Coding",
    // is married: false, -> error
    "is married": false, // multi word key
    "favorite food": "Biryani",
    [str1 + str2]: "Dynamic computed property name",
    ["fullName"]: "Tushar Vaswani",
    1: "value",
    true: "true",
    // {a : 1}: "Tushar" -> completely invalid
    [2]: "value2",
    [false]: "false",
    [{ a: 1 }]: "Tushar",
};

console.log(String(person));
console.log(person);
