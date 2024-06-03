// Functions help to run a block of code at different places without copying the block of code over there

// Without functions:

{
    const n = 40;
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

console.log("Ran 1st time");

{
    const n = 40;
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

console.log("Ran 2nd time");

{
    const n = 40;
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

console.log("Ran 3rd and last time");

// With functions:

function printNumberUptoN() {
    const n = 40;
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoN();

console.log("Ran 1st time");

printNumberUptoN();

console.log("Ran 2nd time");

printNumberUptoN();

console.log("Ran 3rd and last time");
