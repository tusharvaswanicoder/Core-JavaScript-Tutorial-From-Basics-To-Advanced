/*
Syntax of while loop -

while(condition) {
    block of code ...
}
*/

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Print first n numbers

i = 1;
const n = 40;
while (i <= n) {
    console.log(i);
    i++;
}

// Calculate sum of first n numbers

i = 1;
const n2 = 40;
let sum = 0;
while (i <= n2) {
    console.log(i);
    sum += i;
    i++;
}

console.log(sum);
