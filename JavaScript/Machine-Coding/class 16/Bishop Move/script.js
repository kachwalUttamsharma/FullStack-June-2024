window.addEventListener("load", (e) => {
  let table = document.querySelector("#tableBody");
  for (let ri = 0; ri < 8; ri++) {
    let tr = document.createElement("tr");
    let colorOfBox = ri % 2 == 0 ? true : false;
    for (let ci = 0; ci < 8; ci++) {
      let td = document.createElement("td");
      td.setAttribute("data-index", `${ri}-${ci}`);
      td.textContent = `${ri}-${ci}`;
      td.setAttribute(
        "class",
        `box ${colorOfBox === true ? "white" : "black"}`
      );
      tr.appendChild(td);
      colorOfBox = !colorOfBox;
    }
    table.appendChild(tr);
  }
});

let table = document.querySelector(".table");
let tableBox = document.getElementsByClassName("box");

table.addEventListener("mouseleave", () => {
  for (let i = 0; i < tableBox.length; i++) {
    tableBox[i].classList.remove("yellow");
  }
});

table.addEventListener("mouseover", (e) => {
  const dataIndex = e.target.dataset.index;
  const [ri, ci] = dataIndex.split("-").map((id) => parseInt(id));

  // clear exisiting selected color
  for (let i = 0; i < tableBox.length; i++) {
    tableBox[i].classList.remove("yellow");
  }
  const pathStorage = {};
  // { "0-0" : true}
  pathStorage[dataIndex] = true;
  topLeft(ri, ci, pathStorage);
  topRight(ri, ci, pathStorage);
  bottomLeft(ri, ci, pathStorage);
  bottomRight(ri, ci, pathStorage);

  for (let i = 0; i < tableBox.length; i++) {
    let cellDataIndex = tableBox[i].dataset.index;
    if (pathStorage[cellDataIndex] === true) {
      tableBox[i].classList.add("yellow");
    }
  }
});
function topLeft(ri, ci, pathStorage) {
  ri--;
  ci--;
  while (ri >= 0 && ci >= 0) {
    let dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci--;
  }
}

function topRight(ri, ci, pathStorage) {
  ri--;
  ci++;
  while (ri >= 0 && ci <= 7) {
    let dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri--;
    ci++;
  }
}

function bottomLeft(ri, ci, pathStorage) {
  ri++;
  ci--;
  while (ri <= 7 && ci >= 0) {
    let dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri++;
    ci--;
  }
}

function bottomRight(ri, ci, pathStorage) {
  ri++;
  ci++;
  while (ri <= 7 && ci <= 7) {
    let dataIndex = `${ri}-${ci}`;
    pathStorage[dataIndex] = true;
    ri++;
    ci++;
  }
}
