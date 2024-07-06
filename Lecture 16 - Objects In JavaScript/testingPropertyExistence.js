const person = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    a: {
        b: 4,
        c: 5,
    },
    introduceMe: function () {
        return `My name is ${this.firstName} ${this.lastName}`;
    },
    tellMyAge() {
        return `Your age is: ${this.age}`;
    },
};

console.log("firstName" in person);
console.log("tellMyAge" in person);
console.log("b" in person);
