/*
2 ways to access property/method -
1. Dot syntax
2. Square bracket syntax
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
    introduceMe: () => "My name is Tushar",
    tellMyAge() {
        return 20;
    },
    [str1]() {
        return str1;
    },
};

// dot syntax

console.log(person.firstName);
console.log(person.lastName);
// console.log(person.1); -> not possible with dot syntax
// when property key is computed
console.log(person.ab);
/*
here it will not work -

console.log(person.is married);
console.log(person."is married");
*/

// square bracket syntax

console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person[1]);
console.log(person["1"]);
console.log(person[str1 + str2]);
console.log(person["is married"]);

// accessing value of a method

console.log(person.introduceMe);
console.log(person.introduceMe());
console.log(console);
console.log(person["tellMyAge"]);
console.log(person["tellMyAge"]());
console.log(person["a"]());

// accessing value of property/method that does not exist

console.log(person.favFood);
console.log(person.d);
// person.d(); -> person.d is not function

// modifying values of properties and methods

let a = 4;
console.log(a);
a = 5;
console.log(a);
console.log(person.firstName);
person.firstName = "Kartik";
console.log(person.firstName);

console.log(person.introduceMe());

person.introduceMe = () => {
    return "My name is Kartik";
};

console.log(person.introduceMe());

// modifying values of properties and methods that does not exist - create a new property/method

console.log(person.d);
person.d = 4;
console.log(person);
console.log(person.d);

console.log(person.e);
// person.e(); -> person.e is not a function
person.e = () => "I am the function e";
console.log(person);
console.log(person.e);
console.log(person.e());
