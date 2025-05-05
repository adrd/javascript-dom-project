import "../assets/css/style.css";

const app = document.getElementById('app');
// app.innerText = '<span>Some Text Here</span>'; 
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;                                  // innertHTML receives a HTML template and creates the nodes of DOM in memory
                                    // innerHTML overwrites innerText, if innerText was after innerHTML, innertText overwrites innerHTML 

const h1 = document.createElement('h1');
h1.innerText = 'Ultimate Courses';
h1.innerText += 'Learning JS DOM';
// h1.style.display = 'none';
app.append(h1);

console.log(app.innerHTML);        // displays HTML template as string
console.log(app.innerText);        // displays text only without whitespaces, displays visible text
                                   // used only on Elements
console.log(app.innerText.length);
console.log(app.textContent);      // displays text with whitespaces, displays full text being visible or not
                                   // applies to all Nodes