// array indexes -> indexes start from 0
// First element - 0
// Second element - 1
// Third element - 2
// ....

const obj = {
    a: 1,
    b: 2,
};

console.log(obj.a);
obj.a = 4;
console.log(obj.a);
console.log(obj.c);

const favColors = ["red", "green", "purple", "blue"];

// accessing value at any position in an array

// favColors.0 / favColors[0]

// console.log(favColors.0); -> error
console.log(favColors[0]);

console.log(favColors[2]);

// accessing last nth element

console.log(favColors[3]);
// length of favColors -> 4
// last element index was -> 3
/*
relation -> last element index = length - 1
last nth element index = length - n
*/

console.log(favColors[favColors.length - 1]);
console.log(favColors[favColors.length - 2]);

const accessLastNthElement = (array, n) => array[array.length - n];

console.log(accessLastNthElement(favColors, 4));

// modifying value at any position in an array

favColors[0] = "yellow";
console.log(favColors);

// accessing index that does not exist

console.log(favColors[4]);
console.log(favColors.length);
console.log(favColors.abc);

// modifying length

console.log(favColors.length);
favColors.length = 100;
console.log(favColors.length);
