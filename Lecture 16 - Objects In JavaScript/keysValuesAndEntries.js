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

console.log(person);

// just access keys of the object -> Object.keys()

console.log(Object.keys(person));

// just access values of the object -> Object.values()

console.log(Object.values(person));

// access keys and values in way that you can iterating on them -> Object.entries()

console.log(Object.entries(person));
