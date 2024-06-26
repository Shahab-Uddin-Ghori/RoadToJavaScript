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
console.log(sentence);
let splitSentence = sentence.split("")
// console.log(splitSentence);
function returnVowels(){
  let vowels = []
  for (let i = 0; i<splitSentence.length; i++){
    // console.log(splitSentence[i]);
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

// for each loop in array.
// The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array.
// callback 
//It takes a callback function as an argument and applies it to each element of the array.
// it is a higher order funtion
// function can be pas as parameters, argument
// callback function:  is a function which passed as an argumentn to another funcion.

// foreach is only used for array. not for string
// it do not return new array like map() method


{
  console.log("\n\t\t for rach()");
  console.log("\n\t example 1");
  let arr = [1,2,5,7,9,12]
  arr.forEach(function print(value){ //value at each index of array
    console.log(value);
  })
}

// foreach has three parameter.. 1. (each value/charachter of array) 2. (index of array) 3. (array )
// name of parameters are self choice..
{
  console.log("\n\t example 1");   
  let arr = ["karchi", "islamabad", "hyderabad", "multan", "peshawar"]
  arr.forEach(function print(value,index,arr){
    console.log(value,index,arr);// value, index , array are three parameters of forEach() method
  })

}

// Interview prespective
// higher oder functions or higher order methods ?
// higher order funtion/method are those function that take another function as a perameter or return another function..  
//forEach() is H.O.F/HOM

// Q. for a given array of numbers, print the sqaure of each value and safe into new array..
{
  console.log("\n\n\Q. For a given array of numbers, print the sqaure of each value and safe into new array..\n\n");
  let arr = [2,4,6,9,12,15];
  console.log("arr before square");
  console.log(arr);
  let sqrOfArr = [];
  arr.forEach(function valueOfArray(value){
    value *= value
    sqrOfArr.push(value)
    // console.log(value);
  })
  console.log("after square each value of array by forEach()/higher order function");
  console.log(sqrOfArr);
}

{
  console.log("\n\n same qn by ()=>{} function\n\n");
  let arr = [2,4,6,9,12,15];
  console.log("arr before square");
  console.log(arr);
  let sqrOfArr = [];
  arr.forEach((sqr) => {
    sqr*=sqr
    sqrOfArr.push(sqr)
  })
  console.log("after square each value of array by forEach()/higher order function");
  console.log(sqrOfArr);
}

// IIFE = Immediately Invoked Function Expression
(function () {
  console.log("FOO!");

})();

// map() method
//In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array.
// map return new array while forEach not.
// it is a higher-order function that takes a callback function as an argument.

////////////////////////// diff btw map() and forEach()/////////////////////////////////////////////////////////////////////
//While both map() and forEach() perform similar actions, there are some key differences in their performance. One significant difference is that map() returns a new array, whereas forEach() does not. This means that if you need to create a new array based on the values of an existing array, map() is the better choice
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.....
console.log("\n\n\t\t map() method on array");
{
  console.log("example1");
  let arr =[1,4,6,8]
  arr.map((value)=>{
    console.log(value);
  })

}
{

  console.log("example2");
  let arr =[1,4,6,8]
  let newarr =  arr.map((value)=>{
    value*=value
    return value
  })
  console.log(newarr);
}

///////// filter()/////////


{
  let arr = [1,3,5,6,8,10,15,14,22]
  let arrFilter = arr.filter((evenValue) => {
   return evenValue % 2 === 0;
  })
  console.log(arrFilter);
}

///// example///
{//map
  const students = [
    { name: 'Alice', grades: { math: 80, english: 90, science: 85 } },
    { name: 'Bob', grades: { math: 70, english: 75, science: 65 } },
    { name: 'Charlie', grades: { math: 90, english: 85, science: 95 } },
];

const studentsWithAverages = students.map(student => {
    const grades = Object.values(student.grades);
    const average = grades.reduce((acc, grade) => acc + grade, 0) / grades.length;
    return { ...student, average };
});

console.log(studentsWithAverages);

}
{
  //filter
  const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Mouse', price: 20, inStock: true },
    { name: 'Keyboard', price: 70, inStock: false },
    { name: 'Monitor', price: 300, inStock: true },
    { name: 'USB Cable', price: 10, inStock: false },
];

const availableExpensiveProducts = products.filter(product => product.inStock && product.price > 50);

console.log(availableExpensiveProducts);

}

{ // Nested map() and filter()
  const numberArrays = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

const processedNumbers = numberArrays.map(arr =>
    arr.filter(num => num % 2 !== 0).map(num => num * num)
);

console.log(processedNumbers);

}

{// Transforming and Filtering with map() and filter()
  const sentences = [
    'The quick brown fox jumps over the lazy dog',
    'Hello world',
    'JavaScript is awesome',
    'I love coding',
    'Functional programming is powerful',
];

const longUppercaseSentences = sentences
    .filter(sentence => sentence.split(' ').length >= 5)
    .map(sentence => sentence.toUpperCase());

console.log(longUppercaseSentences);

}

{// Advanced Object Transformation
  const users = [
    { name: 'Alice', scores: [50, 60, 70, 80, 90] },
    { name: 'Bob', scores: [20, 30, 40, 50, 60] },
    { name: 'Charlie', scores: [80, 85, 90, 95, 100] },
];

const usersWithHighestScores = users.map(user => {
    const highestScore = Math.max(...user.scores);
    return { name: user.name, highestScore };
});

console.log(usersWithHighestScores);

}

{ //Transforming Nested Data Structures
  const teams = [
    {
        name: 'Team A',
        players: [
            { name: 'Alice', score: 50 },
            { name: 'Bob', score: 40 },
            { name: 'Charlie', score: 60 }
        ]
    },
    {
        name: 'Team B',
        players: [
            { name: 'Dave', score: 70 },
            { name: 'Eve', score: 65 },
            { name: 'Frank', score: 55 }
        ]
    }
];

const threshold = 50;
const filteredTeams = teams.map(team => ({
    ...team,
    players: team.players.filter(player => player.score > threshold)
}));

console.log(filteredTeams);

}

{// Combining map() and filter() with Multiple Conditions
  const employees = [
    { name: 'Alice', department: 'HR', salary: 50000, active: true },
    { name: 'Bob', department: 'Engineering', salary: 60000, active: false },
    { name: 'Charlie', department: 'Finance', salary: 70000, active: true },
    { name: 'Dave', department: 'Engineering', salary: 45000, active: true },
];

const minSalary = 50000;
const activeHighSalaryEmployees = employees
    .filter(employee => employee.active && employee.salary >= minSalary)
    .map(employee => ({ name: employee.name, department: employee.department }));

console.log(activeHighSalaryEmployees);

}

{ //  Data Aggregation and Transformation
  const transactions = [
    { id: 1, category: 'Groceries', amount: 50 },
    { id: 2, category: 'Entertainment', amount: 100 },
    { id: 3, category: 'Groceries', amount: 30 },
    { id: 4, category: 'Utilities', amount: 60 },
    { id: 5, category: 'Entertainment', amount: 40 },
];

const categoryTotals = transactions
    .map(transaction => ({ [transaction.category]: transaction.amount }))
    .reduce((acc, curr) => {
        const category = Object.keys(curr)[0];
        acc[category] = (acc[category] || 0) + curr[category];
        return acc;
    }, {});

console.log(categoryTotals);

}

{//Advanced Filtering with Nested Conditions
  const orders = [
    { id: 1, status: 'shipped', total: 150 },
    { id: 2, status: 'pending', total: 200 },
    { id: 3, status: 'shipped', total: 50 },
    { id: 4, status: 'shipped', total: 300 },
    { id: 5, status: 'pending', total: 100 },
];

const minTotal = 100;
const shippedOrdersAboveMinTotal = orders.filter(order => order.status === 'shipped' && order.total > minTotal);

console.log(shippedOrdersAboveMinTotal);

}

{//  Transforming Data with Nested Arrays
  const users = [
    {
        name: 'Alice',
        posts: [
            { title: 'Post 1', likes: 50 },
            { title: 'Post 2', likes: 20 },
            { title: 'Post 3', likes: 70 }
        ]
    },
    {
        name: 'Bob',
        posts: [
            { title: 'Post 1', likes: 10 },
            { title: 'Post 2', likes: 30 },
            { title: 'Post 3', likes: 90 }
        ]
    }
];

const minLikes = 30;
const usersWithPopularPosts = users.map(user => ({
    ...user,
    posts: user.posts.filter(post => post.likes > minLikes)
}));

console.log(usersWithPopularPosts);

}

///////////////// practice Qns//////////////////

{
  //Q, filter marks of students which are greater than 90 and save it in new array
  console.log("\n\nfilter marks of students which are greater than 90\n\n");
let marks = [87, 93, 64, 99, 86]
let Marks90Plus = marks.filter((marks)=>{
 return marks > 90
})
console.log(Marks90Plus);
}
{
  console.log("\n\nSame Qn by another way");
  let markOfStudent = [30, 50, 98, 91, 99, 34 ,31, 90 ,90 ,91, 91, 91]
  let greaterMarksThan90 =[]
  markOfStudent.forEach((value)=>{
    if (value > 90) {
      greaterMarksThan90.push(value)
    }
  })
  console.log(greaterMarksThan90);
}
{
  // no of vowels in sentence
  console.log("\n\nfilter vowels by filter method\n\n");
  let sentence = "this is my sentence to check no of vowels"
  console.log(sentence);
  let sentenceToArray = sentence.split("")
  let vowelsInSentence = sentenceToArray.filter((vowels)=>{
    return vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"
  })
  console.log(vowelsInSentence);
}

{
  // Q. Take an input n from user. create an array of numbers from 1 to n.
  console.log("\n\nQ. Take an input n from user. create an array of numbers from 1 to n.\n make sum of these values of array by reduce method");
  let userInp = prompt("enter number between 1 to 10")
  
    while( isNaN(userInp) || userInp === ""){
      console.log(userInp);
      alert("plz enter numeric value")
      userInp = prompt("enter number between 1 to 10")
    }
    userInp = +userInp
    let array = []
    for (let i = 1; i<=userInp; i++){
      array.push(i)
    }
  console.log(userInp);
  console.log(array);
  console.log("sum of these array");


  // reduce method
  //The array reduce in JavaScript is a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.

  let sum = array.reduce((res, currVal)=>{
    return res + currVal
  })
  console.log("sum of val of array is ", sum);
  let mul = array.reduce((res, currVal)=>{
    return res * currVal
  })
  console.log("factorial of val of array is ", mul);
  }