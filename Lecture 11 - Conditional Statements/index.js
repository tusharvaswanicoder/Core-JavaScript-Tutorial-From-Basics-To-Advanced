/*
Conditional statements allow you to execute specific blocks of code based on conditions. We need to cover these things:
1. If clause
2. Else clause
3. Else if clause
4. Switch statement
*/

// Basic example

let a = 4;
a > 4 ? console.log("a is greater than 4") : undefined;
a = 6;
a > 4 ? console.log("a is greater than 4") : undefined;

if (a > 4) {
    console.log("a is greater than 4");
    console.log("Hey");
}

a = 3;

if (a > 4) {
    console.log("a is greater than 4");
    console.log("Hey");
}

// Vote eligibility checker

let age = 18;

age >= 18 ? console.log("You can vote!") : console.log("You can't vote!");

if (age >= 18) {
    console.log("You can vote!");
}

age = 17;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You can't vote!");
}

age = 19;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You can't vote!");
}

/*
else can't be used indepently this will cause error -

else {
    console.log("else clause")
}
*/

/*
Temperature state checker -
Temp < 0 then Freezing weather
Temp 0-10 then Very Cold weather
Temp 10-20 then Cold weather
Temp 20-30 then Normal Temp
Temp 30-40 then Its Hot
Temp >=40 then Its Very Hot
*/

let temp = 20;

if (temp < 0) {
    console.log("Freezing weather");
} else if (temp >= 0 && temp < 10) {
    // true && false -> false
    console.log("Very Cold weather");
} else if (temp >= 10 && temp < 20) {
    console.log("Cold weather");
} else if (temp >= 20 && temp < 30) {
    console.log("Normal Temp");
} else if (temp >= 30 && temp < 40) {
    console.log("Its Hot");
} else {
    console.log("Its Very Hot");
}

temp < 0
    ? console.log("Freezing weather")
    : temp >= 0 && temp < 10
    ? console.log("Very cold weather")
    : temp >= 10 && temp < 20
    ? console.log("Cold weather")
    : temp >= 20 && temp < 30
    ? console.log("Normal Temp")
    : temp >= 30 && temp < 40
    ? console.log("Its Hot")
    : console.log("Its Very Hot");

// Curly braces are optional if there is only one statement in the block

if (temp < 0) console.log("Freezing weather");
else if (temp >= 0 && temp < 10) {
    console.log("Very Cold weather");
} else if (temp >= 10 && temp < 20) {
    console.log("Cold weather");
} else if (temp >= 20 && temp < 30) console.log("Normal Temp");
else if (temp >= 30 && temp < 40) {
    console.log("Its Hot");
} else {
    console.log("Its Very Hot");
}

if (temp < 0) console.log("Freezing weather");
else if (temp >= 0 && temp < 10) console.log("Very Cold weather");
else if (temp >= 10 && temp < 20) console.log("Cold weather");
else if (temp >= 20 && temp < 30) console.log("Normal Temp");
else if (temp >= 30 && temp < 40) console.log("Its Hot");
else console.log("Its Very Hot");

// There can be nested if, else & else if

const b = 4;

if (b > 4) {
    console.log("b is greater than 4");
} else {
    if (b === 4) {
        console.log("b is equal to 4");
    } else {
        console.log("b is less than 4");
    }
}

if (b > 4) {
    console.log("b is greater than 4");
} else if (b === 4) {
    const c = 4;
    console.log(c);
    console.log("b is equal to 4");
} else {
    console.log("b is less than 4");
}

// console.log(c); -> c is not defined

if (b > 4) {
    console.log("b is greater than 4");
} else if (b === 4) {
    const b = 8;
    console.log(b);
    console.log("b is equal to 4");
} else {
    console.log("b is less than 4");
}

console.log(b);

// Switch statement

let day = 4;

if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else if (day === 7) {
    console.log("Sunday");
} else {
    console.log("Invalid day");
}

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        console.log("Hey");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// Switch statement equality check is strict

console.log(1 == "1");
console.log(1 === "1");

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        console.log("Hey");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// grouping cases

let c = 2;

switch (c) {
    case 1:
        console.log("1 or 2");
        break;
    case 2:
        console.log("1 or 2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4 or 5");
        break;
    case 5:
        console.log("4 or 5");
        break;
    default:
        console.log("Invalid");
        break;
}

c = 4;

switch (c) {
    case 1:
    case 2:
        console.log("1 or 2");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
    case 5:
        console.log("4 or 5");
        break;
    default:
        console.log("Invalid");
        break;
}

// why breaks have to be there?

day = 7;

switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    case 4:
        console.log("Thursday");
    case 5:
        console.log("Friday");
    case 6:
        console.log("Saturday");
    case 7:
        console.log("Sunday");
}

// Temperature example with switch statement

/*
if (temp < 0) console.log("Freezing weather");
else if (temp >= 0 && temp < 10) console.log("Very Cold weather");
else if (temp >= 10 && temp < 20) console.log("Cold weather");
else if (temp >= 20 && temp < 30) console.log("Normal Temp");
else if (temp >= 30 && temp < 40) console.log("Its Hot");
else console.log("Its Very Hot");
*/

switch (true) {
    case temp < 0:
        console.log("Freezing weather");
        break;
    case temp >= 0 && temp < 10:
        console.log("Very Cold weather");
        break;
    case temp >= 10 && temp < 20:
        console.log("Cold weather");
        break;
    case temp >= 20 && temp < 30:
        console.log("Normal Temp");
        break;
    case temp >= 30 && temp < 40:
        console.log("Its Hot");
        break;
    default:
        console.log("Its Very Hot");
        break;
}
