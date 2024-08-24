// Array -> is a class -> it helps you to create an object

// literal syntax

{
    const arr = [];
    console.log(arr, arr.length);
}

// constructor syntax

{
    // creating empty array
    const arr = new Array(); // initializing a class -> creates an object -> in this case object is basically an array
    console.log(arr, arr.length);
    const arr1 = Array(); // calling the class
    console.log(arr1, arr1.length);

    // creating array with some elements
    const favColors = new Array("red");
    console.log(favColors);
    console.log(new Array("red", "green", "yellow", "blue"));
    console.log(new Array(10, 20, 30));

    // creating array of some length
    const arr2 = new Array(10); // it wont create this array - [10]
    console.log(arr2);
}

/*
Array is the class
new Array()/Array() that gives you an actual array

Array class contains -> static properties and static methods
new Array()/Array() contains -> instance properties and instance methods
*/

// Methods on Array class(static methods)

// Array.from(<iterable-value>, [<mapFn>])

/*
Some iterators -
1. array
2. set -> later on
3. string
*/

{
    const arr = [1, 2, 3, 4];
    for (const item of arr) {
        console.log(item);
    }
    const string = "1349iksjkajsdSADasc";
    for (const char of string) {
        console.log(char);
    }
}

{
    console.log(Array.from([1, 2, 3])); // does not make any sense -> you are creating array from array
    console.log(Array.from("1349iksjkajsdSADasc"));
    console.log(
        Array.from("1349iksjkajsdSADasc", (value, index) => {
            console.log(`${index} -> ${value}`);
            return `Index ${index} has value: ${value}`;
        })
    );
}

{
    console.log(Array.from); // this is fine and from exists
    const arr = [1, 2, 3];
    console.log(arr.from); // from does not exist on actual array
}

// Array.isArray(<value>)

{
    console.log(typeof [1, 2, 3]); // this will return you object
    console.log(Array.isArray(12));
    console.log(Array.isArray("123asd"));
    console.log(Array.isArray(undefined));
    console.log(Array.isArray(null));
    console.log(
        Array.isArray({
            a: 2,
            b: 3,
        })
    );
    console.log(Array.isArray([]));
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray(new Array()));
    console.log(Array.isArray(new Array(20)));
    console.log(Array.isArray(new Array("red", "green", "yellow")));
}

{
    const accessLastNthElement = (array, n) => {
        if (!Array.isArray(array)) console.log("You have not passed an array");
        else return array[array.length - n];
    };

    console.log(accessLastNthElement(null, 1));
    console.log(accessLastNthElement([1, 2, 3], 1));
}

// Array.of([<element1>, <element2>, ......])

{
    console.log(new Array("red", "green", "purple"));
    console.log(Array.of());
    console.log(Array.of(1)); // creates an array -> [1]
    console.log(new Array(1)); // creates an array of size 1
    console.log(Array.of(1, 2));
    console.log(Array.of(1, 2, "red"));
}

// Methods on array itself

const persons = [
    { name: "Alice", age: 26 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 14 },
    { name: "David", age: 18 },
    { name: "Eve", age: 17 },
    { name: "Frank", age: 19 },
    { name: "Grace", age: 15 },
    { name: "Hank", age: 22 },
    { name: "Ivy", age: 13 },
    { name: "Jack", age: 20 },
    { name: "Karen", age: 12 },
    { name: "Leo", age: 23 },
    { name: "Mona", age: 11 },
    { name: "Ned", age: 24 },
    { name: "Olive", age: 10 },
    { name: "Paul", age: 25 },
    { name: "Quinn", age: 9 },
    { name: "Rick", age: 26 },
    { name: "Sara", age: 8 },
    { name: "Tom", age: 27 },
    { name: "Uma", age: 7 },
    { name: "Vince", age: 28 },
    { name: "Wendy", age: 6 },
    { name: "Xander", age: 29 },
    { name: "Yara", age: 5 },
    { name: "Zack", age: 30 },
    { name: "Amy", age: 17 },
    { name: "Brian", age: 19 },
    { name: "Cathy", age: 15 },
    { name: "Dylan", age: 18 },
];

const orders = [
    { id: 1, items: ["banana", "milk", "mango"] },
    { id: 2, items: ["bread", "cheese", "lettuce"] },
    { id: 3, items: ["apple", "orange", "grapes"] },
    { id: 4, items: ["carrot", "spinach", "broccoli"] },
    { id: 5, items: ["tomato", "onion", "potato"] },
    { id: 6, items: ["yogurt", "granola", "blueberries"] },
    { id: 7, items: ["chicken", "rice", "beans"] },
    { id: 8, items: ["salmon", "quinoa", "asparagus"] },
    { id: 9, items: ["eggs", "bacon", "toast"] },
    { id: 10, items: ["pasta", "tomato sauce", "meatballs"] },
    { id: 11, items: ["cereal", "milk", "bananas"] },
    { id: 12, items: ["shrimp", "garlic", "butter"] },
    { id: 13, items: ["pork chops", "applesauce", "green beans"] },
    { id: 14, items: ["steak", "mushrooms", "potatoes"] },
    { id: 15, items: ["hamburger", "lettuce", "tomato"] },
    { id: 16, items: ["avocado", "toast", "eggs"] },
    { id: 17, items: ["pancakes", "maple syrup", "bacon"] },
    { id: 18, items: ["tacos", "lettuce", "cheese"] },
    { id: 19, items: ["sushi", "soy sauce", "wasabi"] },
    { id: 20, items: ["pizza", "pepperoni", "cheese"] },
    { id: 21, items: ["french fries", "ketchup", "burger"] },
    { id: 22, items: ["fish", "chips", "lemon"] },
    { id: 23, items: ["sausage", "eggs", "toast"] },
    { id: 24, items: ["waffles", "butter", "syrup"] },
    { id: 25, items: ["bagel", "cream cheese", "smoked salmon"] },
    { id: 26, items: ["oatmeal", "honey", "strawberries"] },
    { id: 27, items: ["beef stew", "carrots", "potatoes"] },
    { id: 28, items: ["grilled cheese", "tomato soup", "pickles"] },
    { id: 29, items: ["chocolate cake", "ice cream", "whipped cream"] },
    { id: 30, items: ["turkey", "mashed potatoes", "gravy"] },
];

// at(<index>)

{
    const arr = [1, 2, 3, 4];

    // in square bracket syntax you have to pass + integer values
    console.log(arr[1]);
    console.log(arr[3]);
    console.log(arr[arr.length - 1]);

    console.log(arr.at(1));
    console.log(arr.at(3));
    console.log(arr.at(arr.length - 1));
    // .at support negative indexes
    console.log(arr.at(-1));
    console.log(arr.at(-2));
    console.log(arr.at(-3));
    console.log(arr.at(-4));
    console.log(arr.at(-5));
}

// concat([<element1>, <element2>, ......])

{
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    console.log(arr1.concat(arr2));
    console.log(arr1);
    console.log(arr2);
    const arr3 = ["red", "green"];
    console.log(arr1.concat(arr2, arr3));
    console.log(arr2.concat(arr1));
    console.log(arr2.concat(arr3, arr1));
}

// some(<callback-fn>) / every(<callback-fn>)

{
    const arr = [1, 2, 3];
    console.log(
        arr.some((number) => {
            console.log(number, number > 1);
            return number > 1;
        })
    );
    console.log(
        arr.some((number) => {
            console.log(number, number > 4);
            return number > 4;
        })
    );

    // check if persons array has atleast one person that can not vote
    console.log(
        persons.some(({ age }) => {
            console.log(age);
            return age < 18;
        })
    );

    console.log(
        arr.every((number) => {
            console.log(number, number < 5);
            return number < 5;
        })
    );
    console.log(
        arr.every((number) => {
            console.log(number, number > 1);
            return number > 1;
        })
    );
}

// fill(<value>, [<start>, <end>])

{
    console.log(new Array(5));
    console.log(new Array(5).fill(1));

    const arr1 = [1, 2, 3, 4];
    console.log(arr1.fill(8));
    console.log(arr1);

    const arr2 = [1, 2, 3, 4];
    arr2.fill(5, 2);
    console.log(arr2);

    const arr3 = [1, 2, 3, 4, 5, 6, 7, 8];
    arr3.fill(6, 3, 5);
    console.log(arr3);
}

// filter(<callback-fn>)

{
    // you want to get all the person who can vote
    console.log(persons);
    const personsWhoCanVote = persons.filter(({ age }) => age >= 18);
    console.log(personsWhoCanVote);

    // remove an element from particular index
    const removeElementFromAnIndex = (arr, index) =>
        arr.filter((_, elemIndex) => elemIndex !== index);
    console.log(removeElementFromAnIndex(persons, 4));
}

// find(<callback-fn>) / findIndex(<callback-fn>)

{
    // find the first person in the persons array who has age of 18
    const firstPersonWithAgeOf18 = persons.find(({ age }) => age === 18);
    console.log(firstPersonWithAgeOf18);
    console.log(persons.find(({ age }) => age === 100));

    const firstPersonWithAgeOf18Index = persons.findIndex(
        ({ age }) => age === 18
    );
    console.log(firstPersonWithAgeOf18Index);
    console.log(persons[firstPersonWithAgeOf18Index]);
    console.log(persons.findIndex(({ age }) => age === 100));
}

// findLast(<callback-fn>) / findLastIndex(<callback-fn>)

{
    // find the last person in the persons array who has age of 18
    const lastPersonWithAgeOf18 = persons.findLast(({ age }) => age === 18);
    console.log(lastPersonWithAgeOf18);
    console.log(persons.findLast(({ age }) => age === 100));

    const lastPersonWithAgeOf18Index = persons.findLastIndex(
        ({ age }) => age === 18
    );
    console.log(lastPersonWithAgeOf18Index);
    console.log(persons[lastPersonWithAgeOf18Index]);
    console.log(persons.findLastIndex(({ age }) => age === 100));
}

// flat([<depth>])

{
    const arr1 = [1, 2, 3, [4, 5], [56, 7, [7, 9]]];
    console.log(arr1.flat()); // depth - 1
    console.log(arr1);
    console.log(arr1.flat(2));

    // you dont know depth of array but you want to make it single dimensional
    const arr2 = [
        [1, 2],
        [
            3,
            [4, 5, 6, [5, 6, [12, 234]]],
            [2323, 134, [2323, 1212, 2334, 4, [344]]],
        ],
        [23, [12, [23, [2323]]]],
    ];
    console.log(arr2.flat(Infinity));
}

// forEach(<callback-fn>) -> you cant use break as you can use in case of for of or for loop

{
    for (const person of persons) {
        console.log(`${person.name} is ${person.age} years old!`);
    }
    persons.forEach((person) => {
        console.log(`${person.name} is ${person.age} years old!`);
    });
}

// map(<callback-fn>) / flatMap(<callback-fn>)

{
    // create an array from persons object that holds name of each person
    console.log(persons.map((person) => person.name));

    // transforming shapes of object
    console.log(
        persons.map((person) => ({
            fullName: person.name,
            yearsOld: person.age,
        }))
    );

    // map can not be used for skipping an item/element
    console.log(
        persons.map((person, index) => {
            if (index !== 0)
                return {
                    fullName: person.name,
                    yearsOld: person.age,
                };
        })
    );

    // transform each item of an array to some other type -> type conversion on each item
    const arr1 = [1, 2, 3, 4, 5];
    console.log(arr1.map((number) => `${number}`));
    console.log(arr1.map((number) => String(number)));
    console.log(arr1.map(String));
}

{
    const itemsInEachOrder = orders.map(({ items }) => items);
    console.log(itemsInEachOrder);
    const itemsInAllOrders = itemsInEachOrder.flat(); // depth - 1
    console.log(itemsInAllOrders);

    // this is more efficient
    console.log(orders.flatMap(({ items }) => items));
}

// includes(<search-elem>, [<from-index>])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.includes("mango"));
    console.log(fruits.includes("kiwi"));

    console.log(fruits.includes("orange"));
    console.log(fruits.includes("orange", 2));

    console.log(fruits.includes("peach"));
    console.log(fruits.includes("peach", 3));
}

// indexOf(<search-elem>, [<from-index>]) / lastIndexOf(<search-elem>, [<from-index>])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.indexOf("mango"));
    console.log(fruits.indexOf("kiwi"));

    console.log(fruits.indexOf("orange"));
    console.log(fruits.indexOf("orange", 2));

    console.log(fruits.indexOf("peach"));
    console.log(fruits.indexOf("peach", 3));

    console.log(fruits.lastIndexOf("orange"));
    console.log(fruits.lastIndexOf("peach"));
}

// join([<separator>])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.join());
    console.log(fruits.join(""));
    console.log(fruits.join(" "));
    console.log(fruits.join("  "));
    console.log(fruits.join(", "));
}

// pop() / shift()

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.pop());
    console.log(fruits);
    console.log(fruits.shift());
    console.log(fruits);
}

// push([<element1>, <element2>, ......]) / unshift([<element1>, <element2>, ......])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    fruits.push();
    fruits.unshift();
    console.log(fruits);
    fruits.push("kiwi");
    console.log(fruits);
    fruits.unshift("dragonfruit");
    console.log(fruits);

    console.log(fruits.push("strawberry", "guava", "lichi"));
    console.log(fruits);
    console.log(fruits.unshift("a", "b", "c"));
    console.log(fruits);
}

// reduce(<callback-fn>, [<initial-value>]) / reduceRight(<callback-fn>, [<initial-value>]) -> iterate over an array and then reduce it to a single value of any data type by writing a custom logic

{
    const numbers = [
        5, 12, 7, 23, 45, 18, 29, 3, 34, 21, 56, 11, 42, 37, 9, 28, 4, 50, 15,
        30,
    ];

    // finding largest number from an array of numbers

    /*
    Random example -
    1st iteration -> acc - 5 and currentNumber - 12 you return 20
    2nd iteration -> acc - 20 and currentNumber - 7 you return 30
    3rd iteration -> acc - 30 and currentNumber - 23 you return 40
    .............
    ............. -> final iteration
    final value of acc is returned back
    */

    console.log(
        numbers.reduce((acc, currentNumber) => {
            console.log(`acc - ${acc}
currentNumber - ${currentNumber}`);
            return currentNumber > acc ? currentNumber : acc;
        })
    );

    console.log(
        numbers.reduceRight((acc, currentNumber) => {
            console.log(`acc - ${acc}
currentNumber - ${currentNumber}`);
            return currentNumber > acc ? currentNumber : acc;
        })
    );

    // adding all numbers in an array of numbers

    console.log(
        numbers.reduce((acc, currentNumber) => {
            console.log(`acc - ${acc}
currentNumber - ${currentNumber}`);
            return acc + currentNumber;
        })
    );

    // getting total items ordered across all orders

    console.log(orders);
    console.log(orders.flatMap(({ items }) => items).length);
    console.log(
        orders.reduce(
            (totalItemsTillNow, { items }) => totalItemsTillNow + items.length,
            0
        )
    );

    // get to know unique items across all orders

    console.log(
        orders.reduce((itemsTillNow, { items }) => {
            const newItems = items.filter(
                (item) => !itemsTillNow.includes(item)
            );
            return itemsTillNow.concat(newItems);
        }, [])
    );

    // implementing map with element skipping

    const mapWithSkipping = (arr, callbackFn, indexesToSkip) =>
        arr.reduce((acc, currentValue, currentIndex) => {
            if (!indexesToSkip.includes(currentIndex)) {
                const result = callbackFn(currentValue, currentIndex);
                acc.push(result);
            }
            return acc;
        }, []);

    console.log(
        mapWithSkipping(
            persons,
            (person) => ({
                fullName: person.name,
                yearsOld: person.age,
            }),
            [0]
        )
    );

    // implementing find method that returns all matching elements

    const findAll = (arr, callbackFn) =>
        arr.reduce((acc, currentValue, currentIndex) => {
            const matchesTheFindCriteria = callbackFn(
                currentValue,
                currentIndex
            );
            if (matchesTheFindCriteria) acc.push(currentValue);
            return acc;
        }, []);

    console.log(findAll(persons, ({ age }) => age === 18));
}

// reverse() / toReversed()

{
    const arr = ["a", "b", "c", "d", "e", "f"];
    console.log(arr.reverse());
    console.log(arr);
    console.log(arr.toReversed());
    console.log(arr);
}

// slice([<start>, <end>])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.slice());
    console.log(fruits.slice(2));
    console.log(fruits.slice(2, 6));
}

// splice(<start>, [<delete-count>], [<element1>, <element2>, ......]) / toSpliced(<start>, [<delete-count>], [<element1>, <element2>, ......])

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.toSpliced(3));
    console.log(fruits.toSpliced(3, 2));
    console.log(fruits.toSpliced(3, 2, "kiwi", "guava"));
}

/*
sort(<callback-fn>) / toSorted(<callback-fn>)

callback fn has two parameters - a and b

From callback fn if you return:
1. Negative number - a will come before b
2. Positive number - a will come after b
3. 0 or NaN - a and b will remain at same position
*/

{
    const numbers = [
        5, 12, 7, 23, 45, 18, 29, 3, 34, 21, 56, 11, 42, 37, 9, 28, 4, 50, 15,
        30,
    ];

    console.log(numbers.toSorted((a, b) => a - b));
    console.log(numbers.toSorted((a, b) => b - a));

    console.log(persons);
    console.log(
        persons.toSorted((personA, personB) => personA.age - personB.age)
    );
}

// toString() / String(<array>)

{
    const fruits = [
        "banana",
        "orange",
        "peach",
        "mango",
        "apple",
        "pineapple",
        "papaya",
        "peach",
    ];
    console.log(fruits.toString());
    console.log(fruits.join()); // custom seperator supported only on this
    console.log(String(fruits));
}

// chaining array methods

{
    console.log(orders.map(({ items }) => items).flat());
    persons
        .filter(({ age }) => age >= 18)
        .map((person) => ({
            fullName: person.name,
            yearsOld: person.age,
        }))
        .forEach((person) => {
            console.log(
                `Hi, ${person.fullName}. Your age is: ${person.yearsOld}!`
            );
        });
}

// holes and array methods

{
    const arr = [1, 2, 3, , 4, , 5, 6, , 7];

    // concat - preserving

    console.log(arr.concat([12, , 43]));

    // forEach - ignoring

    arr.forEach((el) => console.log(el));

    // filter - removes

    console.log(arr.length);
    console.log(
        arr.filter(() => true),
        arr.filter(() => true).length
    );

    // fill - filled

    console.log(new Array(8), new Array(8).fill(2));
}
