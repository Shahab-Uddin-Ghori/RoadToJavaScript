///////////////////////  loops ////////////////////////

//Loops are computer programs that execute a set of instructions or a block of code a certain number of times without having to write it again until a certain condition is met. In other words, loops let your code execute one or more statements as many times as desired.

/// for loop.
console.log("\t\t\t\t counting number upto 10");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// even number upto 40
console.log("\t\t\t\teven number upto 40");
for (let i = 0; i <= 40; i += 2) {
  console.log(i);
}
// odd number upto 30
console.log("\t\t\t\todd number upto 30");
for (let i = 1; i <= 30; i += 2) {
  console.log(i);
}
// using for loop sum of even numbes upto 20.
console.log("\t\t\t\tsum of even numbers upto 20");
let sum = 0;
for (let i = 2; i <= 20; i += 2) {
  sum += i;
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
let fruits = ["apple", "mango", "banana"];
for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(fruits);

//Example 2: Iterating Over a String.
console.log("\t\t\t\tIterating Over a String.");
let myName = "Shahab Uddin Ghori";
for (i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}
console.log(myName);

//Example 5: Using break in a For Loop
console.log("\t\t\t\tUsing break in a For Loop.");
let colors = ["red", "green", "blue", "black", "orange", "white"];
let targetColor = "green";
for (i = 0; i < colors.length; i++) {
  if (colors[i] == targetColor) {
    console.log(colors[i] + " color is found");
    break;
  }
}

// for of . loop
// use for array and stirngs .
console.log("\n\t\t\t\t For-of Loop.");
console.log(" For-of Loop. on string");
{
  let myName = "Shahab Uddin Ghori";
  for (let i of myName) {
    // iterator return each values of array and string. like s,h,a,h,a,b etc including spaace
    console.log(i);
  }
}
{
  let findLetters = "Hello World";
  for (let val of findLetters) {
    // iterator return each value of string. H, e, l, l, o, w, o, r, l, d. including space
    console.log(val);
  }
}
{
  let fruits = ["apple", "banana", "cherry"]; // iterator return each values of array and string like , apple, banana, cherry
  for (let val of fruits) {
    console.log(val);
  }
}

{
  let colors = ["red", "green", "blue", "black", "orange", "white"];
  let array = 0;
  for (let val of colors) {
    //iterator => characters
    console.log("\n" + val);
    array++;
  }
  console.log(array); // getting lenght of array
}

// for-in loop usally use on objects. also can be use for
//for-in loop use for objects it return objects key
{
  console.log("\n\t\t\t\t For-in Loop.");
  console.log("For-in Loop. on objects");
  const student = {
    studentName: "Noman",
    age: 24,
    NIC: "12345678",
    isPresent: true,
  };
  for (let key in student) {
    // for-in loop iterator return keys of obj
    console.log(`key = ${key} then value = ${student[key]}`);
  }
}
{
  console.log("\n For-in Loop. on objects");
  let person = { name: "John", age: 30, city: "New York" };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
}
/// while loop
//Script while loop is a control flow statement that runs a block of code for as long as a specified condition is true.
// in while loop intilizing is before loop
// condition (how many time loop run) in parathesis while making while-loop
// increament/decreament etc is in while loop scope

// Basic While Loop
// Example 1: Simple Counter
let count = 0; // initilizing
console.log("\n\t\t\t\t while Loop.");
console.log("simple counter.");
while (count < 6) {
  // condition
  console.log(count); // code
  count++; // count/ increament or decreament
}

// Intermediate While Loop
// Example 2: Iterating Over an Array
{
  console.log("while loop: Iterating Over an Array");
  let colors = ["red", "green", "blue", "black", "orange", "white"];
  index = 0;
  while (index < colors.length) {
    console.log(colors[index]);
    index++;
  }
}
// Example 3: Using while with a Condition. make count 1 to 10 showing even and odd num
{
  console.log("make count 1 to 10 showing even and odd num.");
  let count = 0;
  while (count <= 10) {
    if (count % 2 === 0) {
      console.log(`${count} is even Number`);
    } else {
      console.log(`${count} is odd Number`);
    }
    count++;
  }
}
// {
// Example 5: Simulating User Input
//   console.log(
//     "Simulating User Input. checking password is correct or not. have 3 attemps"
//   );
//   let password = "password123";
//   let attempts = 0;
//   let userInp;
//   while (userInp !== password && attempts < 3) {
//     userInp = prompt("Enter Your Password");
//     attempts++;
//   }
//   if (userInp === password) {
//     console.log("Access Granted");
//   } else {
//     console.log("Access denied. Too many attempts.");
//   }
// }

// Do-while loop.
// Do while loops check the condition after the block of code is executed. This control structure can be known as a post-test loop.
// it will run code atleast one time then check condition.
{
    console.log("\ndo-while loop");
  let i = 1;
  console.log("\nat true condition at the end");
  do {
    console.log("we are learning do-while loop"); // condition true so work. 9 times
    i++;
  } while (i < 10);
  {
    let i = 10;
    console.log("\nat false condition at the end");
    do {
      console.log("we are learning do-while loop"); // even condition is false it work one time
      i++;
    } while (i < 10);
  }
}
{
//     Example 6: do...while Loop

// A do...while loop ensures that the loop body is executed at least once.
    let count = 0;
do {
    console.log("Count is: " + count);
    count++;
} while (count < 5);

}

// {
//   Example 6: Random Number Guessing Game
// A simple game where the user guesses a random number between 1 and 10
// console.log("Guess the num game by ramdom number generator");
// let ranNum = parseInt(Math.floor(Math.random()*11))
// let userNum;
// do {
//   userNum = +prompt("Enter any numbre between 1 ~ 10")
//   if (userNum > ranNum || userNum < ranNum){
//     console.log("You Lose. Number is incorrect try again");
//   } 
// }while (userNum !== ranNum);
// console.log("you won. correct number is " + ranNum);
// }

{
  console.log("\n flip game using do while");
  let flip;
  do {
      flip = Math.random() < 0.5 ? 'heads' : 'tails';
      console.log("Flipped: " + flip);
  } while (flip !== 'heads');
  
  console.log("Finally got heads!");
  
} 


//////////////////////////////////////////// strings in detail //////////////////////////////////////
// string is sequence of characters used to  represent text in js. IMPT "In javascript strings are immutable(we do not have to change in orignal string) have to creatge new variable even for minor changing in string "
// 1. create String 
// let str = "this is string with double qoutes"
// let str2 = ` this is string with single qoutes

// string has in buit properties.
// strings has inbulit functions called methods

// 2. string lenght
// str.length

//3. string indicates  / index or indices
// str[0], str[1], str[2] etc..

///////// template literals //////////////
// a way to have embedded expression in strings.
console.log("\n\t\t Template Literals");
let specialString = `template literals is a speacial type of string` // formed by backticks
let secSent = 'this is sec variable'
console.log(`printing ${specialString} without commas and + or double qoutes in single backticks ${secSent}`);
// string interpolation
//to create strings by doing subsitution of placeholders called string interpolation. means in single backtics we can write strings and variable/expression.
let firstVar = "this is first variable"
console.log(`${firstVar} and this is expression 1+2+3 = ${1+2+3}`);

/// escape characters
// to escape line or Tabspaces. \n use to write a text in new line. \t use to get a tabSpace.
// escape character length is always 1. \t => 1 lenght..  \n => 1 length..
console.log("\n\t\t Escape characters");
let escapeCharacterForNewLine = "line one \n line two \n line three"
let escapeCharacterForTabSpace = "first word \t secong word \t third word"
console.log(`${escapeCharacterForNewLine} "OR" ${escapeCharacterForTabSpace}`);
let lengthOfEscapeCharacter1 = "\t";
let lengthOfEscapeCharacter2 = "\n";
console.log(`length of "\\t" is ${lengthOfEscapeCharacter1.length}`);
console.log(`length of "\\n" is ${lengthOfEscapeCharacter2.length}`);
/////////////////////////// template literals ended /////////////////////////

///////////////////////// Strings Methods //////////////////////////////////
// these are buit-in function to manipulate strings..
console.log("\n\n\t\t String Methods");
// 1. toUpperCase.
// convert all text into upper case
{
  console.log("\n toUpperCase");
  let myString = "Learning toUpperCase"
  console.log(myString);
  myString = myString.toUpperCase() // not change orignal string until you reassin it..
  console.log(myString);
}
{
  // better way to do it bcz const cant reassign 
  console.log("\n learning by new variable bcz method cant change in orignal value. but it can reassign if you use with let but cant with const so we se with better approach with creating a new variable\n\n");
  const orgString = "by creating new variable";
  console.log(orgString);
  const upperCaseString = orgString.toLocaleUpperCase();
  console.log(upperCaseString);
}

// 2. toLowerCase.
// convert all text into lower case
{
  console.log("\n toLowerCase");
  const orgString1 = "Learning lower Case";
  const orgString2 = "LEARNING LOWER CASE";
console.log(`orgString1 is ${orgString1}`);
console.log(`orgString2 is ${orgString2}`);
console.log("applying toLowerCase");

const chngString1 = orgString1.toLowerCase();
const chngString2 = orgString1.toLowerCase();
console.log(`chngString1 is ${chngString1}`);
console.log(`chngString2 is ${chngString2}`);
}
