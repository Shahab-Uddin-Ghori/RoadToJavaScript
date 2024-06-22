/////////////////////////////////// Arrays ///////////////////////////////////////
// An array in JavaScript is a type of global object that is used to store data. Arrays consist of an ordered collection or list containing zero or more data types, and use numbered indices starting from 0 to access specific items.
//You should use arrays when you want the element names to be numbers.

// Example:Arrays are "lists" of related values. Every value in the array is usually of the exact same type and only differentiated by the position in the array. For example, all the quiz scores for a test could be stored in an array with the single variable name: quiz_scores.

// Array are collection of items. each item/character have specific index starting from 0..
console.log("\n\n\t\t\t Learning Array \n\n");
{
    let heroes = ["superman", "San Goku", "Iron Man", "Captain"] // string only.. perffered
    let socres = [23, 50, 80, 70, 50] // string only.. perffered
    let info = ["ali", 24, "liaquatabad"] // can make array of different Data type but its  not preferred. we should make array of same data type. // not preffered
}

{
    console.log("\n lenght of array \n");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    console.log(cars); // array
    // checking length of array. length always start with 1.
    console.log(cars.length);// 5
}
{
    // checking  index of array. index always start with 0..
    console.log("\n index of array \n");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    console.log(cars[0]); // honda
    console.log(cars[1]); // toyota
    console.log(cars[2]); // suzuki
    console.log(cars[3]); // ferrari
    console.log(cars[4]); // bmw
}
{
    console.log("\n nested index of array \n");
    // if specific index is not present means. index is +1 greater than lenght of array... then it returns
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
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
    let array = [1,2,3,5,9,0,25]
    console.log(typeof array); // object
}

{
    console.log("\nreassigning index of array \n");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    console.log(cars);
    cars[3]= "mercides" // reassigning the 3rd index or 4th character of array.. // old = ferrari, new = mercides
    console.log(cars); 
    // as we see we can reassign orignal array unline stings which are immutibile (not changible)
    // we can say that "arrays are mutible(changible/reassignible"
}
    //looping over an array
    // for loop // prefferable
{
    console.log("\nlooping over an array  \n"); // print all element of array
    console.log("by for loop");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    for (i=0 ; i<cars.length; i++){ //. iterator
        console.log(cars[i]);
        console.log(typeof (cars[i])); // return in form of string..
    }

}
//for-of loop // // prefferable
{
    console.log("by for-of loop");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    for (let company of cars){
        console.log(company);
    }

}
{
    console.log("by for-of loop");
    let cities = ["karachi", "islamabad", "multan", "lahore", "murree", "hunza"]
    for (let name of cities){
        console.log(name);
    }
}

// for-in loop // not prefferable in array. used for objects...
{
    console.log("by for-in loop");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    for (let company in cars){
        console.log(cars[company]);
    }

}

{
    // practice Qns .
    //Q. uppercase ecach word of array by for loop and for-of loop
    console.log("by for loop practice on array");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    for (let i = 0; i<cars.length; i++){
        console.log(cars[i].toUpperCase());
    }

}
{
    //Q. uppercase ecach word of array by for loop and for-of loop
    console.log("by for-of loop practice on array");
    let cars = ["honda", "toyota", "suzuki", "ferrari", "bmw"]
    for (let name of cars){
        console.log(name.toUpperCase());
    }

}