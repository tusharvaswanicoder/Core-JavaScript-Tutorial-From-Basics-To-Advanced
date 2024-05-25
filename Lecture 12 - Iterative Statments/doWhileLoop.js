/*
Syntax -
do {
    block of code
} while(condition)
*/

let i = 1;

while (i >= 10) {
    console.log(i);
    i++;
}

console.log(i);
i = 1;

do {
    console.log(i);
    i++;
} while (i <= 10);

i = 1;

do {
    console.log(i);
    i++;
} while (i >= 10);

/*
A program that generates a random number and then asks user for inputting a number and stops only when he enters correct number.

const randomNumber = generateRandomNumber();
let userGuessedRandomNumber = false;
do {
    const userInput = getUserInput();
    if(userInput === randomNumber)
        userGuessedRandomNumber = true;
} while(!userGuessedRandomNumber)
*/
