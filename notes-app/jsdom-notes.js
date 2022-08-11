//  DOM - Document Object Model

// The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

// The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

// All of the properties, methods, and events available for manipulating and creating web pages are organized into objects. For example, the document object that represents the document itself, any table objects that implement the HTMLTableElement DOM interface for accessing HTML tables, and so forth, are all objects.

// Document

// The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

// The DOM tree includes elements such as <body> and <table>, among many others. It provides functionality globally to the document, like how to obtain the page's URL and create new elements in the document.

// QuerySelector matches only the first elemnt tag

// Add a new element
const newParagraph = document.createElement('p') //  Does not actually create an element in HTML but creates a reference for it
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph) // creates a new paragraph in the body and puts in the text content

// To run multiple instances of Live server, look for option "Duplicate Workspace"

//  Event Handlers

// Event - An event is something that the user does

// Event Listener - a function that responds to the occurence of an event