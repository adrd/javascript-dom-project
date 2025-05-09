import "../assets/css/style.css";

const app = document.getElementById('app');

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <button type="button" aria-label="Close this Modal">
//     Close Me
//   </button>
// `;

// const button = document.querySelector('button');
// console.log(button);  // <button type="button" aria-label="Close this Modal">Close Me</button>

// console.dir(button);  // > button

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Close Me
  </button>
`;

const button = document.querySelector('button');

// SET
button.setAttribute('aria-label', 'Close this Modal');

console.log(button);  // <button type="button" aria-label="Close this Modal">Close Me</button>

console.dir(button);  // > button

// GET
const value = button.getAttribute('aria-label');
console.log(value);   // Close this Modal

// .attributes
console.log(button.attributes);                      // > NamedNodeMap
console.log(button.attributes['aria-label']);        // aria-label="Close this Modal"
console.log(button.attributes['aria-label'].value);  // Close this Modal