const gridContainer = document.getElementById("gridContainer");
const optionSize = document.getElementById("size");
const gridUnit = document.getElementsByClassName("grid-unit");
const btnBlack = document.getElementById("btnBlack");
let isDrawing = false;

let sizeGrid = 64;

drawGrid(sizeGrid);

//add event to resize grid at select list
optionSize.addEventListener("change", (event) => {
  deleteGrid(gridContainer);

  sizeGrid = event.target.value;

  drawGrid(sizeGrid);
});

gridContainer.addEventListener("mousedown", () => {
  isDrawing = true;
  console.log(isDrawing);
});

gridContainer.addEventListener("mouseup", () => {
  isDrawing = false;
  console.log(isDrawing);
});

gridContainer.addEventListener("mouseleave", () => {
  isDrawing = false;
  console.log(isDrawing);
});

for (const unit of gridUnit) {
  unit.addEventListener("mouseover", (e) => {
    if (!isDrawing) {
      return;
    }

    e.target.style.backgroundColor = "black";
  });
}

//draw grid at specific size
function drawGrid(sizeGrid) {
  for (let i = 0; i < sizeGrid; i++) {
    const rowGrid = document.createElement("div");

    rowGrid.classList.add("row-grid");

    gridContainer.appendChild(rowGrid);

    for (let z = 0; z < sizeGrid; z++) {
      const colGrid = document.createElement("div");

      colGrid.classList.add("col-grid");
      colGrid.classList.add("grid-unit");

      rowGrid.appendChild(colGrid);
    }
  }
}

//delete grid
function deleteGrid(gridContainer) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
