const containerGrid = document.getElementById("containerGrid");

let sizeGrid = 64;

function drawGrid(sizeGrid) {
  for (let i = 0; i < sizeGrid; i++) {
    const rowGrid = document.createElement("div");

    rowGrid.classList.add("row-grid");

    containerGrid.appendChild(rowGrid);

    for(let z = 0; z < sizeGrid; z++){
        const colGrid = document.createElement("div");

        colGrid.classList.add("col-grid");

        rowGrid.appendChild(colGrid);
    }

    
  }
}

drawGrid(sizeGrid);
