const container = document.querySelectorAll(".container");

let draggedElement = null;
container.forEach((container) => {
  // 1 - start

  container.addEventListener("dragstart", (event) => {
    console.log("Drag is started on ", container);
    // console.log(event.target);
    draggedElement = event.target;
  });
  container.addEventListener("dragover", (event) => {
    event.preventDefault();
    // console.log("Dragging is going on");
  });
  // 3 - end the cycle
  container.addEventListener("dragend", (event) => {
    console.log("Dragging is finised", container);
  });
  // 2 - drop
  container.addEventListener("drop", (event) => {
    console.log("Dropped happended");
    if (draggedElement) {
      container.appendChild(draggedElement);
    }
  });
});
