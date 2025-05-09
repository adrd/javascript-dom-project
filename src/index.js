import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <input type="text">
`;

const input = document.querySelector('input');
console.log(input);       // <input type="text">

console.log(input.type);  // text

console.log(input.value); // ''

input.value = 2;                // doesn't reflect on the document, <input type="text">
// input.setAttribute('value', 2); // it is displayed on the document, <input type="text" value="2">

console.log(input.value);               // 2 (string type)
console.log(parseInt(input.value, 10)); // 2 (integer type)

console.dir(input);  // javascript object representation of input DOM Node