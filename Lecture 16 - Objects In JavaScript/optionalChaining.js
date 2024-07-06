const deeplyNestedObject = {
    e: {
        f: {
            g: {
                h: 2,
                i: 3,
            },
            j: "Hello",
            o: "Hey",
        },
        k: "Hi",
        p: {
            q: "Complexity",
            r: "Extract me!",
            /*
            s: {
                t: 3,
            }
            */
        },
    },
    m: "Top level",
    n: "I am also at top level",
    i: {
        j: "value",
        k: {
            l: {
                m: 4,
                n: 2,
            },
        },
    },
    o: {
        p: {
            // this may or may not exist
            q: {
                r: {
                    // this may or may not exists
                    s: 5,
                },
            },
        },
    },
    t: {
        u: () => "Hello",
    },
    v: () => "Hi",
};

console.log(deeplyNestedObject.e.f.g.i);

console.log(deeplyNestedObject.i);
console.log(deeplyNestedObject.i.k.l.m);

delete deeplyNestedObject.i;

console.log(deeplyNestedObject.i);
// console.log(deeplyNestedObject.i.k.l.m); -> Cannot read properties of undefined (reading 'k')

// console.log(deeplyNestedObject.e.p.s.t); -> Cannot read properties of undefined (reading 't')

console.log(deeplyNestedObject.e.p.s?.t);

console.log(deeplyNestedObject.i?.k.l.m);

console.log(deeplyNestedObject.o.p?.q.r?.s);

console.log(deeplyNestedObject.t.u());

console.log(deeplyNestedObject.t.u?.());

delete deeplyNestedObject.t.u;

// console.log(deeplyNestedObject.t.u()); -> deeplyNestedObject.t.u is not a function

console.log(deeplyNestedObject.t.u?.());

console.log(deeplyNestedObject.v());
console.log(deeplyNestedObject.v?.());

delete deeplyNestedObject.v;

console.log(deeplyNestedObject.v);
// console.log(deeplyNestedObject.v()); -> deeplyNestedObject.v is not a function
console.log(deeplyNestedObject.v?.());
