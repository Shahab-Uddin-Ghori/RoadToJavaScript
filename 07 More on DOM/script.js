// DOM Manipulation 
// 1. Attributes..
console.log("\t\t DOM Manipulation");
console.log("\n\n\t Attribues");
// getAttribute. bring the value of element attribures
console.log("getAttribue");
{
    let firstDiv = document.querySelector("#firstDiv")
    console.log(firstDiv);
//    let firstDivAt = firstDiv.getAttribute("id")// id value // firstDiv
    let firstDivAt = firstDiv.getAttribute("class") // class value //main
   console.log(firstDivAt);
}

// setAttribute. to set the new value of attrubute of element.
let secDiv = document.querySelector("#secDiv")
console.log(secDiv);
console.log(secDiv.getAttribute("class"));// main
// .. before class was main 
secDiv.setAttribute("class","secMain")
console.log(secDiv.getAttribute("class"));//secMain


