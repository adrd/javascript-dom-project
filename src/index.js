import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <div class="item"></div>
`;

// querySelectorAll: NodeList
const item = document.querySelector('.item');

console.log(item.parentNode);                   // <div id="app">
                                                //  <h1>JavaScript DOM</h1>
                                                //  <div class="item"></div>
                                                // </div>

console.log(item.parentElement);                // <div id="app">
                                                //  <h1>JavaScript DOM</h1>
                                                //  <div class="item"></div>
                                                // </div>

console.log(item.parentElement.parentElement);  // <body>...</body>

console.log(item.closest('#app'));              // <div id="app">
                                                //  <h1>JavaScript DOM</h1>
                                                //  <div class="item"></div>
                                                // </div>

console.log(item.closest('body'));              // <body>...</body>