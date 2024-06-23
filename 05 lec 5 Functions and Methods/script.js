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
