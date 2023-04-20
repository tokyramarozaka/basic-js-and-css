const div1 = document.createElement("div");
const div2 = document.createElement("div");
const div3 = document.createElement("div");

div1.innerHTML = `<p>Left</p>`;
div1.classList.add("left");

div2.innerHTML = `<p>Midle</p>`;
div2.classList.add("middle");

div3.innerHTML = `<p>Right</p>`;
div3.classList.add("right");

const body = document.body;

body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);