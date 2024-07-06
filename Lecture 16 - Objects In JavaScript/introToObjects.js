/*
Objects are collections of key-value pairs where the keys are strings (or symbols) and the values can be any data type. And it can be used for storing data together as single entity.
*/

// Person -> First Name, Last Name, Age, Gender, isMarried, Passion

const personOneFirstName = "Tushar";
const personOneLastName = "Vaswani";
const personOneAge = 20;
const personOneGender = "Male";
const personOneIsMarried = false;
const personOnePassion = "Coding";

const personTwoFirstName = "Abhishek";
const personTwoLastName = "Vaswani";
const personTwoAge = 21;
const personTwoGender = "Male";
const personTwoIsMarried = false;
const personTwoPassion = "Cooking";

/*
2 ways for creating an object:
1. Literal Syntax
2. Constructor Syntax
*/

// Literal Syntax

const a = {};

// Constructor Syntax

const b = new Object();

/*
property -
propertyName: value
*/

const person1 = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
};

const person2 = {
    firstName: "Abhishek",
    lastName: "Vaswani",
    age: 21,
    gender: "Male",
    isMarried: false,
    passion: "Cooking",
};

/*
methods - 
1. methodName: function(function expression or an arrow function)
2. methodName() {
}
*/

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};

const person3 = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    introduceMe: () => console.log("My name is Tushar"),
    tellMyAge() {
        console.log(20);
    },
};

// print object

console.log(person1);
console.log(person2);
console.log(calculator);
console.log(person3);

// extended talk on constructor object - my recommendation is to always use literal syntax because there is no functional difference between them

{
    const a = new Object();
    console.log(a);
    console.log(new Object(null));
    console.log(new Object(undefined));

    // will be covered soon

    console.log(new Object("Tushar"));
    console.log(typeof new Object("Tushar"));

    a.b = 2;
    console.log(a);
    a.c = 4;
    a.d = 7;
    console.log(a);
    delete a.c;
    console.log(a);
    console.log(a.d);

    console.log(a.f);

    console.log(Object.entries(a));

    const newPerson = new Object(person1);
    console.log(newPerson);
    newPerson.age = 21;
    console.log(newPerson);

    console.log(new Object(a));
}

// shortcut for take property value from variable/constant having same name as property

{
    const firstName = "Tushar";
    const lastName = "Vaswani";
    const gender = "male";
    const isMarried = false;
    console.log({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        isMarried: isMarried,
    });
}

{
    const firstName = "Tushar";
    const lastName = "Vaswani";
    const gender = "male";
    const isMarried = false;
    const passion = "Software development";
    console.log({
        firstName,
        lastName,
        gender,
        isMarried,
        age: 20,
        passion: passion,
    });
}
