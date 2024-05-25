// Blocks are used to group zero or more statements. Each block has its own scope of variables/constants.

console.log("Hi");
{
    console.log("Hello");
}
console.log("Hey");
{
}
{
    console.log("1st line");
    console.log("2nd line");
    console.log("3rd line");
    {
        console.log("Inside the outer block");
    }
}

let a = 4;
console.log(a);
{
    let b = 5;
    console.log(a);
    a += 1;
    console.log(a);
    console.log(b);
    {
        console.log(a);
        console.log(b);
        let c = 4;
        console.log(c);
    }
    // console.log(c); -> error
}
console.log(a);
// console.log(b); -> error
