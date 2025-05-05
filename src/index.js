import "../assets/css/style.css";

const app = document.getElementById('app');

// Using document.createElement()
function createInputDOM({ label, type = 'text'}) {
  const labelEl = document.createElement('label');
  const inputEl = document.createElement('input');

  inputEl.type = type;
  labelEl.innerText = label;
  labelEl.append(inputEl);

  return labelEl;
}

const inputFromDOM = createInputDOM({ label: 'Name'});
console.log(inputFromDOM);                         // displays HTML template of the Node from DOM, <label>Name<input type="text"></label>
console.log(inputFromDOM.querySelector('input'));  // displays HTML template of the Node from DOM, <input type="text">
app.append(inputFromDOM);

// Using string templates
function createInputTemplate({ label, type = 'text'}) {
  return `
    <label>
      ${label}
      <input type="${type}"/>
    </label>
  `;
}

const inputFromTemplate = createInputTemplate({ label: 'Email', type: 'email'}); 
app.innerHTML += inputFromTemplate;