const obj = {
    a: 1,
    b: 2,
};
obj.c = 3;
console.log(obj);

// using index

const arr = [1, 2, 3];
console.log(arr.length);
arr[3] = 4;
console.log(arr);
console.log(arr.length);

// creating holes -> negative impact on performance & some array methods consider holes as elements whereas some array methods ignores them

console.log(arr);
arr[5] = 5; // skipped index 4
console.log(arr);
console.log(arr[4]);
console.log(arr.length);

arr[500] = 70;
console.log(arr);
console.log(arr.length);

// add random properties -> performance issues

console.log(arr.length);
console.log(arr.a);
arr.a = 4;
console.log(arr.a);
console.log(arr);
console.log(arr.length);

// using push(safer method) -> to be discussed soon
