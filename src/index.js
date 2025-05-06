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

// getElementById: HTMLElement
const ulFromId = document.getElementById('list');
console.log(ulFromId);
ulFromId.append(fragment);   // <div id="app">
                             //   <h1>JavaScript DOM</h1>
                             //   <ul id="list">
                             //     <li class="list-item">Earth</li>
                             //     <li class="list-item">Fire</li>
                             //     <li class="list-item">Water</li>
                             //   </ul>
                             // </div>

// getElementsByClassName: HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName);  // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]

// getElementsByTagName: HTMLCollection
const listItemsFromTagName = ulFromId.getElementsByTagName('li');
console.log(listItemsFromTagName);    // HTMLCollection(3) [li.list-item, li.list-item, li.list-item]

// Demonstrate live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromId.append(newListItem);

// No need to query again!
console.log(listItemsFromClassName);  // HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]
console.log(listItemsFromTagName);    // HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]