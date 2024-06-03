const e = (f) => {
    f();
};

e(() => {
    console.log("f");
});

e(function g() {
    console.log("g");
});
