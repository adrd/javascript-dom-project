import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
  </ul>
`;

// querySelectorAll: NodeList
const listItem = document.querySelector('#list li');

console.log(listItem);                         // <li>1</li>

// Any DOM Nodes
console.log(listItem.nextSibling);             // #text
console.log(listItem.previousSibling);         // #text

// Any Element Nodes
console.log(listItem.nextElementSibling);      // <li>2</li>
console.log(listItem.previousElementSibling);  // null