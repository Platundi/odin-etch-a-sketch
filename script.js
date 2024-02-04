createGrid();

function createGrid(size = 16) {
  let i = 0;
  do {
    let div = document.createElement("div");
    div.classList.add("field");
    div.style.flex = `0 0 ${(1 / size) * 100}%`;
    document.querySelector(".container").appendChild(div);
    i++;
  } while (i < size ** 2);
  hoverHandler();
}

function hoverHandler() {
  let elements = document.querySelectorAll(".container .field");
  elements.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      let hoveredElement = event.target;
      let randomRed = Math.floor(Math.random() * 256);
      let randomGreen = Math.floor(Math.random() * 256);
      let randomBlue = Math.floor(Math.random() * 256);
      hoveredElement.style.backgroundColor =
        "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
      // hoveredElement.classList.add("hover");
    });
    element.addEventListener("touchmove", (event) => {
      let hoveredElement = event.target;
      let randomRed = Math.floor(Math.random() * 256);
      let randomGreen = Math.floor(Math.random() * 256);
      let randomBlue = Math.floor(Math.random() * 256);
      hoveredElement.style.backgroundColor =
        "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    });
  });
}

let btn = document.querySelector(".btn-container");
btn.addEventListener("click", () => {
  let gridSize = 0;
  while (true) {
    gridSize = parseFloat(
      prompt("Rastergröße eingeben. Nicht größer als 100!")
    );

    // Check if the input is a number and greater than 100
    if (gridSize === null || isNaN(gridSize) || parseInt(gridSize) <= 100) {
      break;
    } else {
      alert("Nicht größer als 100!");
    }
  }
  let clearDiv = document.querySelector(".container");
  while (clearDiv.firstChild) {
    clearDiv.removeChild(clearDiv.firstChild);
  }
  createGrid(gridSize);
});
// let container = document.querySelector("div");
// container.addEventListener("mouseenter", () => {
//   container.classList.add("hover");
// });
