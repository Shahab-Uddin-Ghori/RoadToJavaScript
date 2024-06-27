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


console.log("let domById = document.getElementById(\"mainHeading\")");// for style change by js
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
console.log("\n\nlet domById = document.getElementById(\"mainHeading\").innerHTML"); // for text and tag change ny js
/*
{
    let domById = document.getElementById("mainHeading").innerHTML
    console.log(domById); // Text inside h1
}
*/

//innerHTML text change
/*
{
        let domById = document.getElementById("mainHeading")
        domById.innerHTML = "h1 text changed by innerHTML"
        console.log(domById); // Text inside h1
}
*/

//innerHTML tag change but outer will same 

/*
{
    let domById = document.getElementById("mainHeading")
    domById.innerHTML = "<p> change h1 to p</p>" // tag change h1 to p
    console.log(domById);
    console.log(domById.outerHTML);//<h1 id="mainHeading"><p> change h1 to p</p></h1>
{
    
   // yaha ye ho raha hai k jab bhi ham innerHTML se kuch change krty hai tag ko to orignal tag nhi change hota balky orignal tag k undar // ek new tag ban jata hai ho k line 138 me dekha ja sakta hai
    
}
}

*/

//innerText
console.log("\n\nlet domById = document.getElementById(\"mainHeading\").innerText"); // for text and tag change ny js
/*
{// print text
    let domById = document.getElementById("mainHeading").innerText
    console.log(domById);
}
    */

/*
//innerText change text
{
    let domById = document.getElementById("mainHeading")
    domById.innerText = "change text by innerText of h1"
    console.log(domById);
}
*/
//innerText will not change text as innerHTML do
/*
{
    let domById = document.getElementById("mainHeading")
    domById.innerText = "<p>change text by innerText of h1</p>"
    console.log(domById);
}
*/

// differce between document.getElementById("mainHeading"),document.getElementById("mainHeading").innerHTML||document.getElementById("mainHeading").innerText
/*
{
let domById = document.getElementById("mainHeading"):

This statement retrieves the HTML element with the id "mainHeading" and assigns the element itself to the variable domById.
let domById = document.getElementById("mainHeading").innerHTML:

This statement retrieves the HTML content inside the element with the id "mainHeading" and assigns that content (including HTML tags) to the variable domById.
let domById = document.getElementById("mainHeading").innerText:

This statement retrieves the visible text content inside the element with the id "mainHeading" (excluding HTML tags) and assigns that text to the variable domById
}
*/



//2. getElementByClassName
// use for changing multiple tag at a time
 //same work can do with class

 //print HTML collection we have to iterate it for changing in it bcz it is HTMLcollection
 /*
 {
    let domByClassName = document.getElementsByClassName("para") // for change style of same class tags
    console.log(domByClassName);
}
    */

/*
{
    let domByClassName = document.getElementsByClassName("para")
    domByClassName.innerText = "change p to h3 by getElementClassName</h3>" // will change nothing bcz its to sigle para but HTMLcollection so to change it we have to iterate by loop
    console.log(domByClassName);
}
*/

// change multiple para with iterate it and using getElementByClassName
/*
{
        // Get the collection of elements with the class "para"
        let domByClassName = document.getElementsByClassName("para");

        // Iterate over the collection and change the innerText of each element
        for (let i = 0; i < domByClassName.length; i++) {
            domByClassName[i].innerText = "Changed text for p to h3";
        }

        // Log the collection to verify the changes
        console.log(domByClassName);
}
        */

    //   3. document.getElementsByTagName
    // same work we can do but by tag name it may be multiple so we have also do iterate it for getting multiple changing by tag name
    
    /*
    {
        let btn = document.getElementsByTagName("button")
        console.log(btn);
    }
    {// it will not work bcz it will also return a HTML collecion so we have to iterate it..
        let btn = document.getElementsByTagName("button")
        btn.innerText ="check on"
        console.log(btn);
    }
    // it will change button content check to check on
    {
        let btn = document.getElementsByTagName("button");

        // Iterate over the collection and change the innerText of each button
        for (let i = 0; i < btn.length; i++) {
            btn[i].innerText = "check on";
        }

        // Log the collection to verify the changes
        console.log(btn);
    }
    */

    /////////////////4. querySelector and querySelectorAll
    // document.querySelector("#Id/.Class/tagName") //return first element 
    // document.querySelectorAll("#Id/.class/tagName") //Return a NodeListf

    //NodeList
    //A NodeList is an array-like collection (list) of Node Objects. The nodes in a NodeList can be accessed by index (starts at 0). The length property returnns the number of nodes in a NodeList.
console.log("\n\ document.querySelector(Id/Class/tagName)");
    {
        console.log("document.querySelector");
        let element = document.querySelector("p")
        console.dir(element)
        console.log(element);
        console.log("document.querySelectorAll");
        {
            let element =document.querySelectorAll("p")
            console.dir(element)
            console.log(element);
        }
    }

    ////properties of Dom Manipulation

    console.log("\n\n Properties Of DOM Manipulation");

    //1. tagName : return the tag for element nodes
    //2. innerText: return the text content of the element and its all childern
    //3. innerHTML: return the plain Text or HTML content in the  element
    //4. textContent: return textual content even for hidden elements.

    //1. tagName : return the tag for element nodes
    {
        console.log("tagName");
        let element = document.querySelector("p")
        console.log(element.tagName);//p

    }
    {
        let element = document.querySelector("h1")
        console.log(element.tagName);//p

    }
    {
        let element = document.querySelector("div")
        console.log(element.tagName);//p

    }
    {
        let element = document.querySelector("h3")
        console.log(element.tagName);//p

    }

    /*
    {
        // if tagName is not present error appear
        let element = document.querySelector("h2")
        console.log(element.tagName);//p

    }
*/


    //2. innerText: return the text content of the element and its all childern
    //Element = Parent ----> childNodes,Childern
    //Element = Parent -----> childern/siblings
    //firstchilde --> return fist element of parent tag
    //lastchilde --> return last element of parent tag

    // DOM tree has tree Nodes
    //1. #text
    //2. # comment
    //3. # element// in DOM we work on elements
    {
        console.dir(document.body.firstChild)//#text
    }
    //2. innerText // text return
    {
        console.log("\n\n innerText: return the text content of the element and its all childern");
        let element = document.querySelector("div").innerText
        console.log(element)
    }

    // 3. innerHTML // html content with text return. tag with their content
    {
        console.log("\n\n innerHTML: return the text content of the element and its all childern");
        let element = document.querySelector("div").innerHTML
        console.log(element)
    }
    //4. textContent: return textual content even for hidden elements.
    // work same as innerText but also return hidden text
    {
        console.log("textContent: return textual content even for hidden elements.");
        let element = document.querySelector("div").textContent
        console.log(element);
    }