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

const listItems = document.querySelectorAll('#list li');
console.log(listItems);  // NodeList(4) [li, li, li, li]

for (let index = 0; index < listItems.length; index++) {
  console.log(listItems[index]);  // <li>Earth</li>
}                                 // <li>Fire</li>
                                  // <li>Water</li>
                                  // <li>Air</li>

for (const item of listItems) {
  console.log(item);              // <li>Earth</li>
}                                 // <li>Fire</li>
                                  // <li>Water</li>
                                  // <li>Air</li>

[...listItems].forEach((item) => console.log(item));         // <li>Earth</li>
                                                             // <li>Fire</li>
                                                             // <li>Water</li>
                                                             // <li>Air</li>

Array.from(listItems).forEach((item) => console.log(item));  // <li>Earth</li>
                                                             // <li>Fire</li>
                                                             // <li>Water</li>
                                                             // <li>Air</li>