// Introduction - is used for extracting out elements into individual variables/constants from an array

// On Single Dimension Array

{
    const arr = [1, 2, 3, 4];
    const [a, b, c, d] = arr;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

// On Multi Dimensional Array

{
    const multiDimensionalArr = [
        1,
        2,
        [3, 4, [5, 6, [4, 8]], 2324, [4, 5, 6]],
        4343,
    ];
    const [a, b, [c, d, [e, f, [g]], h]] = multiDimensionalArr;
    console.log(b, g, h);
}

// Skipping Items While Destructuring

{
    const multiDimensionalArr = [
        1,
        2,
        [3, 4, [5, 6, [4, 8]], 2324, [4, 5, 6]],
        4343,
    ];
    const [, b, [, , [, , [g]], h]] = multiDimensionalArr;
    console.log(b, g, h);
}

// Destructuring Item That Does Not Exist

{
    const arr = [1, 2, 3, 4];
    const [a, b, c, d, e, f] = arr;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

// Destructuring In Function Parameters

{
    const introduceMultiplePerson = ([a, b, c]) => {
        console.log(`Hi ${a}, ${b} and ${c}`);
    };
    introduceMultiplePerson(["Tushar", "Joe", "Ajay"]);
}

// Default Value To Destructured Item

{
    const arr = [1, 2, 3, 4];
    const [a, b, c, d, e, f = 10] = arr;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
