import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button" class="one two">
    Click Me!
  </button>
`;

const button = document.querySelector('button');

console.dir(button);  // button.one.two

// Old way: Set
button.className += ' three';

// Old way: Get
console.log(button.className);  // one two three

// New way: ClassList
// Add
button.classList.add('four');
console.log(button.className);  // one two three four

// Remove
button.classList.remove('one')
console.log(button.className)   // two three four

// Toggle
button.classList.toggle('five');
console.log(button.className);  // two three four five

setTimeout(
  () => button.classList.toggle('five')
  , 2500);

// after setTimeout() is run -> two three four 

// Replace
button.classList.replace('two', 'six');