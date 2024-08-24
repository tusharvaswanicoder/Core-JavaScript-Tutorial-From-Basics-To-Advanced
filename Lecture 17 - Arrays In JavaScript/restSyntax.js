// Introduction - is used for extracting out remaining items during destructuring of an array

// On Single Dimension Array

{
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const [a, b, ...c] = arr;
    console.log(a, b, c);
}

// On Multi Dimensional Array

{
    const multiDimensionalArr = [
        1,
        2,
        [3, 4, [5, 6, [4, 8]], 2324, [4, 5, 6]],
        4343,
    ];
    const [, b, [, , [, , [g]], h, ...i], ...j] = multiDimensionalArr;
    console.log(b, g, h, i, j);
}

// Rest After Destructuring All Items

{
    const arr = [1, 2, 3, 4];
    const [a, b, c, d, ...e] = arr;
    console.log(a, b, c, d, e);
}
