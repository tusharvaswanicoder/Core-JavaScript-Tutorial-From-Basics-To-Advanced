// what is multidemensional array? -> its basically nested array

// 2d array
const arr = [
    [1, 2], // 0
    [3, 4], // 1
    [5, 6], // 2
];
// 3d array
const arr1 = [
    [
        // 0
        [1, 2],
        [3, 4],
        [5, 6],
    ],
    [
        // 1
        [7, 8], // 0
        [9, 10], // 1
        [11, 12], // 2
    ],
    [
        // 2
        [13, 14],
        [15, 16],
        [17, 18],
    ],
];

// accessing/modifying items

const internalArray = arr[1];
console.log(internalArray[1]);

console.log(arr[2][1]);
console.log(arr);
arr[2][1] = 50;
console.log(arr);

console.log(arr1[1][1][1]);

// adding new values

arr[2][2] = 7;
console.log(arr);

// looping over arrays

for (const innerArray of arr) {
    console.log(innerArray);
    for (const item of innerArray) {
        console.log(item);
    }
}
