///////////////////////  loops ////////////////////////

//Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met. In other words, loops let your code execute one or more statements as many times as desired.

/// for loop.
console.log("\t\t\t\t counting number upto 10");
for (let i = 0 ; i<=10; i++){
    console.log(i);
}
// even number upto 40
console.log("\t\t\t\teven number upto 40");
for (let i = 0 ; i<=40 ; i+=2){
    console.log(i);
}
// odd number upto 30
console.log("\t\t\t\todd number upto 30");
for (let i = 1 ;i<=30 ; i+=2){
    console.log(i);
}
// using for loop sum of even numbes upto 20.
console.log("\t\t\t\tsum of even numbers upto 20");
let sum = 0;
for (let i=2; i<=20; i+=2){
    sum+=i
}
console.log("sum of even numbers upto 20 is \t" + sum);



// Q1. Create a list of prime numbers using for loop upto 100.
// prime numbers upto 40.
// console.log("\t\t\t\tPrime number upto 30");
// for (i=1; i<=50; i++){
//     if (i%2!=0 && i%3!=0 && i%5!=0 && i%7!=0){
//         console.log(i);
//     }
// }

//Basic For Loop
// A basic for loop iterates over a sequence of numbers, array elements, or string characters.
// Example 1: Iterating Over an Array
console.log("\t\t\t\tIterating Over an Array");
let fruits = ["apple", "mango", "banana"]
for (i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}
console.log(fruits);

//Example 2: Iterating Over a String.
console.log("\t\t\t\tIterating Over a String.");
let myName = "Shahab Uddin Ghori"
for (i=0 ; i<myName.length ; i++){
    console.log(myName[i]);
}
console.log(myName);

//Example 5: Using break in a For Loop
console.log("\t\t\t\tUsing break in a For Loop.");
let colors = ["red", "green", "blue", "black", "orange", "white"]
let targetColor = "green"
for (i=0; i<colors.length; i++){
    if (colors[i] == targetColor){
        console.log(colors[i] + " color is found");
        break;
    }
}

// for of . loop
// use for array and stirngs .
console.log("\n\t\t\t\t\ For-of Loop.");
console.log(" For-of Loop. on string");
{
    let myName = "Shahab Uddin Ghori"
    for (let i of myName){ // iterator return each values of array and string. like s,h,a,h,a,b etc including spaace
        console.log(i);
    }
}
{
    let findLetters = "Hello World"
    for (let val of findLetters){ // iterator return each value of string. H, e, l, l, o, w, o, r, l, d. including space
        console.log(val);
    }
}
{
    let fruits = ['apple', 'banana', 'cherry']; // iterator return each values of array and string like , apple, banana, cherry
    for (let val of fruits){
        console.log(val);
    }
}

{
let colors = ["red", "green", "blue", "black", "orange", "white"]
let array = 0
for (let val of colors){ //iterator => characters 
    console.log("\n" + val);
    array++
}
console.log(array); // getting lenght of array
}

// for-in loop usally use on objects. also can be use for 
//for-in loop use for objects it return objects key
{
console.log("\n\t\t\t\t\ For-in Loop.");
console.log(" For-in Loop. on objects");
    const student = {
        studentName: "Noman",
        age: 24,
        NIC: "12345678",
        isPresent: true
    }
    for (let key in student){
        console.log(`key = ${key} then value = ${student[key]}`);
    }
}