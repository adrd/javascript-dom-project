import "../assets/css/style.css";

const app = document.getElementById('app');

// app.innerHTML = `
//   <h1>JavaScript DOM</h1>
//   <form name="order">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//   </form>
//   <form name="checkout">
//     <label>
//       Your name
//       <input type="text" name="fullname">
//     </label>
//   </form>
// `;

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name
      <input type="text" name="fullname">
    </label>
  </form>
`;

// const form = document.forms;
// console.log(form);  // HTMLCollection [form, order: form]

const form = document.forms.order;
console.log(form);     // <form name="order">...</form>

// const fullname = form.elements;
// console.log(fullname);  // HTMLFormControlsCollection [input, fullname: input]

const fullname = form.elements.fullname;
console.log(fullname);     // <input type="text" name="fullname">

// const { fullname, email } = form.elements;
// console.log(fullname, email);  // <form name="order">...</form>   <input type="text" name="fullname">

function handleInput(event) {
  // console.log(event.target);   //  <input type="text" name="fullname">
  
  // access the value
  console.log(event.target.value);

  // access the parent form
  console.log(event.target.form);
}

fullname.addEventListener('input', handleInput);

// fullname.addEventListener('change', handleInput);  // fires when I leave the input element