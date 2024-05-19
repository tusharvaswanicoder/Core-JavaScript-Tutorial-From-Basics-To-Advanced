/*
String operators are used to perform string operations on two or more operands out of which atleast one should be string and returns a string value.

Both of these are binary operators

+ -> concatenation
+= -> concatenation assigment
*/

// concatenation (+)

console.log(2 + 3);
console.log("2" + 3);
console.log(2 + "3");
console.log("2" + "3");
console.log("Tushar " + "Vaswani");
console.log("My name is " + "Tushar Vaswani" + " and my age is " + 18 + ".");

// concatenation assignment (+=)

let a = 1;
a += 2;
console.log(a);
let b = "1";
b += 2; // b = b + 2 => b = "1" + 2 => b = "12"
console.log(b);
let finalStr = "";
finalStr += "My name is ";
console.log(finalStr);
finalStr += "Tushar Vaswani";
console.log(finalStr);
finalStr += " and my age is ";
console.log(finalStr);
finalStr += 18;
console.log(finalStr);
finalStr += ".";
console.log(finalStr);
