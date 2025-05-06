import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul>
    <li>1</li>
  </ul>
`;

const ul = document.querySelector('ul');

// ul.insertAdjacentHTML('beforebegin', '<li>X</li>');
ul.insertAdjacentHTML('beforebegin', '<p>Before</p>');  // <div id="app">
                                                        //  <h1>JavaScript DOM</h1>
                                                        //  <p>Before</p>
                                                        //  <ul>
                                                        //    <li>1</li>
                                                        //  </ul>
                                                        // </div>

ul.insertAdjacentHTML('afterbegin', '<li>First</li>');  // <div id="app">
                                                        //  <h1>JavaScript DOM</h1>
                                                        //  <p>Before</p>
                                                        //  <ul>
                                                        //    <li>First</li>
                                                        //    <li>1</li>
                                                        //  </ul>
                                                        // </div>

ul.insertAdjacentHTML('beforeend', '<li>Last</li>')     // <div id="app">
                                                        //  <h1>JavaScript DOM</h1>
                                                        //  <p>Before</p>
                                                        //  <ul>
                                                        //    <li>First</li>
                                                        //    <li>1</li>
                                                        //    <li>Last</li>
                                                        //  </ul>
                                                        // </div>

ul.insertAdjacentHTML('afterend', '<p>After</p>');      // <div id="app">
                                                        //  <h1>JavaScript DOM</h1>
                                                        //  <p>Before</p>
                                                        //  <ul>
                                                        //    <li>First</li>
                                                        //    <li>1</li>
                                                        //    <li>Last</li>
                                                        //  </ul>
                                                        //  <p>After</p>
                                                        // </div>