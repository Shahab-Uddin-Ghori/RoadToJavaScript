///// Function in Js////////////////
//  block of code that peform a specific task, can be invoked(use/call) whenever needed.. // to perform same task again
// function help to reduce redundancy(repeatation of code).... redundancy is not good way to write code.
// basic function.
function myFunction1() {
  // function functionName () { your code };
  console.log("this is my first function");
}
myFunction1(); // call/invoke the function. whenever you call the function by funcationName it will execute code...... // this is my first function"

//// function parameter and Arruguments////////
// parameter and arguments
// Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.
function myFunction2(msg) {
  // () in between these brackets are written called parameter..
  console.log(msg);
}
myFunction2(2); //argument..
myFunction2("this is my second function"); // argument. this value is recvied by  parameter
// variable on function defination is called "parameter".
//value pass in function call called argument.

// multiple parameter and arguments

function myFunction3(a, b, c) {
  // function variable are local variable. its block scope variable..
  let sum = a + b + c; // act as local variable => scope
  let mul = a * b * c;
  let equ = a + b * c;
  console.log(
    `sum of a+b+c = ${sum}\n mul of a*b*c = ${mul}\n equ a+b*c = ${equ}`
  );
}
myFunction3(2, 3, 5); // can provide diff value each time when call function
myFunction3(0, 1, 2);
myFunction3(1, 1, 1);
myFunction3(-10, 1, -2);

// return keyword.

function myFunction4(x, y) {
  sum = x + y;
  console.log("before return"); // it will consloe bcz it consloe before return
  return sum; // return  only one value.. it may be object or array
  console.log("after return"); // it will not execute bcz after return keyword no line of code will execute // Unreachable code detected
}
let add = myFunction4(2, 1); // store in new variable to get value return by function.
console.log(add);
// if function do not return anything it will retutn undefine.

// passing array as argument on parameter
// es5 named function
function average(numberArr) {
  //parameter

  let sum = 0;
  for (let i = 0; i < numberArr.length; i++) {
    sum = sum + numberArr[i];
  }

  let avg = sum / numberArr.length;

  return avg;
}

console.log(average([5, 7, 3, 6, 9, 4])); // argument
console.log(average([5, 7, 14])); // argument

// Default parameter
function myFunction5(a, b = 5) {
  sum = a + b;
  console.log(sum);
}
myFunction5(5, 8); // these argument is use.

// Default parameter
function myFunction6(a, b = 5) {
  sum = a + b;
  console.log(sum); // 8
}
myFunction6(3); // first parameter is use second is deafult parameter assignent in function defination/parameter

// Functions Rest Parameters
// The Rest Operator, denoted by three consecutive dots (...), is a feature introduced in JavaScript (ES6) used for gathering the remaining elements of an iterable (like an array) into a single array variable.

{
  console.log("\n\n\t\t rest parameter in function");
  function sum(...restArrg) {
    //rest parameter
    let total = 0;
    for (let value of restArrg) {
      total += value;
    }
    return total;
  }
  console.log(sum(1, 2, 5)); // 8
  console.log(sum(10, 12, 15)); // 37
  console.log(sum(11, 12, 15, 15, 50, 100, -11, -12, -15, -15)); // 150
}

{
  console.log("\n\t\t example 2");
  function mul(...restArrg) {
    //rest parameter
    let mul = 1;
    for (let value of restArrg) {
      mul *= value;
    }
    return mul;
  }
  console.log(mul(2, 3)); // 6
  console.log(mul(2, 3)); // 6
  console.log(mul(1, 2, 3, 4, 5)); // 120
}

{
  console.log("\n\t\t example 3");
  function arrgment() {
    let arr = [];
    for (let i = 1; i < 10; i++) {
      arr.push(i);
    }
    return arr;
  }

  let arrCountForSum = arrgment();
  console.log(arrCountForSum);

  function sum(...arrg) {
    // rest parameter
    let total = 0;
    for (let value of arrg) {
      total += value;
    }
    return total;
  }

  console.log(sum(...arrCountForSum));
}

// arrow function
// Arrow function {()=>} is concise way of writing JavaScript functions in shorter way. Arrow functions were introduced in the ES6 version. They make our code more structured and readable.
// we can save arrow function in a variable

// const funcationName (para1,para2,....) => { your code}
// (para1,para2,...) => {your code.}
{
  console.log("\n\n\t\t arrow function");
  let sum = (a, b) => {
    add = a + b;
    return add;
  };
  console.log(sum(1, 2)); //3
}

{
  console.log("\n\t example 2");
  let add = (x, y) => {
    let sum = x + y;
    console.log(sum);
  };
  add(1, 2);
}

{
  console.log("\n\t\texample 3");
  console.log(
    "\n\nQ. Using arrow function. make a product of multiple argument using rest operator also save argument as array in new varaiable"
  );
  let mul = (...restArrg) => {
    let prod = 1;
    let arrayOfResARRG = [];
    for (let value of restArrg) {
      prod *= value;
      arrayOfResARRG.push(value);
    }
    console.log(arrayOfResARRG);
    console.log(prod);
  };
  mul(1, 2, 3); //6
  mul(1, 2, 3, 4, 5); //120
  mul(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); //3628800
}
{
  console.log("\n\t\texample 4");
  console.log(
    "\n\nQ. Using arrow function. make a sum of multiple argument using rest operator\n.\n 1. save argument as array in new varaiable\n2. take argument dynamically by loop which call by function"
  );
  // function for arguments
  let argument = () => {
    let arrg = [];
    for (let i = 1; i < 11; i++) {
      arrg.push(i);
    }
    return arrg; // return array a/c to provided condition..
  };
  let restArgument = argument(); // saving return value in variable // compulsary
  console.log(restArgument); // array

  // making function for sum of argument

  let sum = (...resArrg) => {
    // rest operator take value from funtion provided before
    let sumOfArrg = 0;
    for (let value of resArrg) {
      // for-of loop
      sumOfArrg += value; // doing sum of each value coming from argument
    }
    console.log(sumOfArrg);
  };
  sum(...restArgument);
}

{
  console.log("\n\t\texample 5");
  console.log("same work in example but with different apporach easy apporach");
  let arrayOfArrg = [];
  for (let i = 1; i < 11; i++) {
    arrayOfArrg.push(i);
  }
  console.log(arrayOfArrg);

  let sum = (...arrg) => {
    let total = 0;
    for (let value of arrg) {
      total += value;
    }
    console.log(total);
  };
  sum(...arrayOfArrg);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*{
  console.log("\n\t\texample 6");
  console.log(
    "Q.Make a program that take multiple input from user by asking.\n 1. saves these as array in variable and\n 2. sum of these argument by funtion name sum"
  );
  //isNaN()
  // The isNaN() function checks whether a value is NaN (Not-a-Number). It returns true if the value is NaN, and false otherwise. However, isNaN() has some peculiar behavior because it tries to convert the value to a number first.
  //trim()
  // The trim() method is used to remove whitespace from both ends of a string. Whitespace in this context includes spaces, tabs, and newline characters.

  /////////////////   asking no of input ///////////////////////////////////////
  let noOfArrgByUser = prompt("How many number of values do you want to sum.");

  while (isNaN(noOfArrgByUser) || noOfArrgByUser.trim() === "") {
    alert("Please enter numeric values");
    noOfArrgByUser = prompt("How many number of values do you want to sum.");
  }

  noOfArrgByUser = +noOfArrgByUser; // convert into number
  ///////////////////////// end ///////////////////////////////////////////////

  ////////////// function for getting dynamically array by user.. only numeric value ///////////////
  let userValues = () => {
    let arrg = [];
    for (i = 1; i <= noOfArrgByUser; i++) {
      let suffix;
      if (i === 1) suffix = "st";
      else if (i === 2) suffix = "nd";
      else if (i === 3) suffix = "rd";
      else suffix = "th";

      let userValuesFromPrompt = prompt(`Enter your ${i}${suffix} value`);
      while (
        isNaN(userValuesFromPrompt) ||
        userValuesFromPrompt.trim() === ""
      ) {
        alert("Please enter numeric values");

        userValuesFromPrompt = prompt(`Enter your ${i}${suffix} value`);
      }
      arrg.push(+userValuesFromPrompt);
    }
    return arrg;
  };
  let argumentValuesByUser = userValues();
  // argumentValuesByUser =
  console.log(argumentValuesByUser); // array of user input
  //////////// end ///////////////////

  ///////// function for sum////////////
  let sum1 = (...userArgument) => {
    let sumOfUserValues = 0;
    for (let value of userArgument) {
      sumOfUserValues += value;
    }
    console.log(sumOfUserValues);
  };
  sum1(...argumentValuesByUser);
  ///////////////////////////////////
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/

// Q. create a function using Function keyword that take a string as an argument and return the number of vowels in the string. also save vowels in array  
let sentence = "shahab uddin ghori"
let splitSentence = sentence.split("")
console.log(splitSentence);
function returnVowels(){
  let vowels = []
  for (let i = 0; i<splitSentence.length; i++){
    console.log(splitSentence[i]);
    if(splitSentence[i] == "a"){
      vowels.push("a")
    }
    if(splitSentence[i] == "e"){
      vowels.push("e")
    }
    if(splitSentence[i] == "i"){
      vowels.push("i")
    }
    if(splitSentence[i] == "o"){
      vowels.push("o")
    }
    if(splitSentence[i] == "u"){
      vowels.push("u")
    }
  }
  console.log(vowels);
  console.log("number of vowels", vowels.length);
}
returnVowels()