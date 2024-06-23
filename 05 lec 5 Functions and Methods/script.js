///// Function in Js////////////////
//  block of code that peform a specific task, can be invoked(use/call) whenever needed.. // to perform same task again
// function help to reduce redundancy(repeatation of code).... redundancy is not good way to write code.
// basic function.
function myFunction1 (){ // function functionName () { your code };
    console.log("this is my first function");
}
myFunction1(); // call/invoke the function. whenever you call the function by funcationName it will execute code...... // this is my first function"

//// function parameter and Arruguments////////
// parameter and arguments
// Function parameters are the names listed in the function definition. Function arguments are the real values passed to (and received by) the function.
function myFunction2 (msg){ // () in between these brackets are written called parameter..
console.log(msg);
}
myFunction2(2) //argument..
myFunction2("this is my second function") // argument. this value is recvied by  parameter
  // variable on function defination is called "parameter".
  //value pass in function call called argument.

  // multiple parameter and arguments

  function myFunction3 (a, b, c){
    let sum = a + b + c
    let mul = a*b*c
    let equ = a + b * c
    console.log(`sum of a+b+c = ${sum}\n mul of a*b*c = ${mul}\n equ a+b*c = ${equ}`);
  }
  myFunction3(2,3,5) // can provide diff value each time when call function
  myFunction3(0,1,2) 
  myFunction3(1,1,1)
  myFunction3(-10,1,-2) 
