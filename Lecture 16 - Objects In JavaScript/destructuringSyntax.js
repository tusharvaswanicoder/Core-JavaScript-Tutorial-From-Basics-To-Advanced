// destructuring object

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: () => 4,
};

// const a = obj.a;
// let b = obj.b;
// const c = obj.c;
// const d = obj.d;
// console.log(a, b, c);
// console.log(d);
// console.log(d());

// simple objects

const { a, c, d } = obj;
console.log(a);
// a = 4; -> error because a is constant
console.log(c);
console.log(d);
console.log(d());
let { b } = obj;
console.log(b);
b = 4; // -> works because b is a variable
console.log(b);

// giving an alternative name to destructured properties

// const { a, d } = obj; -> Cannot redeclare block-scoped variable a and d
const { a: aTwo, d: dTwo } = obj;
console.log(aTwo);
console.log(dTwo);
console.log(dTwo());

// nested objects

{
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
        a,
        b,
        d: {
            i,
            e: {
                f: { g },
            },
            j: { k: l },
            // l -> cannot redeclare block scoped variable l
            l: altForL,
        },
    } = nestedObj;
    console.log(a);
    console.log(b);
    const { c } = b;
    console.log(c);
    /*
    d, e and f wont be created

    So these should not work:

    console.log(d);
    console.log(e);
    console.log(f);
    */
    console.log(i);
    console.log(g);
    // console.log(k); -> wont work
    console.log(l);
    console.log(altForL);
}

// destructuring property that does not exist

const { e } = obj;
console.log(e, obj.e);
const nestedObj = {
    k: {
        l: 4,
    },
};
const {
    m,
    k: { n },
} = nestedObj;
console.log(m, nestedObj.m);
console.log(n, nestedObj.k.n);

// const { l: { o } } = nestedObj; -> Cannot read properties of undefined (reading 'o')
// console.log(nestedObj.l.o); -> Cannot read properties of undefined (reading 'o')

// destructuring methods and "this" -> this will get lost if you destructure

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
console.log(person.introduceMe());
const { introduceMe } = person;
console.log(introduceMe());
console.log(person.tellMyAge());
const { tellMyAge } = person;
console.log(tellMyAge());
const tellMyAgeTwo = person.tellMyAge;
console.log(tellMyAgeTwo());

// destructuring in function parameters

const fn = (a) => {
    console.log(a);
};

fn({
    a: 2,
    b: 4,
});

const fnAlternative = ({ a, b }, { c, d }, { c: g, f }) => {
    console.log(a, b, c, d, g, f);
};

fnAlternative(
    {
        a: 2,
        b: 4,
    },
    {
        c: 3,
        d: 5,
    },
    {
        c: 4,
        f: 6,
    }
);

// default values to destructured properties

const { l, o = 5 } = obj;
console.log(l);
console.log(o);

const {
    k: { p = "Tushar" },
} = nestedObj;
console.log(p);

const { l: { z } = {} } = nestedObj;
console.log(z);
