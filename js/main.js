const containerGrid = document.getElementById("containerGrid");
const optionSize = document.getElementById("size");

let sizeGrid = 64;

drawGrid(sizeGrid);

optionSize.addEventListener("change", (event) => {
  deleteGrid(containerGrid);

  sizeGrid = event.target.value;

  drawGrid(sizeGrid);
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

      rowGrid.appendChild(colGrid);
    }
  }
}

function deleteGrid(containerGrid) {
  while (containerGrid.firstChild) {
    containerGrid.removeChild(containerGrid.firstChild);
  }
}
