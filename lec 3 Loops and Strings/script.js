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

// 3. string trim
// trim method remove all whitespaces from start and end.
const  whiteSpaces = "      learning Trim       "
console.log(`without trim method:${whiteSpaces}`);
const removeWhiteSpaces = whiteSpaces.trim()
console.log(`with trim:${removeWhiteSpaces}`);

//4. slice 
// The slice() method in JavaScript is used to extract a portion of a string and return it as a new string, without modifying the original string. This method can also be used with arrays in a similar way. Here, we'll focus on its usage with strings.
{
  // string.slice(start, end)
//   start: The zero-based index at which to begin extraction. If negative, it indicates an offset from the end of the string.
// end (optional): The zero-based index before which to end extraction. The character at this index will not be included. If omitted(chor dena), extraction continues to the end of the string. If negative, it indicates an offset from the end of the string.

}
{
  /* Key Points
1. Zero-Based Index: The index starts from 0.
2. Non-Inclusive End: The end index is non-inclusive(shamil). The character at the end index is not included in the returned substring.
3. Negative Indices: Both start and end can be negative, indicating positions from the end of the string.*/
}

{
  let str = "Hello, World!";
  console.log(str.length); // 12 lenght or 13 index
let part = str.slice(7, 12); // index start from 0
console.log(part); // "World"
/*start is 7: Extraction starts at index 7 ('W').
end is 12: Extraction ends at index 12 (before 'd').
The characters between index 7 and 11 ('World') are returned.*/
}
{
  let str = "apple orange"
  let strSlice = str.slice(6) // start from index 6, end is omitted(chor dena): Extraction continues to the end of the string.
  console.log(strSlice);
}
{
  let str = "Hello, World!";
  let part = str.slice(-6, -1);
  console.log(part); // "World"

  // start is -6: Extraction starts 6 characters from the end ('W').
  // end is -1: Extraction ends 1 character from the end (before '!').  
}
{
  let str = "Slice method example";
let part = str.slice(0);
console.log(part); 
/*start is 0: Extraction starts at the beginning.
end is omitted: Extraction continues to the end of the string.
The entire string is returned.
*/
}

// concenating of strings
{
  // by concat() method // not preferred
  let str1 = "shahab "
  let str2 = "uddin"
  let combStr = str1.concat(str2)
  console.log("by concat() method:  " + combStr);

  // simple way by +
  console.log("by + :  " + str1 + str2);
}

{
  //practice of concanating
  console.log("practice of concanating");
  console.log("myname" + 123); //myname123
  console.log("12" + 12); // 1212
  // only concanate for + 
  console.log("12" * 12); // will not concanate bcz con work with // + // output 144
  console.log("10" - 5); // 5
  console.log("name" * 5); // nan (not a number ) bcz in string alphabetic are not numbers .
  console.log(("" * 2)); // empty string is consider as 0
  console.log("hello" * 0);// Nan
  console.log("hello1" * "hello2");// Nan. except numbers ans will be Nan for *,/,-
  // in string alphabet and num both are string but if we do *,-,/ arithmetic operation except + for string numbers like "012345..." it will treat as a numbers and peform a.m operation except +.. but concanate for aphanumeric words like "hello " "hello123" etc with numbers ans will be NaN for *,/,- etc... 
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"] //array
  let res = ("cars: " + cars); // concanate of array with string
  console.log(typeof res); // string.. if we concanate array with string it will be string
  
 
}

// 5. Replace Method replace(search Value, new Value)
// The replace() method searches a string for a value or a regular expression. The replace() method returns a new string with the value(s) replaced. The replace() method does not change the original string.
{
  console.log("\n\t\t\t learning replace method");
  console.log("\n\treplace");
  let str = "Learning replace"
  console.log(str.replace("ning","ner")); // first paramenter which part of string you want to change. 2nd  what you want to change // learner replace
  console.log(str); //learning replace
  // if the string is same then replace change only first one
  let str2 = "hello world hello karachi"
  console.log(str2);
  console.log(str2.replace("hello", "hi"));// hi world, hello karachi
}
{
  //replace All
  console.log("\n\treplaceAll"); // change all the target string
  let str2 = "hello world hello karachi"
  console.log(str2);
  console.log(str2.replaceAll("hello", "hi"));// hi world, hi karachi
}
// 6. charAt(index)
// check a character at a specific index
{
  console.log("\n\t\t\t charAt() Method");
  let str = "pakistan"
  console.log(str.charAt(0));// p
  console.log(str.charAt(1));// a
  console.log(str.charAt(2));// k
  console.log(str.charAt(7));// n
}
//7.  indexOf method 
// check the index of specific character
{
  console.log("\n\t\t\t indexOf() Method");
  let str = "pakistan"
  console.log(str.indexOf("k"));//2
  console.log(str.indexOf("p"));//0
  console.log(str.indexOf("a"));//1 give the index of first character
}

// Q. prompt the user their fullname. Generate a username based on the input, start with @, follwed by thier full name and ending with fullname lenght.
{
  // let fullname = prompt("Enter your fullname")
  // let username = `@${fullname}`
  // let lengthOfUserName = fullname.length
  // username = username + lengthOfUserName
  // console.log(username);

}   
