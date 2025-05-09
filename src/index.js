import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div class="one">
    <div class="two">
      <button type="button" class="three">
        Click Me
      </button>
    </div>
  </div>
`;

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

function handleClick(event) {
  event.stopPropagation();       // event is not handled by div with class one and div with class two, only by the two button handlers
  // event.stopImmediatePropagation(); // event is not handled by the other button handler and by div.one and div.two
  console.log(event.target);        // <button type="button" class="three">Click Me</button>
}

// one.addEventListener('click', handleClick);
// two.addEventListener('click', handleClick);
// three.addEventListener('click', handleClick); 

// after button click the event is bubbling and is handled by all three handlers

one.addEventListener('click', handleClick, false);  // false means we don't want to use event capturing
two.addEventListener('click', handleClick, false);
three.addEventListener('click', handleClick, false); 

three.addEventListener('click', (event) => console.log(event)); // > PointerEvent

// three.addEventListener('click', (event) => console.log(event), { capture : true});

// capturing phase = from the top of the DOM tree all the way down the event is initiated
// target phase = when it reaches the element
// bubbling phase = when it reached the element the bubbling phase begin, 
//                  the event now is propagating back to the top of the DOM tree unless event.stopPropagation() 
//                  is called in a handler