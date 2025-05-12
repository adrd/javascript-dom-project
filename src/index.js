import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <input type="text" name="myInput" value="Hello">
  </form>
`;

const form = document.forms.example;
const input = form.myInput;

// 1. Properties that are useful
console.dir(input);  // > input

// set
input.value = 'Goodbye';
// input.disabled = true;
// input.readOnly = true;

// get
console.log(input.value);

// 2. Events
input.addEventListener('focus', () => console.log('Focus'));   // fires when the input element receives focus
input.addEventListener('blur', () => console.log('Blur'));     // fires when I leave the input element
input.addEventListener('input', () => console.log('Input'));   // fires when I type inside the input element
input.addEventListener('change', () => console.log('Change')); // fires when I leave the input element if the value is changed

// 3. Methods
// focus an input
input.focus();
setTimeout(() => input.blur(), 2500);