/*
Nullish coalescing returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. (??)

a ?? b

*/

console.log(4 ?? 2);
console.log(null ?? 3);
console.log(undefined ?? 4);
console.log(4 ?? null);
console.log(3 ?? undefined);
console.log(null ?? undefined);
console.log(undefined ?? null);
console.log(undefined ?? undefined);
console.log(null ?? null);

console.log(console.log("Hi") ?? console.log("Hey"));
console.log(4 ?? console.log("Hey there!"));
console.log(null ?? console.log("Hey there!"));
