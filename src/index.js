import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
div.innerText = 'I am a message!'; 

app.append(div);  // <div id="app">
                  //  <h1>JavaScript DOM</h1>
                  //  <div>I am a message!</div>
                  // </div>

// new way
setTimeout(() => div.remove(), 2500);  // <div id="app">
                                       //   <h1>JavaScript DOM</h1>
                                       // </div>

// old way
// setTimeout(() => div.parentNode.removeChild(div), 2500);  // <div id="app">
                                                          //   <h1>JavaScript DOM</h1>
                                                          // </div>