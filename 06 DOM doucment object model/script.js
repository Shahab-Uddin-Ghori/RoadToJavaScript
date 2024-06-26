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

