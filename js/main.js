const containerGrid = document.getElementById("containerGrid");
const optionSize = document.getElementById("size");
const gridUnit = document.getElementsByClassName("grid-unit");
const btnBlack = document.getElementById("btnBlack");

let sizeGrid = 64;

drawGrid(sizeGrid);

//add event to resize grid at select list
optionSize.addEventListener("change", (event) => {
  deleteGrid(containerGrid);

  sizeGrid = event.target.value;

  drawGrid(sizeGrid);
});

//add event to paint grid on black
btnBlack.addEventListener("click", () => {
  for (const unit of gridUnit) {
    unit.addEventListener("mouseover", () => {
      unit.style.backgroundColor = "black";
    });
  }
});

//draw grid at specific size
function drawGrid(sizeGrid) {
  for (let i = 0; i < sizeGrid; i++) {
    const rowGrid = document.createElement("div");

    rowGrid.classList.add("row-grid");

    containerGrid.appendChild(rowGrid);

    for (let z = 0; z < sizeGrid; z++) {
      const colGrid = document.createElement("div");

      colGrid.classList.add("col-grid");
      colGrid.classList.add("grid-unit");

      rowGrid.appendChild(colGrid);
    }
  }
}

//delete grid
function deleteGrid(containerGrid) {
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }
}
