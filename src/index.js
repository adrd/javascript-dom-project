import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const data = ['Earth', 'Fire', 'Water', 'Air'];

// data.forEach(name => {
//   const li = document.createElement('li');
//   li.innerText = name;
//   app.append(li);     // inefficient
// });

// const fragment = new DocumentFragment();
const fragment = document.createDocumentFragment();

// console.dir(fragment);  // #document-fragment

data.forEach(name => {
  const li = document.createElement('li');
  li.innerText = name;
  fragment.append(li);
});

console.dir(fragment);

app.append(fragment);