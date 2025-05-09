import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Click Me
  </button>
`;

const button = document.querySelector('button');

// function handleClick(event) {
//   console.log(event.target);        // element that initiated the event, in this case button element
// }

// button.addEventListener('click', handleClick);

// button.removeEventListener('click', handleClick);

// setTimeout(() => {
//   button.removeEventListener('click', handleClick);
// }, 5000);  // after 5 seconds click event handler is not available anymore

/****************************************/

function handleClickOnce(event) {
  console.log(event.target);
  button.removeEventListener('click', handleClickOnce);
}

button.addEventListener('click', handleClickOnce);

/****************************************/

button.addEventListener(
  'dblclick', 
  () => console.log('Double-click!'),
  { once: true } 
);

// dblclick event handler is executed only once, after that it is removed