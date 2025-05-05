import "../assets/css/style.css";

const app = document.getElementById('app');

const div = document.createElement('div');
const text = document.createTextNode('DOM!');
const comment = document.createComment('No comment');

div.append(comment);
div.append(text);
app.append(div);

console.log(app, div);
