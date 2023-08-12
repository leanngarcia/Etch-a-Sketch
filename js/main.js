const gridContainer = document.getElementById("gridContainer");
const optionSize = document.getElementById("size");
const btnBlack = document.getElementById("btnBlack");
const gridUnit = document.getElementsByClassName("grid-unit");
let isDrawing = false;

let sizeGrid = 64;

drawGrid(sizeGrid);

//add event to resize grid at select list
optionSize.addEventListener("change", (e) => {
  deleteGrid(gridContainer);

  sizeGrid = e.target.value;

  drawGrid(sizeGrid);
});

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

  //create events for coloring the divs
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
    unit.addEventListener("pointerdown", (e) => {
      e.target.style.backgroundColor = "black";
    });

    unit.addEventListener("mouseover", (e) => {
      if (isDrawing) e.target.style.backgroundColor = "black";
    });
  }
}

//delete grid
function deleteGrid(gridContainer) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}
