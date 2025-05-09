import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Click Me!
  </button>
`;

// <button style="padding: 25px; margin: 10px 0;">
const button = document.querySelector('button');

console.dir(button);        // > button

console.dir(button.style);  // > CSSStyleDeclaration

// cssText
button.style.cssText = 'padding: 25px; margin: 10px 0; font-size: 20px';

// direct property access
button.style.fontSize = '22px';
button.style.marginTop = '15px';

console.log(button.style.fontSize);  // 22px