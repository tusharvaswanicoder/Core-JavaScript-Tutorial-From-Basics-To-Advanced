// Rest syntax -> is used for extracting out remaining properties during destructuring of an object

// simple object

const person = {
    firstName: "Tushar",
    lastName: "Vaswani",
    age: 20,
    gender: "Male",
    isMarried: false,
    passion: "Coding",
    introduceMe: () => "My name is Tushar",
    tellMyAge() {
        return this.age;
    },
};

{
    const {
        firstName,
        lastName,
        age,
        gender,
        introduceMe,
        passion,
        isMarried,
        tellMyAge,
    } = person;
    console.log(firstName, lastName);
    const restPersonProperties = {
        age: age,
        gender: gender,
        introduceMe: introduceMe,
        passion: passion,
        isMarried: isMarried,
        tellMyAge: tellMyAge,
    };
    console.log(restPersonProperties);
}

{
    const { firstName, lastName, ...restPersonProperties } = person;
    console.log(firstName, lastName);
    console.log(restPersonProperties);
}

// nested object

const nestedObj = {
    a: 4,
    b: {
        c: 1,
    },
    d: {
        e: {
            f: {
                g: 4,
            },
            h: 7,
        },
        i: 4,
        j: {
            k: 27,
        },
        l: {
            m: 53,
        },
    },
};

const {
    d: { e, i, ...jAndL },
    ...aAndB
} = nestedObj;

console.log(aAndB);
console.log(e);
console.log(i);
console.log(jAndL);

// what if no properties are remaining

{
    const {
        firstName,
        lastName,
        age,
        gender,
        isMarried,
        passion,
        tellMyAge,
        introduceMe,
        ...restPersonProperties
    } = person;

    console.log(restPersonProperties);
}
