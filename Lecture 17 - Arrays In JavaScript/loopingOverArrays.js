const arr = [1, 2, 3, 4, 5, "Tushar"];

// for/while/do-while loop

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for..in loop -> this is mainly for objects (not recommended for iterables)

for (let property in arr) {
    console.log(property);
    console.log(arr[property]);
}

// for..of loop -> especially for iterables (recommended for iterables)

for (const item of arr) {
    console.log(item);
}

// Difference between for in and for of loop

// behaviour with holes

const arr1 = [1, 2, 3, 4];
arr1[40] = 20;
console.log(arr1);
console.log(arr1.length);

for (const property in arr1) {
    // holes were ignored by for in loop
    console.log(property);
    console.log(arr1[property]);
}
for (const item of arr1) {
    // holes were not ignored and were given as undefined
    console.log(typeof item);
    console.log(item);
}

// behaviour with random properties

const arr2 = [1, 2, 3, 4];
arr2.b = 5;
arr2.c = {
    d: 4,
};

console.log(arr2);

for (const property in arr2) {
    // loops over random properties as well
    console.log(property);
    console.log(arr1[property]);
}
for (const item of arr2) {
    // does not loop over random properties
    console.log(typeof item);
    console.log(item);
}
