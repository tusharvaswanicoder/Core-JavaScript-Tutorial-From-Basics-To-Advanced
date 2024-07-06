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

// for(let i = 0;...;...)
for (const propertyOrMethodName in person) {
    console.log(propertyOrMethodName);
    console.log(person[propertyOrMethodName]);
    console.log(
        `Value of property ${propertyOrMethodName} is ${person[propertyOrMethodName]}`
    );
}
