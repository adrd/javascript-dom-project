import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name
      <input type="text" name="fullname">
    </label>
    <label>
      Which pizza would you like?
      <select name="pizza">  
        <option value="pepperoni">Pepperoni</option>
        <option value="meaty">Meaty</option>
        <option value="cheesey">Cheesey</option>
      </select>
    </label>
    <button type="submit">
      Submit
    </button>
  </form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  console.log(event);                      // SubmitEvent
  console.log(event.target);               // <form name="order">...</form>
  console.log(new FormData(event.target)); // event.target is a reference to the object onto which the event was dispatched
                                           // new FormData(event.target) will trigger formData event
  // console.log([...new FormData(event.target)]);  // (2) [Array(2), Array(2)]
}

// [
//   ["fullname", "Todd Motto"],
//   ["email", ""]
// ]

function handleFormData(event) {
  // console.log(event.formData);             // > FormData {}
  console.log([...event.formData]);           // > (2) [Array(2), Array(2)]
  console.log([...event.formData.values()]);  // > ['Todd Motto', 'meaty']
  // console.log([...event.formData.entries()]); // > (2) [Array(2), Array (2)]
  const entries = event.formData.entries();
  for (const entry of entries) {
    console.log(entry);                       // (2) ['fullname', 'Todd Motto'], (2) ['pizza', 'meaty']
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('formdata', handleFormData);