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

// splice() method
// JavaScript Array splice() Method is an inbuilt method in JavaScript that is used to change the contents of an array by removing or replacing existing elements and/or adding new elements. It modifies the original array and returns an array of the removed elements.
// splice(startIndex, deleteCount, newAdd) // splice(add, remove, replace)
// also can return remove element in new variable

console.log("\n\t\t\tslice() method");
{
  console.log("\t\t example 1");
  let dc = ["superman", "batman", "flash", "wonder Woman"]
  console.log(dc);
  dc.splice("1","2","black","shzm") // change in origanl array.. start from index 1.... delete 2 index(batman,flash)... added newElement(black,shzm)  
  console.log(dc);

  console.log("\t\t example 2");
  let marvel = ["captain", "hawkeye", "hulk", "natasha", "rocket"]
  console.log(marvel);
  let removeElement = marvel.splice(2,1, "banner","tony") // start form index 2.. delete 1 element... new added element "banner,tony"
  console.log(removeElement); // return remove variable .. hulk
  console.log(marvel);

  // only adding element without delete any index
  let foods2 = ["apple", "banana", "orange", "peach", "mango"];
  console.log("\t\t example 3");
  console.log("adding only without delete on specific index");
  console.log(foods2);
  foods2.splice("2","0","grapes") // add grapes on index 2 // delete element 0
  console.log(foods2); //'apple', 'banana', 'grapes', 'orange', 'peach', 'mango'

  console.log("\t\t example 4");
  console.log(" only removing element on specific index without adding any element");
  let arr = [1, 5, 10, 50, 40 ,30, 90, 70]
  console.log(arr);
  arr.splice("2","3")// delete 3 elelment from index 2 and add nothing
  console.log(arr); // 1,5,30,90,70

  // splice act like slice if we not provide both delete count and addelement
  console.log("\t\t example 5");
console.log("splice act like slice");
let arr2 = ["alikhan", "usman ghazi", "ertugul", "orhan"]
console.log(arr2);
let actSlice = arr2.splice(1)
console.log(actSlice);//usman ghazi", "ertugul", "orhan" // splice act like slice
console.log(arr2); // change orignal array remain with only // alikhan 

// if no index provided nothing will change in array
console.log("\t\t example 6");
let arr3 = ["water" , "drink", "honey", "milk"]
console.log(arr3);
arr3.splice()
console.log(arr3);

}

// practice qns.
//  create an array to store companies Bloomberg, microsoft, uber, google, IBM, netflix
//1. remove the first company from array
//2. remove uber and add ola from its place
//3. add amazon at the end.

{
  console.log("\n\n\t\t\t Practice Qns \n\n");
  let companies = ["Bloomberg", "microsoft", "uber", "google", "IBM", "netflix"]
  console.log(companies);
  companies.shift()// remove first element 
  companies.splice("1","1","Ola") //remove uber and add ola from its place
  companies.push("amazon") // add amazon at end
  console.log(companies);

}

{
  // more methods on array 
  console.log("\n\n\t\t More Method on array");
  let arr = [1,2,4,7,8];
  console.log(arr);
  // inlcudes
  console.log(arr.includes(9));// return in boolean true/false.. means specific element ispresent/notpresent in an array // false 
  // indexOf
  console.log(arr.indexOf(2)); // 2 element is at index 1. // 1
  console.log(arr.indexOf(5));// -1 if the specific element is not present in array indexOf return -1. 
  // join 
  let arr2 = [1,2,3,6]
  console.log(arr2); // type object
  console.log(typeof arr2);
  let newArr = arr2.join() // convert array into string with same value
  console.log(newArr); // type string
  console.log(typeof newArr); //type string
}

// spread operator for array..
{
  console.log("\n\n\t\t spread operator on array");
  let dc = ["superman", "batman", "flash", "wonder Woman"]
  let marvel = ["captain", "hawkeye", "hulk", "natasha", "rocket"]
  let heroes = [...dc , ...marvel] // concate dc and marvel array
  console.log(heroes);
} 