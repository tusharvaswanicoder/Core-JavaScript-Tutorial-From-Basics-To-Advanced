/*
Lexical structure tells the set of elementary rules that specifies how you write programs in that language. It is the lowest-level syntax of a language. So in one word it is grammar of a programmming language.
9 parts of JS lexical structure:
1. Case sensitivity
2. Keywords
3. Identifiers
4. Literals
5. Comments
6. Whitespace
7. Line breaks
8. Unicode
9. Statements
*/

// Whitespace

console.log("Hi");
console      .      log       (      "Hello");
const a          =                 40n;
// co nsole.log("Hi"); -> wont work

// Line breaks

console.log(
    "Hello"
)
console
    .
    log(
        "Hi"
    )

/*
this wont work-
console.log("
    Hi
")
*/

// Unicode

let पसंदीदारंग = 1;
console.log(पसंदीदारंग);
पसंदीदारंग = 4;
console.log(पसंदीदारंग);

// Statements

let b = 1;
console.log(b);
b = 2;
console.log(b);

let c = 1
console.log(c)
c = 2
console.log(c)
