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

///////////////////////////////////////////////// comparison Operators in js ////////////////////////////////////////////////////// 
console.log("\t\t\t comparision operators \n");

// Return Ture or False statement A/C conditions

// equal to == 
// not equal to !=
// equal and type === 
// not equal and type !==
// >  greater than 
// < less than
// >= greater than equal to
// <= lesser than equal to

{
    let a = 5
    let b = 5
    let c = "5"
    let d = "10"
    let e = 1
    let f = -5
    console.log(a == b); // equal to operator chk only value not type. so output is true  ///trure
    console.log(a === b); // as a and b both value and type is num so "value and type/strick operator" return True.  //true
    console.log(a == c); // true bcz only check value "equal to operator" //true
    console.log(a === c); // false bcz "strick operator" value and type both chk and typeof a is number and typeof c is string. //false
    console.log(a !== c); // we use not equal to with typechk/strick operator output is True.  ///true
    console.log(a != c); // we use not equal to operator output is false. bcz type is not checking //
    console.log(c == d);//false
    console.log(c !== d);//true
    console.log(c === d);//false
    console.log(c !== d);//false
    console.log(a>b);//false 
    console.log(a<b);//false
    console.log(a>=b);//true
    console.log(a<=b);//true

}
///////////////////////////////////////////////// logical Operators in js ////////////////////////////////////////////////////// 
console.log("\t\t\t logical operators \n\n");
// evalute multiple expression and give single output as /// true or false
// logical AND && 
// for logical AND && all consitions must be same/Trure to give output /////// True
{
console.log("\t\t\t logical AND && operators \n\n");
    let num1 = 5
    let num2 = 4
    let condition1 = num1 > num2
    console.log("condition1 = num1 > num2 " + condition1); //true
    let num3 = 1
    let condition2 = num3 < num1
    console.log("condition2 = num3 < num1 " + condition2); //true
    let num4 = 1
    let condition3 = num3 < num2
    console.log("condition3 = num3 < num2 " + condition3); //true
    console.log("\nchk logical AND &&.. give true only if all condions are true");
    console.log("condition1 && condition2 && condition3 all are true" );
    console.log(condition1 && condition2 && condition3);
    console.log("if one condition is false output will be false");
    let condition4 = num2 > num1
    console.log("condition4 = num2 > num1  " + condition4);//false
    console.log("condition1 && condition2 && condition3 && condition44 = false");
    console.log(condition1 && condition2 && condition3 &&condition4);
}


// logical OR ||

{
    // if any 1 condiotion is true output will be true only all conditions are false then return false.
console.log("\n\t\t\t logical OR || operators \n\n");
    let num1 = 5
    let num2 = 4
    let condition1 = num1 > num2
    console.log("condition1 = num1 > num2 " + condition1); //true
    let num3 = 1
    let condition2 = num3 > num1
    console.log("condition2 = num3 < num1 " + condition2); //false
    let num4 = 1
    let condition3 = num3 > num2
    console.log("condition3 = num3 < num2 " + condition3); //false
    console.log("\nchk logical OR ||. give true  if any one condions is true.  Return false if all conditions are flase");
    console.log("\n condition 1 is true except all false so return will be true");
    console.log(condition1 || condition2 || condition3); // true return bcz condition 1 is true 
    console.log("\n both condition false so return will be false");
    console.log(condition2 || condition3); // true return bcz condition 1 is true 
}
// logical NOT !
// logical not change the output if the condition return ture it change into false and false ouput change into True.. reqruied only one condition/ final conditon
{
    console.log("\n\t\t\t logical Not ! operators \n\n");
    let num1 = 5
    let num2 = 4
    let condition1 = num1 > num2
    console.log("condition1 without NOT != num1 > num2 " + condition1); //true
    console.log("condition1 with NOt ! = num1 > num2 " + !(condition1)); //false
    console.log(!(num1<num2));//true  bcz/ ! NOT operator
    console.log(!(num1>num2));//false
}

///////////////////////////////////////////////// conditonal statement in js ////////////////////////////////////////////////////// 

// we use  logical operators or making conditions A/C to these condtion we have to decide a piece of code work at certain conditions..called condtional statement
// if the condition is true then code will exicute otherwise not 
// if and elase
// if() {}  it will work is the conditon is in paranthesis/ small brackets is true then curly bracket or scope code will work
{
    let age = 24 ;
    if (age > 18) {
        console.log("Your can Vote"); //will exicute
    }else{
        console.log("you are not eligible for voting"); // will not  exicute bcz condition is false
    }
}

{
    let age = 24 ;
    if (age < 18) {
        console.log("you are not eligible for voting"); // will not exicute bcz condition is not true
    }else{
        console.log("You can Vote"); // wil exicute bcz age is greater than 18
    }
}

{
    // chk num is even or odd 
    let num = 12;
    if (num%2 === 0) {
        console.log("num is even");
    } else {
        console.log("numb is odd");
    }
}
// chacking multiple conditions if else if and elase 
{
    let age =20
    if (age >=60 ) {
        console.log("old"); 
    } else if(age >= 40 && age<60){

        console.log("Men");
    } else if (age >= 19 && age <40) {
        console.log("Young");
    } else if (age>=13 && age <= 18){
        console.log("teenage");
    }else if (age > 0 && age <=12) {
        console.log("kids");       
    }else {
        console.log("invalid age");
    }
}