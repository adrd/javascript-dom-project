import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list"></ul>
`;

const data = ['Earth', 'Fire', 'Water'];
const fragment = document.createDocumentFragment();

data.forEach(item => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = item;
  fragment.append(li);
});

// ul { background: red; }
// #list { background: red; }
const ulFromQuerySelector = document.querySelector('ul');
console.log(ulFromQuerySelector);   // <ul id="list"></ul>

const ulFromQuerySelector1 = document.querySelector('#list');
console.log(ulFromQuerySelector1);  // <ul id="list"></ul>

ulFromQuerySelector.append(fragment);  // <div id="app">
                                       //  <h1>JavaScript DOM</h1>
                                       //  <ul id="list">
                                       //   <li class="list-item">Earth</li>
                                       //   <li class="list-item">Fire</li>
                                       //   <li class="list-item">Water</li>
                                       //  </ul>
                                       // </div>

const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item');
console.log(listItemsFromQSA);      // NodeList(3) [li.list-item, li.list-item, li.list-item]

const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromQuerySelector.append(newListItem);

console.log(listItemsFromQSA);      // NodeList(3) [li.list-item, li.list-item, li.list-item]

// need to query again!
console.log(ulFromQuerySelector.querySelectorAll('.list-item'));  // NodeList(4) [li.list-item, li.list-item, li.list-item, li.list-item]