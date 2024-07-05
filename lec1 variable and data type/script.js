///////////// A Smarter Way to Learn JavaScript ////////////////
//chp1 Alerts ///

// An alert is a box that pops up to give the user a message. Here's code for an alert that
// displays the message "Thanks for your input!"
// syntax
// alert("Thanks for your input!"); 

// ///////////////////////////////  important Variables /////////////////////.
console.log("*************** let, var and const *************************");
// rules for variables

// Var ......cannot use in modern javaScript // global scope // can be reassign

//let ...use for making varible but in few // block scope. can be reassign

//const .....mostly use for making Varible // block scpoe // cannot be reassign...

// we cannot make same name variable globally // every variable is gloabal which is not inside the {} scope
// global variable found in scope but variable who created in scope cannot found out {} scope except var.bcz var scope is gloabal


//////////////////   Var /////////////////

// Var ......cannot use in modern javaScript // global scope // can be reassign
console.log("Learning Var on Global and Block Scope Checking its Behaivour");
var myName = "Ali" // create global scope
console.log(myName); 

{
    console.log(myName); // getting consloe on block scope
    var myhobby = "MMA" // creating varible on block scope
    console.log("consloe on block scope" + myhobby);
}
console.log("consloe on out of scope " + myhobby);

myName = "Moiz" // reassign Varible. means changing value from container
console.log(myName);
// so we se that Var is global scope variable can be reassign and can be get inside or outside scope///
console.log("var variable ended here..");


//////////////////   Let   /////////////////


//let ...use for making varible but in few // block scope. can be reassign
console.log("Learning Let on Global and Block Scope Checking its Behaivour");

let myName2 = "Ali" // create global scope
console.log(myName2); 

{
    console.log(myName2); // getting consloe on block scope
    let myhobby2 = "MMA and Swimming" // creating varible on block scope
    console.log("consloe on block scope " + myhobby2);
}
// console.log("consloe on out of scope " + myhobby2); // not show error is appear myhobbiy2 is not defined
// here we can se that myhobby2 is not showing on consle bcz 

myName2 = "Moiz" // reassign Varible. means changing value from container
console.log(myName); // my name value is reassigned


//////////////////  const   /////////////////


//let ...use for making varible but in few // block scope. can be reassign
console.log("Learning Const on Global and Block Scope Checking its Behaivour");

const myName3 = "usman" // create global scope
console.log(myName3 + " this is getting in globally"); 

{
    console.log(myName3 + " this is gettin in scope"); // getting consloe on block scope
    const myhobby3 = "MMA, Swimming and gaming" // creating varible on block scope
    console.log("consloe on block scope " + myhobby3);
}
// console.log("consloe on out of scope " + myhobby3); // not show error is appear myhobbiy3 is not defined
// here we can se that myhobby3 is not showing on consle bcz error appear why? it is define in scope or let and const have scope of block {}

// myName3 = "Moiz" // reassign Varible. means changing value from container which is not possible while we declear a Variable with const
console.log(myName3); // my name value is not reassigned.. getting older value of my name3

console.log("************************************************************\n\n\n");

console.log("********************* Data Types *************************");
console.log("Premitive Data Types");
console.log("for now we only study premitive data types\n\n\n");

console.log("*******String**********");
// 1. Strings 
// a data type that helps us store an arrangement of characters

// every statement in words numbers letter Symbols etc are written in between of `` or "" are string 
let whoAreYou = "I am a web developer" // using double qoutes
console.log(whoAreYou + "using double qoutes");

let whereAreYouFrom = `i am from karahci`
console.log(whereAreYouFrom) + "using backtiks";

let contact = "021021021"
console.log(contact);

const address = "abc/123 karachi"
console.log("\n\n\n");

console.log("*******Number**********");
let age  = 24; // written without double quotes contain only numeric or backticks
const id = 202424
console.log(age);
console.log(id);
const smallNum = 9.1 * (10 **- 19)
console.log(smallNum);


console.log("\n\n\n");
console.log("*******Boolean**********"); // have only two possiblites True or False.. "n a Boolean expression, 0 casts to false and 1 casts to true"
let studentPresent = true;
console.log(studentPresent);

{
    const studentPresent = false
    console.log(studentPresent);
}

console.log("\n\n\n");
console.log("*******Undefined**********");
// a variable has been declared but has not yet been assigned a value.
let userName;
console.log(userName); // console show undefine bcz variable is initilized but not defined..

// const emailAddress2; we cannot create undefine type by const bcz const cannot be reassigned.
// console.log(emailAddress2); // we see error in consloe. 

console.log("\n\n\n");
console.log("*******null**********");
// an assignment value that represents no value or absence of  object.  
let array = null; //The null value represents the intentional absence of any object value.
console.log(array);

console.log("\n\n\n");
console.log("*******BigInt**********");
let bigNumber = BigInt(6**24); // ** use for power
console.log(bigNumber);

let a = BigInt(1234567890123456789012345678901234567890n);
let b = BigInt(9876543210987654321098765432109876543210n);

console.log(a, b);

console.log("\n\n\n");
console.log("*******Symbol**********"); 
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique.
const sym1 = Symbol();
const sym2 = Symbol("text");
const sym3 = Symbol("text");

console.log(sym2 == sym3); // false
console.log(Symbol("foo") == Symbol("foo")); // false
console.log(Symbol("12") == Symbol("12")); // false
console.log(sym2 === sym3); // false
// return false always bcz symbol are unique each time even thier values look same...
console.log(sym1);// Symbol() output.
// const sym = new Symbol(); // TypeError we cant write it that way..

//////////////////////////////////////////////////  Rule for making Variables ///////////////////////////

// Variable Rules
// 1. Variable names are case sensitive; “a” & “A” is different.
// 2. Only letters, digits , underScore and $ are allowed. not even space 
// 3. Only letters, underScore or $ should be first character
// 4. Reserved word cannot be Variable. alert, window, function, let , var , const etc 

// can make
const myFatherName = "Nisar" // correct way called camelCase preffered way globally..
const MyFatherName = "Ali" // can make not preffered. pascal case
const age_diff_boys = "can make" // can make its called snake case
const MYNAME = "Raza" // can make but only if the value is fixed/permenant not changible..
const $name = "ghori" // can Make
const _ghori = "myname" // can make.
const data1 = "data" //can make.
const data2 = "data2" // can make
const locaion = 14; // both are diff location and Location bcz its case sensitive..
const Locaion = 14

// can not make 

// const full-school = "ali raza" not allowed
// const 1name = "ghori" // intial num not allowed.
// const my name = "shahab"; // space not allowed
// const alert = "popup" ; 
// console.log(alert); //not  good practice
// const function = "function"; // not allowed
// const let = "123" not allowed reserved words..


// objects simple for const variable understanding..
const students = {
    name: "shahab",
    age: 24,
    isPresent: true,

};
console.log(students);

students["name"] = "ghori";
students["age"] = 25;
students["isPresent"] = false;
console.log(students);


// Q1. Create a const called product to store information show in the picture 
const product = {
    name: "CT ball pen",
    rating: 4.5,
    offer: 5,
    price: 200,
}
console.log(product);















