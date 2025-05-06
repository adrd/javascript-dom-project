import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');

span.innerText = 'Can you clone me?';
div.append(span);

app.append(div);        // <div id="app">
                        //  <h1>JavaScript DOM</h1>
                        //  <div>
                        //    <span>Can you clone me?</span>
                        //  </div>
                        // </div>

// cloneNode(false) only clones the top element
const clone = div.cloneNode();
console.log(clone);     // <div></div>

// cloneNode(true) clones all elements and subtrees
const newClone = div.cloneNode(true);
console.log(newClone);  // <div>
                        //  <span>Can you clone me?</span>
                        // </div>

app.append(newClone);   // <div id="app">
                        //  <h1>JavaScript DOM</h1>
                        //  <div>
                        //    <span>Can you clone me?</span>
                        //  </div>
                        //  <div>
                        //    <span>Can you clone me?</span>
                        //  </div>
                        // </div>