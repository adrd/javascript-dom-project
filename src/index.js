import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Click Me
  </button>
`;

const button = document.querySelector('button');

console.dir(button);  // > button

// Avoid, doesn't allow multiple event handlers
// button.onclick = function() {
//   console.log('1');
// };

// after button click, 1 is displayed

// button.onclick = function() {
//   console.log('2');
// };

/**********************************************/

// function handleClick() {
//   console.log('2');
// }

// button.addEventListener('click', handleClick);

// after button click, 2 is displayed

// button.addEventListener('click', () => {
//   console.log('3');
// });

// after button click, 2 and 3 is displayed

/**********************************************/

function handleClick(event) {
  console.log(event);               // event object
  console.log(event.target);        // element that initiated the event, in this case button element
  console.log(this, event.target);  // <button type="button">Click Me</button> <button type="button">Click Me</button>
}

button.addEventListener('click', handleClick);

// arrow functions
button.addEventListener('dblclick', (event) => {
  console.log(this, event.target, 'Double-clicked!');  // undefined <button type="button">Click Me</button> 'Double-clicked!'
});