const person = {
    name: {
        first: "Tushar",
        last: "Vaswani",
    },
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    a: {
        b: {
            c: 4,
        },
        d: 5,
        e: {
            f: {
                g: 6,
            },
        },
    },
    introduceMe: function () {
        return `My name is ${this.name.first} ${this.name.last}`;
    },
    tellMyAge() {
        return `Your age is: ${this.age}`;
    },
};

console.log(person);

console.log(person.name);
console.log(person.name.first);
console.log(person.name.last);

console.log(person["name"]);
console.log(person["name"]["first"]);
console.log(person["name"]["last"]);

console.log(person.name["first"]);
console.log(person["name"].first);

console.log(person.a.b.c);
console.log(person.a.e.f.g);

person.a.e.f.g = 10;
console.log(person.a.e.f.g);

delete person.a.e.f;
console.log(person);
delete person.a;
console.log(person);

console.log(person.introduceMe());
