import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <div class="container">
      <label>
        Blue
        <input type="radio" name="color" value="blue" checked>
      </label>
      <label>
        Red
        <input type="radio" name="color" value="red">
      </label>
      <label>
        Green
        <input type="radio" name="color" value="green">
      </label>
    </div>
  </form>
`;

const form = document.forms.example;
const radios = [...form.elements.color];

console.log(radios);  // > (3) [input, input, input]

// 1. Properties that are useful
// radios[2].checked = true;

radios.forEach(radio => {
  console.log(radio);          // <input type="radio" name="color" value="blue"> 
                               // <input type="radio" name="color" value="red">
                               // <input type="radio" name="color" value="green">
  console.dir(radio);          // > input
  console.log(radio.value);    // blue red green
  console.log(radio.checked);  // true false false
});

// 2. Events
const container = form.querySelector('.container');
// console.log(container);  // <div class="container">...</div>

container.addEventListener('change', () => {
  // console.log('Change...');
  
  // const checked = radios.find(radio => radio.checked).value;
  // console.log(checked);

  console.log(form.elements.color);        // > RadioNodeList(3) [input, input, input, value: 'green']
  console.log(form.elements.color.value);
});

// const checked = radios.find(radio => radio.checked);
// console.log(checked);       // <input type="radio" name="color" value="blue" checked="">

// const checkedValue = checked.value;
// console.log(checkedValue);  // blue

// 3. Methods
radios[2].select();