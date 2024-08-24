// Introduction - is used for extracting out items of an array into another array.

// On Single Dimension Array

{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [5, 6, 7, 8];
    const arr3 = [9, 10, 11, ...arr1, 12, 14, ...arr2];
    console.log(arr3);
}

// On Multi Dimension Array

{
    const multiDimensionalArr1 = [
        1,
        2,
        [4, 56, 6, [6, 67, 34], "dsd", "sfdv", true, [false, NaN]],
        23324,
        "sdcsdc",
    ];
    const multiDimensionalArr2 = [
        1,
        2,
        [3, 4, [5, 6, [4, 8, ...multiDimensionalArr1]], 2324, [4, 5, 6]],
        4343,
    ];
    console.log(multiDimensionalArr2);
}

// No Items Are Remaining

{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [];
    const arr3 = [9, 10, 11, ...arr1, 12, 14, ...arr2];
    console.log(arr3);
}

// Spreading Multiple Arrays

// Spreading undefined and null and string

{
    const arr1 = [1, 2, 3, 4];
    const arr2 = [];
    const arr3 = [
        9,
        10,
        11,
        ..."Tushar", // -> an iterator so can spread
        ...arr1,
        12,
        14,
        ...arr2,
        // ...undefined, -> not an iterator so can't spread
        // ...null, -> not an iterator so can't spread
        ..."abc", // -> an iterator so can spread
    ];
    console.log(arr3);
}
