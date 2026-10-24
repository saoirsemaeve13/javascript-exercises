const container = document.querySelector("#container");

let length = 16;
for (let i = 1; i <= length * length; i++) {
  const grid = document.createElement("div");
  let width = 960 / length;
  grid.style.width = width;
  grid.style.height = width;
  console.log(`Div created ${i}`);
  container.appendChild(grid);
}
