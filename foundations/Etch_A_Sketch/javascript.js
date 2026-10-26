const container = document.querySelector("#container");

function createGrid(length) {
  let width = 960 / length;
  container.innerHTML = "";
  for (let i = 1; i <= length * length; i++) {
    const grid = document.createElement("div");
    grid.style.width = `${width}px`;
    grid.style.height = `${width}px`;
    grid.addEventListener("mouseenter", () => {
      const dropdown = document.getElementById("colorchoice");
      const selectedColor = dropdown.value;
      Array.from(dropdown.options).forEach((option) => {
        if (option.value) {
          grid.classList.remove(option.value);
        }
      });
      grid.classList.add(selectedColor);
    });
    container.appendChild(grid);
  }
}
createGrid(16);

const resize = document.querySelector("#resize");
resize.addEventListener("click", () => {
  let input = prompt("insert number between 1 and 100", "16");
  if (+input > 0 && +input < 101) {
    createGrid(+input);
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
