const container = document.querySelector("#container");

const pRed = document.createElement("p");
pRed.setAttribute("style", "color: red");
pRed.textContent = "Hey I'm red!";
container.appendChild(pRed);

const hBlue = document.createElement("h3");
hBlue.setAttribute("style", "color: blue");
hBlue.textContent = "I'm a blue h3!";
container.appendChild(hBlue);

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.background = "pink";
const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div!";
const divP = document.createElement("p");
divP.textContent = "ME TOO!";
div.appendChild(divH1);
div.appendChild(divP);

container.appendChild(div);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btnTwo = document.querySelector("#buttonTwo");
btnTwo.addEventListener("click", () => {
  alert("Hello World");
});
