// If in a block a variable/constant with name similar to a variable/constant in any outer block is declared than it would shadow that outer variable for that block and it's inner blocks.

let a = 4;
console.log(a);
// let a = 5; -> can not redeclare variable
{
    let a = 5;
    // let a = 6; -> can not redeclare variable
    console.log(a);
    {
        console.log(a);
        {
            let a = 7;
            console.log(a);
        }
    }
    a += 2;
    console.log(a);
}
console.log(a);
