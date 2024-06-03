// functions without a name is called anonymous function

// not an anonymous function
function a() {
    console.log("a");
}

// anonymous function -> function still does not have any name it's just the constant holding that function with a name
const b = function () {
    console.log("b");
};

// not an anymous function
const c = function d() {
    console.log("c or d");
};

// anonymous function
const d = () => {
    console.log("d");
};

const e = (f) => {
    f();
};

// function being passed to e is an anonymous function
e(() => {
    console.log("f");
});

// not an anonymous function
e(function g() {
    console.log("g");
});

// IIFE (Immediately invoking function expression)

const h = () => {
    console.log("h");
};

e(function () {}); // works fine
/*
Will cause syntax issue -

function() {
}

() => {}
*/

(function () {
    console.log("I am IIFE!");
})();
