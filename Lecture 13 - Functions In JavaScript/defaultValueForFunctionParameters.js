function printNumberUptoN(n) {
    console.log(n);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoN();
printNumberUptoN(20);

function printNumberUptoNWithDefault(n = 10) {
    console.log(n);
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

printNumberUptoNWithDefault();
printNumberUptoNWithDefault(20);

function addThreeNumbers(a, b, c) {
    console.log(a, b, c);
    console.log(a + b + c);
}

addThreeNumbers();
addThreeNumbers(1, 2, 3);

function addThreeNumbers1(a = 10, b = 20, c = 30) {
    console.log(a, b, c);
    console.log(a + b + c);
}

addThreeNumbers1(1, 2, 3);
addThreeNumbers1();
addThreeNumbers1(20);
addThreeNumbers1(20, 40);
addThreeNumbers1(undefined, 40, undefined);
addThreeNumbers1(undefined, 40, 50);

/*
null vs undefined --->

undefined - not defined
null - intentional absence of value
*/

addThreeNumbers1(null, 40, undefined);
addThreeNumbers1(null, 40, 50);
