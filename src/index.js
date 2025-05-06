import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const i = document.createElement('i');
const b = document.createElement('b');

// new way using new api
div.append(span);
div.prepend(p);
// span.before(i);
// span.after(i);
p.after(i);         // <div>
                    //  <p></p>
                    //  <i></i>
                    //  <span></span>
                    // </div>

// console.log(div);

// Before: old way using insertBefore
i.parentNode.insertBefore(b, i);   // <div>
                                   //   <p></p>
                                   //   <b></b>
                                   //   <i></i>
                                   //   <span></span>
                                   // </div> 

// After: old way using insertBefore + nextSibling
i.parentNode.insertBefore(b, i.nextSibling);   // <div>
                                               //   <p></p>
                                               //   <i></i>
                                               //   <b></b>
                                               //   <span></span>
                                               // </div>

console.log(div);