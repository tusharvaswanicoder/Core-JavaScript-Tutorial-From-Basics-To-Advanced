/*
Precedence - It decides which operator would evaluate first.
Associativity - It decides which operator would evaluate first if the expression have multiple operators of same precedence.
*/

// Example 1: 4 / 2 == 2 - 2

/*
Wrong way -

4 / 2 == 2 - 2
2 == 2 - 2
true - 2
1 - 2
-1
*/
console.log(true - 2);

/*
Correct way -

4 / 2 == 2 - 2
2 == 2 - 2
2 == 0
false
*/
console.log(4 / 2 == 2 - 2);

// Example 2: 4 - 5 + 4 ** 2 % 9

/*
4 - 5 + 4 ** 2 % 9
4 - 5 + 16 % 9
4 - 5 + 7
-1 + 7
6
*/

console.log(4 - 5 + 4 ** 2 % 9);

// Example 3: 2 ** 3 ** 2

/*
2 ** 3 ** 2

Wrong way - 
8 ** 2
64

Correct way -
2 ** 9
512
*/

console.log(2 ** 3 ** 2);

// Example 4: 6 ** 6 === 23 * 40 && 238 / 4 !== 2 % 4 - (-4) || 20 + 10 / 2 === 25
