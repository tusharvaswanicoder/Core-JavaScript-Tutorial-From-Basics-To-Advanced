const obj = {};

console.log(obj);

// adding properties and methods to an object

obj.a = 4;
console.log(obj);
obj.b = () => "b";
console.log(obj);

// deleting properties and methods from an object

delete obj.a;
console.log(obj);
delete obj["b"];
console.log(obj);
