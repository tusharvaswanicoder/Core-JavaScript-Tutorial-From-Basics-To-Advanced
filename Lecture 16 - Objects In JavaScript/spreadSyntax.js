// Spread syntax -> is used for extracting out properties of an object into another object.

// simple object

{
    const obj = {
        a: 2,
        b: 4,
    };
    const obj1 = {
        c: 3,
        d: 5,
        a: obj.a,
        b: obj.b,
    };
    console.log(obj);
    console.log(obj1);

    const obj2 = {
        c: 3,
        d: 5,
        ...obj,
    };
    console.log(obj2);
}

// nested object

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
    const nestedObj2 = {
        f: {
            g: 3,
            h: 4,
        },
        ...nestedObj,
    };
    console.log(nestedObj2);
    const nestedObj3 = {
        g: {
            h: 3,
            ...nestedObj.d,
        },
        ...nestedObj.d.e,
    };
    console.log(nestedObj3);
}

// properties spread into an object having one or more of these properties already inside it -> overwriting will occur

{
    const obj = {
        a: 3,
        b: 4,
    };
    const obj1 = {
        a: 5,
        c: 4,
        ...obj,
    };
    console.log(obj1);
    const obj2 = {
        ...obj,
        a: 5,
        c: 4,
    };
    console.log(obj2);

    const nestedObj1 = {
        a: {
            b: 3,
            c: 4,
        },
        d: {
            e: 5,
        },
    };
    const nestedObj2 = {
        f: {
            g: 4,
            h: 10,
        },
        a: {
            i: {
                j: 4,
            },
        },
        ...nestedObj1,
    };
    console.log(nestedObj2);
}

// spread multiple objects

{
    const obj1 = {
        a: 1,
        b: 2,
    };
    const obj2 = {
        c: 3,
        a: 4,
    };
    const obj3 = {
        d: 5,
        e: 6,
    };
    const obj = {
        ...obj1,
        ...obj2,
        f: 4,
        g: 7,
        ...obj3,
    };
    console.log(obj);
}

// what if no properties are remaining

{
    const obj1 = {
        a: 1,
        b: 2,
    };
    const obj2 = {};
    const obj3 = {
        d: 5,
        e: 6,
    };
    const obj = {
        ...obj1,
        ...obj2,
        f: 4,
        g: 7,
        ...obj3,
    };
    console.log(obj);
}

// undefined and null

{
    const obj1 = {
        a: 2,
        b: 3,
    };
    const obj2 = null;
    const obj3 = undefined;
    const obj = {
        ...obj1,
        c: 4,
        ...obj2,
        ...obj3,
        ...null,
        ...undefined,
    };
    console.log(obj);
}

// Practical aspect: Conditionally put properties/methods in object

/*
If person is married and gender is male:
Then it will add two properties into that object -> wifeName, wifeAge

If person is married and gender is female:
Then it will add two properties into that object -> husbandName, husbandAge

If person is not married:
Then it will return the original object
*/
const getFinalPersonObjectWithoutSpreadSyntax = ({
    firstName,
    lastName,
    gender,
    isMarried,
}) => {
    if (isMarried) {
        if (gender === "male")
            return {
                firstName,
                lastName,
                gender,
                isMarried,
                wifeName: "",
                wifeAge: 20,
            };
        else
            return {
                firstName,
                lastName,
                gender,
                isMarried,
                husbandName: "",
                husbandAge: 20,
            };
    } else
        return {
            firstName,
            lastName,
            gender,
            isMarried,
        };
};

const getFinalPersonObjectWithSpreadSyntax = ({
    firstName,
    lastName,
    gender,
    isMarried,
}) => {
    return {
        firstName,
        lastName,
        gender,
        isMarried,
        ...(isMarried
            ? gender === "male"
                ? {
                      wifeName: "",
                      wifeAge: 20,
                  }
                : {
                      husbandName: "",
                      husbandAge: 20,
                  }
            : {}),
    };
};

const firstName = "Tushar";
const lastName = "Vaswani";
const gender = "male";
const isMarried = false;
console.log(
    getFinalPersonObjectWithoutSpreadSyntax({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        isMarried: isMarried,
    })
);
console.log(
    getFinalPersonObjectWithSpreadSyntax({
        firstName: "Tushar",
        lastName: "Vaswani",
        gender: "male",
        isMarried: false,
    })
);
console.log(
    getFinalPersonObjectWithSpreadSyntax({
        firstName: "Tushar",
        lastName: "Vaswani",
        gender: "male",
        isMarried: true,
    })
);
console.log(
    getFinalPersonObjectWithSpreadSyntax({
        firstName: "Tushar",
        lastName: "Vaswani",
        gender: "female",
        isMarried: true,
    })
);
