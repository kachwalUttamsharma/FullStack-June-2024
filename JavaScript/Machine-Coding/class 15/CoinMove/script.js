let coinPosition = { x: 0, y: 0 };
let gridSize = 2;
let gridDimension;

function generateGrid() {
  gridSize = parseInt(document.getElementById("gridSize").value);
  const totalCells = 4 * gridSize * gridSize;
  gridDimension = Math.sqrt(totalCells);

  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";
  coinPosition = {
    x: 0,
    y: 0,
  };

  for (let row = 0; row < gridDimension; row++) {
    const div = document.createElement("div");
    div.className = "grid-row";
    for (let col = 0; col < gridDimension; col++) {
      const span = document.createElement("span");
      span.className = "grid-item";
      span.setAttribute("data-x", col);
      span.setAttribute("data-y", row);
      if (col === coinPosition.x && row === coinPosition.y) {
        span.innerHTML = "🪙";
      }
      div.appendChild(span);
    }
    gridContainer.appendChild(div);
  }
}

function moveCoin(direction) {
  const gridContainer = document.getElementById("gridContainer");
  const rows = gridContainer.getElementsByClassName("grid-row");
  const currentCell = rows[coinPosition.y].children[coinPosition.x];

  let newCell;
  if (direction === "up" && coinPosition.y > 0) {
    newCell = rows[coinPosition.y - 1].children[coinPosition.x];
    coinPosition.y--;
  } else if (direction === "down" && coinPosition.y < gridDimension - 1) {
    newCell = rows[coinPosition.y + 1].children[coinPosition.x];
    coinPosition.y++;
  } else if (direction === "left" && coinPosition.x > 0) {
    newCell = currentCell.previousElementSibling;
    coinPosition.x--;
  } else if (direction === "right" && coinPosition.x < gridDimension - 1) {
    newCell = currentCell.nextElementSibling;
    coinPosition.x++;
  }

  if (newCell) {
    currentCell.innerHTML = "";
    newCell.innerHTML = "🪙";
  }
}

generateGrid();
