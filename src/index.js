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
    <div>
      What size?
      <label>
        Small 
        <input type="radio" name="size" value="small" checked>
      </label>
      <label>
        Medium
        <input type="radio" name="size" value="medium">
      </label>
      <label>
        Large 
        <input type="radio" name="size" value="large">
      </label>
    </div>
    <label>
      Quantity
      <input type="number" name="quantity" value="1">
    </label>
    <button type="submit">
      Submit
    </button>
  </form>
`;

const form = document.forms.order;

function handleSubmit(event) {
  event.preventDefault();
  // console.log([...new FormData(event.target)]);  // (4) [Array(2), Array(2), Array(2), Array(2)]
  const formData = new FormData(event.target);

  // query string
  // Content-Type = application/x-www-form-urlencoded
  // fullname=Todd+Motto&pizza=pepperoni&size=large&quantity=2
  
  // const data = [...formData.entries()];
  // console.log(data);

  // const asString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
  //                      .join('&');
  // console.log(asString);  // fullname=Todd%20Motto&pizza=pepperoni&size=medium&quantity=1

  const asString = new URLSearchParams(formData).toString();
  console.log(asString);  // fullname=Todd+Motto&pizza=pepperoni&size=small&quantity=1

  // json
  const asJSON = JSON.stringify(Object.fromEntries(formData));
  console.log(asJSON);  // {"fullname":"Todd Motto","pizza":"pepperoni","size":"small","quantity":"1"}
}

form.addEventListener('submit', handleSubmit);