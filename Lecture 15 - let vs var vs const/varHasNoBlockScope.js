let a = 1;
var c = 3;
console.log(a);
console.log(c);
{
    console.log(a);
    let b = 2;
    console.log(b);
    var d = 4;
    console.log(d);
    {
        console.log(b);
        console.log(d);
    }
    console.log(c);
    console.log(d);
}
// console.log(b); -> b is not defined
console.log(c);
console.log(d); // -> because var has not block scope
