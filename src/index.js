import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `<h1>JavaScript DOM</h1>`;

// <DOCTYPE>
console.log(document);
console.dir(document);

// <html>
console.log(document.documentElement);
console.dir(document.documentElement);

// <head>
console.dir(document.head);

// <body>
console.dir(document.body);

// retrieve the constructor name
console.log(document.body.constructor.name);            // HTMLBodyElement

// looking at the prototype chain
console.log(document.body instanceof HTMLBodyElement);  // true
console.log(document.body instanceof HTMLElement);      // true
console.log(document.body instanceof Element);          // true
console.log(document.body instanceof Node);             // true
console.log(document.body instanceof EventTarget);      // true

/* 
  - NodeTypes
  1. Element
  2. Attribute
  3. Text
  4. CDATASection
  5. EntityReference
  6. Entity
  7. ProcessingInstruction
  8. Comment
  9. Document
  10. DocumentType
  11. DocumentFragment
  12. Notation
*/

console.log('body node is of type = ' + document.body.nodeType); // 1 = Element
console.log('document node is of type = ' + document.nodeType);  // 9 = Document

// use nodeName for any Node types 
console.log('body node name is = '+ document.body.nodeName);     // BODY
// use tagName for any Element types
console.log('body tag name is = ' + document.body.tagName);      // BODY

console.log('document node name is = ' + document.nodeName);     // #document
console.log('document tag name is = ' + document.tagName);       // undefined