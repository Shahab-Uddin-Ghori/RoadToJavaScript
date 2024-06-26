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







