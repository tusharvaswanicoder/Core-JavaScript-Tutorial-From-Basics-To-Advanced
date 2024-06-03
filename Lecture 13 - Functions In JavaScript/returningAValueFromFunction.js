function introduceMe(name, age) {
    return `My name is ${name} and my age is ${age}`;
}

function addFullStop(string) {
    return string + ".";
}

console.log(introduceMe("Tushar", 20));
const introductionForTushar = introduceMe("Tushar", 20);
console.log(introductionForTushar);
console.log(addFullStop(introductionForTushar));
console.log(addFullStop(introduceMe("Tushar", 20)));

function introduceMeWithoutReturn(name, age) {
    console.log(`My name is ${name} and my age is ${age}`);
}

console.log(introduceMeWithoutReturn("Tushar", 20));

function addTwoNumbers(a, b) {
    return a + b;
}

console.log(addTwoNumbers(2, 3));

function addTwoNumbersTwo(a, b) {
    console.log(a + b);
}

console.log(addTwoNumbersTwo(2, 3));

function addTwoNumbersThree(a, b) {
    console.log(a + b);
    return undefined;
}

console.log(addTwoNumbersThree(2, 3));

function addTwoNumbersFour(a, b) {
    console.log(a + b);
    return;
}

console.log(addTwoNumbersFour(2, 3));

function addThreeNumbers(a, b, c) {
    console.log(a, b, c);
    return a + b + c;
    console.log(a + b + c);
}

console.log(addThreeNumbers(1, 2, 3));
