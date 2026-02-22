// Primitive

// 7 types: String, Number, BigInt, Boolean, undefined, Symbol, null

// String
let str = "Hello";
console.log(str);

// Number
let num = 42;
console.log(num);

// BigInt
let bigInt = 9007199254740991n;
console.log(bigInt);

// Boolean
let bool = true;
console.log(bool);

// undefined
let undef;
console.log(undef);

// Symbol
let sym = Symbol("id");
console.log(sym);

// null
let nul = null;
console.log(nul);


// Non-primitive (Refrence type)


// Object
let obj = { name: "Alice", age: 30 };
console.log(obj);

// Array
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Bob"));


