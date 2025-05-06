import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div>
    Replace!
  </div>
`;

const div = app.querySelector('div');

const newDiv = document.createElement('div');
newDiv.innerText = 'I have been replaced!';

// new way
div.replaceWith(newDiv);    // <div id="app">
                            //  <h1>JavaScript DOM</h1>
                            //  <div>I have been replaced!</div>
                            // </div>

// old way
const anotherDiv = document.createElement('div');
anotherDiv.innerText = 'I replace all';

setTimeout(() => {
  newDiv.parentNode.replaceChild(anotherDiv, newDiv);  // <div id="app">
                                                       //  <h1>JavaScript DOM</h1>
                                                       //  <div>I replace all</div>
                                                       // </div>
}, 2000);