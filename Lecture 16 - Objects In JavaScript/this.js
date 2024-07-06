// keyword "this"

/*
When used with methods "this" keywords helps you to reference the object inside which the method is there.
*/

const person = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    introduceMe: () => {
        console.log(this); // will print globalThis because its referenced inside arrow function
        console.log("My name is Tushar");
    },
    tellMyAge() {
        console.log(this);
        console.log(20);
    },
};

person.introduceMe();
person.tellMyAge();

const person1 = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    introduceMe: function () {
        return `My name is ${this.firstName} ${this.lastName}`;
    },
    tellMyAge() {
        return `Your age is: ${this.age}`;
    },
};

console.log(person1.introduceMe());
console.log(person1.tellMyAge());

person1.firstName = "Kartik";
person1.age = 40;
console.log(person1.introduceMe());
console.log(person1.tellMyAge());

const calculator = {
    a: 4,
    b: 5,
    add: function () {
        return this.a + this.b;
    },
    subtract: function () {
        return this.a - this.b;
    },
    multiply: function () {
        return this.a * this.b;
    },
    divide: function () {
        return this.a / this.b;
    },
    // subtract: (a, b) => a - b,
    // multiply: (a, b) => a * b,
    // divide: (a, b) => a / b,
};

console.log(calculator.add());
calculator.a = 10;
console.log(calculator.add());
