//DOM Document Object Model..
//The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

// window object
// the window object represent an open window in a browser. It is browser object (not javaScript). it is automatically created by browser.
// it is a global with lots of properties and methods.

// console.log() print dom element
//consloe.dir // to bring  window objects
//example consloe.dir(window.document)
console.log(console.dir(window.document));
console.log(console.dir(window.document.all));// our complete html document
console.log(console.dir(window.document.all[6]));// body
console.log(console.dir(window.document.all[7]));// div
console.log(console.dir(window.document.all[8]));// h1
console.log(console.dir(window.document.all[9]));//p

// window => document(model of html)
// DOM is a html model
// DOM is tree like structure
// tree every branch/box/ (each element of html is node)... and  Node(each node is an object)

// Node
// A "node", in this context, is simply an HTML element. The "DOM" is a tree structure that represents the HTML of the website, and every HTML element is a "node". See Document Object Model (DOM). More specifically, "Node" is an interface that is implemented by multiple other objects, including "document" and "element".

// window ---> document ----> html..
// html divdes two parts..
// 1. Html ---> head ---> meta,meta,title,link
// 2. Html ---> body ---> complete structure of website and Srcipt tag
// like hierarchy (start up, end down) model

// practicing child node 
// node has how many object/child : node ---> childNode
// node ----> childNote ---> childNote
// to check child not has or not we use hasChildNodes() method to check node has child or not it reurn true or false
console.dir(document.body) // we can also write it direct bcz as we know window is global and document is a part of it.
console.dir(document.body.childNodes[1])//div
console.dir(document.body.childNodes[1].hasChildNodes())// return true or false if child present or not
console.dir(document.body.childNodes[1].childNodes[4])//h3
console.dir(document.body.lastElementChild)//script

// print in consloe h1 text by js using window object..
console.log("\n\n print in consloe h1 text by js using window object..");
console.log(console.dir(document.body.childNodes[1].childNodes[1].
    innerText));
// print in consloe h1 text by js using window object..
console.log("\n\n print in consloe h3 text by js using window object..");
console.log(console.dir(document.body.childNodes[1].childNodes[4].innerText));

// change h1 text by js using window object..
console.log("\n\n change h3 text by js using window object..");
console.log("changed done just comment out..");
// console.log(console.dir(document.body.childNodes[1].childNodes[1].innerText = "change h1 text by Window"));

// change h1 element to h2 by js using window object..
// console.log(console.dir(document.body.childNodes[1].childNodes[1].innerHTML = "<h2> DOM Document object model changed h1 to h2 by wondow object</h2>"));
console.log("\n\nchange h1 element to h2 by js using window object..");
console.log("changed done just comment out..");

//changing dynamically bg color of body using js.
// console.dir(document.body.style = "background-color: aqua;");

// use of DOM ?
// dynamically changes (changes depend on user) DOM is used...
// DOM involved changes in webpage by javaScript. not by HTML and CSS  



/////////////////// IMP ////////////////
// if we write our script tag or link before body Means The script load first before body the body will be null
// console.dir(document.body) // null(empty object).
// we cannot access DOM element if we put script tag before body

///// explantion of script tag before, after and defer attribute
/*Before <body>:
Scripts placed in the <head> section are generally executed as soon as the browser encounters them. This can lead to errors if your script relies on DOM elements that haven't been parsed yet (since the browser hasn't reached the <body> yet).
After <body>:
Scripts placed before the closing </body> tag execute once the entire HTML document has been parsed, including the DOM elements. This ensures you can access elements without encountering errors. However, this placement can potentially delay the execution of your script, impacting the perceived performance of your page.
The defer Attribute:

The defer attribute instructs the browser to download the script in parallel with HTML parsing but defer its execution until after the HTML document, including the DOM, has been fully parsed. This allows your script to access DOM elements without blocking the initial rendering of your page.
Key Points about defer:
Scripts with defer are generally executed in the order they appear in the HTML (though exact timing might vary slightly across browsers).
It's not suitable for scripts that need to execute as soon as possible (e.g., critical rendering path code).
*/


// DOM Manipulation
// 1. selecting with ID
// syntax document.getElementById("idName")
console.log("\n\n DOM manipulation: getElementById\n\n");


console.log("let domById = document.getElementById(\"mainHeading\")");
// element
/*
{

    let domById = document.getElementById("mainHeading")
    console.log(domById); // complete h1 with attribute
}
*/


// changing style 
/*
{
    let domById = document.getElementById("mainHeading")
    domById.style = "color:red;" //h1 color changed to red
    console.log(domById); 
}
*/

//getElementById.innerHTML
{
    let domById = document.getElementById("mainHeading").innerHTML
    console.log(domById); // Text inside h1
}
