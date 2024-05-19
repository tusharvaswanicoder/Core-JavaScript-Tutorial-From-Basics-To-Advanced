/*
2 types of type conversions:
1. Implicit Type Conversion -> automatic type conversion -> risky and tricky part -> operand type difference
2. Explicit Type Conversion -> manual type conversion -> easy and straightforward part
*/

// ---------- Implicit Type Conversion ----------

// arithemetic operators -> + - / % * **

// + - Binary

console.log(1 + 2);
console.log("My " + "name");
console.log("My" + 2); // "My" + 2 -> "My" + "2" -> "My2"
console.log("2" + "4");
console.log("2" + 4);

// + - Unary

console.log(+4);
console.log(+"4");
console.log(typeof +"4");
console.log(+"-4");
console.log(typeof +"-4");
console.log(+"abc");
console.log(typeof +"abc");

// -(Binary) / % * **

console.log(2 * 4);
console.log("2" * "4"); // "2" * "4" -> 2 * 4 -> 8
console.log("2" * 4);
console.log("abc" * 4);
console.log(NaN + 4);
console.log(NaN - 4);
console.log(NaN / 4);
console.log(NaN ** 4);
console.log(NaN * 4);

// - -> Unary operator

console.log(-4);
console.log(-(-4));
console.log(-"4");
console.log(typeof -"4");
console.log(-"-4"); // -"-4" -> -(-4) -> 4
console.log(typeof -"-4");
console.log(-"abc");
console.log(typeof -"abc");

/* 
boolean:
true -> 1
false -> 0
*/

console.log(true + 0); // true + 0 -> 1 + 0 -> 1
console.log(true + true); // true + true -> 1 + 1 -> 2
console.log(true + false); // true + false -> 1 + 0 -> 1
/*
(true / true) ** (true * 4 - false) + true
(1 / 1) ** (1 * 4 - 0) + 1
1 ** (4 - 0) + 1
1 ** 4 + 1
1 + 1
2
*/
console.log((true / true) ** (true * 4 - false) + true);

/*
null and undefined:
null - 0
undefined - NaN
*/

console.log(1 + null); // 1 + null -> 1 + 0 -> 1
console.log(4 * undefined); // 4 * undefined -> 4 * NaN -> NaN

/*
conditional operator(ternary operator) and not operator:
0, 0n, "", null, undefined, NaN - false
any other thing -> true
*/

// boolean expression ? a : b

console.log(1 ? "a" : "b"); // 1 ? "a" : "b" -> true ? "a" : "b" -> "a"
console.log(2 - 2 ? "a" : "b"); // 2 - 2 ? "a" : "b" -> 0 ? "a" : "b" -> false ? "a" : "b" -> b
console.log("" ? "not empty string" : "empty string");
console.log("abc" ? "not empty string" : "empty string");
console.log("  " ? "not empty string" : "empty string");

// !boolean -> reverses boolean value

console.log(!""); // !"" -> !false -> true
console.log(!"abc"); // !"abc" -> !true -> false
console.log(!0); // !0 -> !false -> true

// ---------- Explicit Type Conversion ----------

// String -> String(value) -> <string value>

console.log(2);
console.log(typeof 2);
console.log(String(2));
console.log(typeof String(2));
console.log(String(-2));
console.log(String(true));
console.log(String(false));
console.log(String(null));
console.log(String(undefined));
console.log(String(NaN));
console.log(String(4n));
console.log("2342342342342352453453421212");

// Number

console.log("2");
console.log(typeof "2");
console.log(Number("2"));
console.log(typeof Number("2"));
console.log(Number("                2                "));
console.log(Number("                2         "));
console.log(Number("-4"));
console.log(Number("4.345345"));
console.log(Number("4n"));
console.log(Number("          -4 "));
console.log(Number("          -    4 "));
console.log(Number("   3 2  "));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number("             "));

// Boolean

console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(-1.4234));
console.log(Boolean(0n));
console.log(Boolean(323n));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean("              "));
console.log(Boolean("asas2312"));
console.log(Boolean("121323"));
