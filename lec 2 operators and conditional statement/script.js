//operators
const a = 5
const b = 2

const add = a + b;
const diff = a - b;
const mul = a * b;
const div = a/b;
const power = a ** b;
const modulus = a % b;

console.log(`\t\t\t Arithmetic Operation for a and b \nadd is ${add}\ndiff is ${diff}\nmul is ${mul}\ndiv is ${div}\npower is ${power}\nmoudulus is ${modulus}`);


///////////////////////////////////////////////// Unary Operators in js ////////////////////////////////////////////////////// 
console.log("\t\t\t unary operators \n");

//1. Unary Plus (+):
// Purpose: Converts its operand to a number.
let a1 = "5";
let b1 = +a; // b is 5 (number)
let c = +"3.14"; // c is 3.14 (number)
let d = +true; // d is 1 (number)
let e = +false; // e is 0 (number)
console.log(typeof (a1));
console.log(typeof (b1));
console.log(typeof (c));
console.log(typeof (d));
console.log(typeof (e));

//2. Unary Negation (-):
// Purpose: Converts its operand to a number and then negates it.
let a2 = "5";
let b2 = -a; // b is -5 (number)
let c2 = -"3.14"; // c is -3.14 (number)
let d2 = -true; // d is -1 (number)
let e2 = -false; // e is 0 (number)

//3. Increment (++):
// Purpose: Increases its operand by one.
let a3 = 5;
a3++; // a is now 6 (postfix increment)
++a3; // a is now 7 (prefix increment)

let b3 = 5;
let c3 = b3++; // c is 5, b is 6 (postfix increment)
let d3 = ++b3; // d is 7, b is 7 (prefix increment)

//4. Decrement (--):
// Purpose: Decreases its operand by one.
let a4 = 5;
a4--; // a is now 4 (postfix decrement)
--a4; // a is now 3 (prefix decrement)

let b4 = 5;
let c4 = b4--; // c is 5, b is 4 (postfix decrement)
let d4 = --b4; // d is 3, b is 3 (prefix decrement)

//5. Logical NOT (!):
// Purpose: Converts its operand to a boolean and negates it.
let a5 = true;
let b5 = !a; // b is false

let c5 = 0;
let d5 = !c; // d is true (0 is falsy, so !0 is true)

let e5 = "Hello";
let f5 = !e; // f is false (non-empty strings are truthy, so !truthy is false

//6. Bitwise NOT (~):
// Purpose: Inverts all the bits of its operand.
let a6 = 5; // 00000000000000000000000000000101 in binary
let b6 = ~a; // 11111111111111111111111111111010 in binary (which is -6 in decimal)

let c6 = -1; // 11111111111111111111111111111111 in binary
let d6 = ~c; // 00000000000000000000000000000000 in binary (which is 0 in decimal)

// 7. Typeof:
// Purpose: Returns a string indicating the type of the operand.
let a7 = "Hello";
let b7 = typeof a7; // b is "string"

let c7 = 42;
let d7 = typeof c7; // d is "number"

let e7 = true;
let f7 = typeof e7; // f is "boolean"

let g7 = {};
let h7 = typeof g7; // h is "object"
console.log(h7);

let i = function() {};
let j = typeof i; // j is "function"
console.log(j);
console.log("empty arry typeof" + " " + typeof []); //object
console.log("empty obj typeof" + " " + typeof {}); //object
console.log("empty string typeof" + " " + typeof "");// string
console.log("null typeof" + " " + typeof null); // string
console.log("symbol typeof" + " " + typeof Symbol); // function bcz symbol is also a function built ing js return new symbol each time
console.log("boolean typeof" + " " + typeof Boolean); // function bcz boolean is a function
console.log("BigInt typeof" + " " + typeof BigInt); // function
console.log("object typeof" + " " + typeof Object); // function 
console.log("false typeof" + " " + typeof false); // boolean
console.log("true typeof" + " " + typeof true); // boolean
console.log("undefined typeof" + " " + typeof undefined); // undefine


///////////////////////////////////////////////// assignment Operators in js ////////////////////////////////////////////////////// 
console.log("\t\t\t assignment operators \n");
// =, +=, -=, *=, %=, **=
// left = right // in js values move right sight to left 

// = 
// a = 5
// a = "adasd"

//+=
// let a = 1
// a += 1 => a= a + 1
//let b=5
// b +=5 => b= b+ 5
{
    let a = 5;
    a+= 1
    console.log("+= " + a); // 6
}
{
    let b = 5;
    b+= 5
    console.log("+= " + b); // 10
}

// -=
{

    let a =5
    a-= 2
    console.log("-= " + a); //3
}

//*=
{
    let a = 5
    a*= 10
    console.log("* " + a); //50
}

// **=
{
    let a = 2
    a**=4
    console.log("**= " + a); // 16
}

// %=
{
    let a = 10
    a%= 4
    console.log("%= " + a); //2
}






