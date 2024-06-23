/////////////////////////////////// Arrays ///////////////////////////////////////
// An array in JavaScript is a type of global object that is used to store data. Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items.
//You should use arrays when you want the element names to be numbers.

// Example:Arrays are "lists" of related values. Every value in the array is usually of the exact same type and only differentiated by the position in the array. For example, all the quiz scores for a test could be stored in an array with the single variable name: quiz_scores.

// Array are collection of items. each item/character have specific index starting from 0..
console.log("\n\n\t\t\t Learning Array \n\n");
{
  let heroes = ["superman", "San Goku", "Iron Man", "Captain"]; // string only.. perffered
  let socres = [23, 50, 80, 70, 50]; // string only.. perffered
  let info = ["ali", 24, "liaquatabad"]; // can make array of different Data type but its  not preferred. we should make array of same data type. // not preffered
}

{
  console.log("\n lenght of array \n");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  console.log(cars); // array
  // checking length of array. length always start with 1.
  console.log(cars.length); // 5
}
{
  // checking  index of array. index always start with 0..
  console.log("\n index of array \n");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  console.log(cars[0]); // honda
  console.log(cars[1]); // toyota
  console.log(cars[2]); // suzuki
  console.log(cars[3]); // ferrari
  console.log(cars[4]); // bmw
}
{
  console.log("\n nested index of array \n");
  // if specific index is not present means. index is +1 greater than lenght of array... then it returns
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  console.log(cars.length); // 5 if the index number is greater or euqal to lenght of array it will return Undefined.. // if less the give character
  console.log(cars[9]); // undefined
  console.log(cars[-1]); // undefined
  console.log(cars[0][0]); // cars [0] == honda , cars[0][0] == h .. which is at 0 index of honda..
  console.log(cars[2][0]); // cars [2] == suzuki , cars[2][0] == s .. which is at 0 index of suzuki..
  console.log(cars[2][1]); // cars [2] == suzuki , cars[2][1] == u .. which is at 1 index of suzuki..
}

{
  console.log("\narray  typeof\n");
  /// type of array is object//
  let array = [1, 2, 3, 5, 9, 0, 25];
  console.log(typeof array); // object
}

{
  console.log("\nreassigning index of array \n");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  console.log(cars);
  cars[3] = "mercides"; // reassigning the 3rd index or 4th character of array.. // old = ferrari, new = mercides
  console.log(cars);
  // as we see we can reassign orignal array unline stings which are immutibile (not changible)
  // we can say that "arrays are mutible(changible/reassignible"
}
//looping over an array
// for loop // prefferable
{
  console.log("\nlooping over an array  \n"); // print all element of array
  console.log("by for loop");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  for (i = 0; i < cars.length; i++) {
    //. iterator
    console.log(cars[i]);
    console.log(typeof cars[i]); // return in form of string..
  }
}
//for-of loop // // prefferable
{
  console.log("by for-of loop");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  for (let company of cars) {
    console.log(company);
  }
}
{
  console.log("by for-of loop");
  let cities = ["karachi", "islamabad", "multan", "lahore", "murree", "hunza"];
  for (let name of cities) {
    console.log(name);
  }
}

// for-in loop // not prefferable in array. used for objects...
{
  console.log("by for-in loop");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  for (let company in cars) {
    console.log(cars[company]);
  }
}

{
  // practice Qns .
  //Q. uppercase ecach word of array by for loop and for-of loop
  console.log("by for loop practice on array");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  for (let i = 0; i < cars.length; i++) {
    console.log(cars[i].toUpperCase());
  }
}
{
  //Q. uppercase ecach word of array by for loop and for-of loop
  console.log("by for-of loop practice on array");
  let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"];
  for (let name of cars) {
    console.log(name.toUpperCase());
  }
}

{
  // practice qns 2
  console.log(
    "find the average marks of class [86,79,65,45,46,32,78,98,12,8,4,3,0,0]\n"
  );
  console.log("by for loop");
  // find the average marks of class [86,79,65,45,46,32,78,98,12,8,4,3,0,0]
  let marks = [86, 79, 65, 45, 46, 32, 78, 98, 12, 8, 4, 3, 0, 0];
  let sumOfMarks = 0;
  for (i = 0; i < marks.length; i++) {
    sumOfMarks += marks[i];
  }
  let avgMarksOfClass = sumOfMarks / marks.length;
  console.log(marks);
  console.log("no of marks of students of 'n' is ", marks.length);
  console.log("sum of marks ", sumOfMarks);
  /////////////// Imt if we use , number and number both have thier datatypes as number and string..but if we concate with + it/number will become string also.
  console.log("average marks of class ", avgMarksOfClass);
}

{
  // practice qns 2
  console.log(
    "\n\n find the average marks of class [86,79,65,45,46,32,78,98,12,8,4,3,0,0]\n"
  );
  console.log("by for-of loop practice on array");
  // find the average marks of class [86,79,65,45,46,32,78,98,12,8,4,3,0,0]
  let marks = [86, 79, 65, 45, 46, 32, 78, 98, 12, 8, 4, 3, 0, 0];
  let sumOfmarks = 0;
  for (value of marks) {
    sumOfmarks += value;
  }
  console.log("sum of marks is ", sumOfmarks);
  console.log("no of marks 'n' is ", marks.length);
  let avgOfmarks = sumOfmarks / marks.length;
  console.log("average marks of class is ", avgOfmarks);
}

{
  // practice q3
  //Q. for a given array with price of 5 items [100, 200, 500, 1000, 245, 568, 984, 239]. All items have an offer of 10% off on them. change the array to store final price.
  console.log(
    "\nfor a given array with price of 5 items [100, 200, 500, 1000, 245, 568, 984, 239]. All items have an offer of 10% off on them. change the array to store final price.\n"
  );

  let originalPrice = [100, 200, 500, 1000, 245, 568, 984, 239, 100];
  let discountedPrice = [];

  for (let i = 0; i < originalPrice.length; i++) {
    discountedPrice.push(originalPrice[i] - originalPrice[i] / 10);
    // console.log(discountedPrice[i]);
  }

  console.log(originalPrice);
  console.log(discountedPrice);
}
// {

//     let originalPrice = [100,200,500,1000,245,568,984,239,100];
//     for (let i = 0 ; i < originalPrice.length; i++){
//         let discountedPrice = originalPrice[i]/10
//         originalPrice[i] -= discountedPrice
//         // console.log(discountedPrice.slice(discountedPrice[i].length - discountedPrice.length));

//     }
//     console.log(originalPrice);
// }

////////////////////////// Array Methods. ////////////////////////
console.log("\n\n\t\t\t Array Methods \n\n");
// push method
// push method add in array to end. it change in orignal array
{
  console.log("\t\t example 1");
  console.log("push() method");
  let originalPrice = [100, 200, 500, 1000, 245, 568, 984, 239, 100];
  originalPrice.push(50);
  console.log(originalPrice);
  console.log("\t\t example 2");
  let foods = ["apple", "banana", "orange"];
  console.log(foods);
  let addedPush = foods.push("mango", "coconut", "dragon Fruit", "watermallon"); // can add multiple characters/words at a time.
  console.log(foods);
  console.log(addedPush); // it will return lenght of array
}

{
  // pop method
  // pop method remove in array to end. it change in orignal array. but also can return delted value in new variable
  console.log("pop() method");
  console.log("\t\t example 1");
  let foods = ["apple", "banana", "orange", "peach", "grapes"];
  console.log(foods);
  foods.pop();
  console.log(foods);

  console.log("\n\t\texample 2");
  let foods2 = ["apple", "banana", "orange", "peach", "grapes", "mango"];
  console.log(foods2);
  let delteFruit = foods2.pop();
  console.log("delete value is ", delteFruit);
}

// toString Method.
// it convert array into string. it will not change  in orignal array you have to make new variable to make it change
// it return new string
{
  console.log("\t\t example 1");
    let arr = [1, 5 , 6]
    let newArr = arr.toString()
    console.log(arr);
    console.log(newArr);
  console.log("\n\t\texample 2");
  let arr2 = ["ali", "usman", "khan"]
  let newArr2 = arr2.toString()
  console.log(arr2);
  console.log(newArr2);
}
{
    // cocat() method
    // cocat is used to join mulltiple array like string. it will not change in orignal array but return new array.
    // join multiple array and return result.
  console.log("\t\t example 1");
    console.log("\n\n\t\t\t cocat() method");
    let marvel = ["captain", "hawkeye", "hulk", "natasha", "rocket"]
    let dc = ["superman", "batman", "flash", "wonder Woman"]
    let joinMarvelAndDc = marvel.concat(dc)
    console.log(joinMarvelAndDc);
    console.log(dc);
    console.log(marvel);

  console.log("\n\t\texample 2");
 let arr = ["water", "softdrink",]
 let arr2 = ["juice", "honey"]
 let arr3 = ["milk","serup"]
 let arr4 = arr.concat(arr2,arr3)
 console.log(arr4);
}

// shift method
  // shift method remove in array to start. it change in orignal array. but also can return delted value in new variable
  console.log("\n\t\t\tshift() method");
  {
  console.log("\t\t example 1");
  let marvel = ["captain", "hawkeye", "hulk", "natasha", "rocket"]
  console.log(marvel);
    marvel.shift()
  console.log(marvel);
  console.log("\t\t example 2");
  let dc = ["superman", "batman", "flash", "wonder Woman"]
  console.log(dc);
  let deletedValue = dc.shift()
  console.log("after shift deleted value is ", deletedValue);
  console.log("after shift array  is ", dc);

}

// unshift method
// unshift method add in array to start. it change in orignal array
console.log("\n\t\t\tunshift() method");
{
  console.log("\t\t example 1");
  let marvel = ["captain", "hawkeye", "hulk", "natasha", "rocket"]
  console.log(marvel);
  marvel.unshift("dr strange","vision") // can add multiple like push. but in start
  console.log(marvel);
  console.log("\t\t example 2");
  let dc = ["superman", "batman", "flash", "wonder Woman"]
  let addedarray = dc.unshift("cyborg", "supergitrl" ,"robin")
  console.log(addedarray); // unshift do not return added value but it will return  lenght of array 
}

// slice in array
//same as string. can chk on lec 3/
// dont change in orignal array and reutrn a specific part / slice of array in new variable.
// slice(startIndex,endIndex) endIndex is not inclusive(character/value of this index will not include)
console.log("\n\t\t\tslice() method");
{
  console.log("\t\t example 1");
  let dc = ["superman", "batman", "flash", "wonder Woman"]
  console.log(dc);
  let sliceValue = dc.slice("0","2")
  console.log(sliceValue);
  console.log(dc.slice(2,3)); // flash 
  console.log(dc.slice(2,4)); // flash ,wonder woman
  console.log(dc);

}
