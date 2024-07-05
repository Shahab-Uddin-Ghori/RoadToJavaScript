// DOM Manipulation 
// 1. Attributes..
console.log("\t\t DOM Manipulation");
console.log("\n\n\t Attribues");
// getAttribute. bring the value of element attribures
console.log("\ngetAttribue");
{
    let firstDiv = document.querySelector("#firstDiv")
    console.log(firstDiv);
//    let firstDivAt = firstDiv.getAttribute("id")// id value // firstDiv
    let firstDivAt = firstDiv.getAttribute("class") // class value //main
   console.log(firstDivAt);
}

// setAttribute. to set the new value of attrubute of element.
console.log("\n\set attribute");
let secDiv = document.querySelector("#secDiv")
console.log(secDiv);
console.log(secDiv.getAttribute("class"));// main
// .. before class was main 
secDiv.setAttribute("class","secMain")
console.log(secDiv.getAttribute("class"));//secMain

//Node.Stye //node/elementName for changing style of element by js
{
    console.log("chaning sytle by js ");
let firstDiv = document.querySelector("#firstDiv")
firstDiv.style = "background-color:aqua;width:100px;height:100px;"
// firstDiv.style = "visibility:hidden;"

}


// same work by class
{
    console.log("chaning sytle by js ");
let secDiv = document.querySelector("#secDiv")
secDiv.style = "background-color:red;width:100px;height:100px;margin-top:2rem;border:4px solid #fafc;padding:1rem;"
// firstDiv.style = "visibility:hidden;"

}


////////////////////////////////////// Inserting Element ////////////////////////////////////////////////////////
console.log("\n\n\n \t\t\t Inserting Element by Js");
//1. create element by js

// document.createElement(elementName) // create new element 
console.log("\n\n create element");
// div created 
let divCreateByJs = document.createElement("div") // element create
console.log(divCreateByJs);
divCreateByJs.style = "width:100%;background-color:aqua; margin-top:1rem;padding:1rem" //style
divCreateByJs.setAttribute("class","jspara") // adding classes
// console.log(divCreateByJs.getAttribute("class"));

// para created
let paraCreateByJs = document.createElement("p") // p created
paraCreateByJs.innerText = "this para is created by js" // write text on para
console.log(paraCreateByJs);

// h1 created
let h1CreateByJs = document.createElement("h1")// h1 created
h1CreateByJs.innerText = "This h1 is created by js" // text added on h1
h1CreateByJs.setAttribute("id","h1byjs") // add id= h1byjs
h1CreateByJs.style = "text-align: center;" // style

//button created
let buttonCreateByJs = document.createElement("button")
buttonCreateByJs.innerText = "click Me"
buttonCreateByJs.style = "width:8rem;font-size:1rem;padding:.5rem;border-radius:7px;"
console.log(buttonCreateByJs);
////////////////////////////////////////////////////////

console.log("\n\n append element");
// 2. node.append(element) // add at the end of the node (inside the given element)
// adding button by node.appen(elementName)

// add div which is created by js variable = "divCreatedByJs"
body.append(divCreateByJs) //append div in body
divCreateByJs.append(h1CreateByJs)
divCreateByJs.append(buttonCreateByJs) // append button in div
divCreateByJs.append(paraCreateByJs)

// 3. node.prepend(element) // add at start of the node (inside the given element)
let div2 = document.createElement("div")
div2.setAttribute("id","div2")
// console.log(div2.getAttribute("id")); // div2
div2.style = "width: 100%;background-color:gray;margin-top:1rem;padding:1rem;"
body.append(div2)

let h4 = document.createElement("h4")
h4.innerText = "this h4 is created by js"
h4.style = "text-align:center;"

let h3 = document.createElement("h3")
h3.innerText = "this h3 is created by js"
h3.style = "text-align:center;"


let h2 = document.createElement("h2")
h2.innerText = "this h2 is created by js"
h2.style = "text-align:center;"

let h1 = document.createElement("h1")
h1.innerText = "this h1 is created by js"
h1.style = "text-align:center;"

console.log("\n\n prepend element");
div2.prepend(h4) 
div2.prepend(h3)
div2.prepend(h2)
div2.prepend(h1)

  // 3. node.after(element) and node.bfter(element) (add element before and after of given element)
 let div3 = document.createElement("div")
div3.style = "width: 100%;background-color:skyblue;margin-top:1rem;padding:1rem;"
 div3.setAttribute("id","div3")
//  console.log(div3.getAttribute(id)); // div3
// create form
let form = document.createElement("form")

// create input and manipulation
let input = document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","Write username")
input.setAttribute("required","required")
console.log(input);

// create button
let button = document.createElement("button")
button.innerText = "Check"

//create h1
let sech1 = document.createElement("h1")
sech1.innerText = "This h1 is inserted before form by js"
sech1.style = "text-align:center;"

//create para
let para2 = document.createElement("p")
para2.innerText = "this para is inserted after button by js"
para2.style = "text-align:center;"

// first we use append for inserting div at the end of body and form in the div then we use before and after
body.append(div3)
div3.append(form)
form.append(input)

// node.after(element)
input.after(button)

//node.before(element)
form.before(sech1)
button.after(para2)
// node.after(element)

console.log("\n\t\t Delete Node");
// delte node. 
let createPara = document.createElement("p")
body.append(createPara)
console.log(createPara);
createPara.innerText = "this is para of delete learning by DOM"

// delteing
createPara.remove()











