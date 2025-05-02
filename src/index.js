import "../assets/css/style.css";

const app = document.getElementById('app');

app.innerHTML = `<h1>JavaScript DOM</h1>`;

document.addEventListener("DOMContentLoaded", () => {
    // const app = document.getElementById("app");

    // app.innerHTML = `<h1>JavaScript DOM</h1>`;

    alert("DOMContentLoaded");
});

window.addEventListener("load", () => alert("Load"));
