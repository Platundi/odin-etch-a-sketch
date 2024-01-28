let i = 0;
do {
  let div = document.createElement("div");
  div.classList.add("field");
  document.querySelector(".container").appendChild(div);
  i++;
} while (i < 256);

let elements = document.querySelectorAll(".container .field");
elements.forEach((element) => {
  element.addEventListener("mouseenter", (event) => {
    let hoveredElement = event.target;
    hoveredElement.classList.add("hover");
  });
});

// let container = document.querySelector("div");
// container.addEventListener("mouseenter", () => {
//   container.classList.add("hover");
// });