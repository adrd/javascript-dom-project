import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list">
    <li>Earth</li>
    <li>Fire</li>
    <li>Water</li>
    <li>Air</li>
  </ul>
`;

// querySelectorAll: NodeList
const list = document.querySelector('#list');
const queryChildren = list.querySelectorAll('li');
const selectedIndex = 2;

console.log(queryChildren);                 // NodeList(4) [li, li, li, li]
console.log(queryChildren.length);          // 4
console.log(queryChildren[selectedIndex]);  // <li>Water</li>

// .children: HTMLCollection
console.log(list.children);                 // HTMLCollection(4) [li, li, li, li]
console.log(list.children.length);          // 4
console.log(list.children[selectedIndex]);  // <li>Water</li>

// .childNodes: NodeList
console.log(list.childNodes);                // NodeList(9) [text, li, text, li, text, li, text, li, text]
console.log(list.childNodes.length);         // 9
console.log(list.childNodes[selectedIndex]); // #text

console.log(document.children);              // HTMLCollection [html]

console.log(document.body.children);         // HTMLCollection(3) [header.header, div#app, script, app: div#app]

console.log(document.body.childNodes);       // NodeList(7) [text, header.header, text, div#app, text, script, text]

// first
console.log(list.firstChild);                // #text
console.log(list.firstElementChild);         // <li>Earth</li>

// last
console.log(list.lastChild);                 // #text
console.log(list.lastElementChild);          // <li>Air</li>