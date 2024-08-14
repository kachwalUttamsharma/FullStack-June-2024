const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".remove-btn");
const modal = document.querySelector(".modal-cont");
const textArea = document.querySelector(".textarea-cont");
const priorityColorArray = modal.querySelectorAll(".priority-color");
const prioritySetModal = modal.querySelector(".priority-color-cont");
const mainContainer = document.querySelector(".main_cont");
const toolBoxPriorityContainer = document.querySelector(
  ".toolbox-priority-cont"
);
const pendingContainer = document.querySelector(".pending-cont");
const finishedContainer = document.querySelector(".finished-cont");
const uid = new ShortUniqueId();
const colors = ["pink", "blue", "purple", "green"];
let currentColor = "green";
let deleteFlag = false;
let allTickets = [];

window.addEventListener("load", () => {
  const getAllTicket = JSON.parse(localStorage.getItem("localTask"));
  if (getAllTicket) {
    for (let i = 0; i < getAllTicket.length; i++) {
      let ticketObj = getAllTicket[i];
      createTicket(
        ticketObj.content,
        ticketObj.color,
        ticketObj.id,
        ticketObj.isPending
      );
    }
  }
});

toolBoxPriorityContainer.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) {
    return;
  }
  const curentColorelem = e.target;
  const cColor = curentColorelem.classList[1];
  const ticketArr = document.querySelectorAll(".ticket-cont");
  for (let i = 0; i < ticketArr.length; i++) {
    const ticketColorElem = ticketArr[i].querySelector(".ticket-color");
    let cTicketsColor = ticketColorElem.classList[1];
    if (cTicketsColor !== cColor) {
      ticketArr[i].style.display = "none";
    } else {
      ticketArr[i].style.display = "block";
    }
  }
});
toolBoxPriorityContainer.addEventListener("dblclick", function (e) {
  if (e.target == e.currentTarget) {
    return;
  }
  const ticketArr = document.querySelectorAll(".ticket-cont");
  for (let i = 0; i < ticketArr.length; i++) {
    ticketArr[i].style.display = "block";
  }
});

addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});
deleteBtn.addEventListener("click", () => {
  if (!deleteFlag) {
    deleteBtn.style.color = "red";
  } else {
    deleteBtn.style.color = "black";
  }
  deleteFlag = !deleteFlag;
});

modal.addEventListener("keypress", (e) => {
  if (e.key != "Enter") {
    return;
  }
  const content = textArea.value;
  createTicket(content, currentColor);
  textArea.value = "";
  currentColor = "green";
  modal.style.display = "none";
  for (let i = 0; i < priorityColorArray.length; i++) {
    priorityColorArray[i].classList.remove("active");
  }
  prioritySetModal.children[2].classList.add("active");
});

prioritySetModal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) {
    return;
  }
  currentColor = e.target.classList[1];
  for (let i = 0; i < priorityColorArray.length; i++) {
    priorityColorArray[i].classList.remove("active");
  }
  e.target.classList.add("active");
});

function createTicket(content, currentColor, cId, isPending = true) {
  const id = cId || uid();
  //   console.log(id, content, currentColor);
  const ticketContainer = document.createElement("div");
  ticketContainer.setAttribute("class", "ticket-cont");
  ticketContainer.setAttribute("draggable", "true");
  ticketContainer.innerHTML = `<div class="ticket-color ${currentColor}"></div>
  <div class="ticket-id">${id}</div>
  <div class="ticket-area">${content}</div>
  <div class="lock-unlock">
    <i class="fa-solid fa-lock"></i>
  </div>`;
  if (isPending == true) {
    pendingContainer.appendChild(ticketContainer);
  } else {
    finishedContainer.appendChild(ticketContainer);
  }

  // changing status color
  const ticketColorElem = ticketContainer.querySelector(".ticket-color");
  AddColorChangeListners(ticketColorElem, id);
  // handling locking and unlocking and changing text
  const ticketArea = ticketContainer.querySelector(".ticket-area");
  const lockBtn = ticketContainer.querySelector(".lock-unlock");
  AddLocknUnlock(ticketArea, lockBtn, id);
  // delete task
  deleteTask(ticketContainer, id);

  const ticketObj = {
    id: id,
    content: content,
    color: currentColor,
    isPending: true,
  };
  allTickets.push(ticketObj);
  if (!cId) {
    updateLocalStorage();
  }
}

function AddColorChangeListners(ticketColorElem, id) {
  ticketColorElem.addEventListener("click", (e) => {
    const cColor = e.target.classList[1];
    const idx = colors.indexOf(cColor);
    const nextIdx = (idx + 1) % colors.length;
    e.target.classList.remove(cColor);
    e.target.classList.add(colors[nextIdx]);
    // updating the array
    const ticketObj = allTickets.find((ticketObject) => {
      return ticketObject.id == id;
    });
    ticketObj.color = colors[nextIdx];
    updateLocalStorage();
  });
}

function AddLocknUnlock(ticketArea, lockBtn, id) {
  lockBtn.addEventListener("click", () => {
    let isLocked = lockBtn.children[0].classList.contains("fa-lock");
    if (isLocked) {
      ticketArea.setAttribute("contenteditable", "true");
      lockBtn.children[0].classList.remove("fa-lock");
      lockBtn.children[0].classList.add("fa-lock-open");
    } else {
      ticketArea.setAttribute("contenteditable", "false");
      lockBtn.children[0].classList.remove("fa-lock-open");
      lockBtn.children[0].classList.add("fa-lock");
    }
    const ticketObj = allTickets.find((ticketObject) => {
      return ticketObject.id == id;
    });
    ticketObj.content = ticketArea.textContent;
    updateLocalStorage();
  });
}

function deleteTask(ticketContainer, id) {
  ticketContainer.addEventListener("click", (e) => {
    if (deleteFlag) {
      ticketContainer.remove();
      const restofTickets = allTickets.filter((ticketObject) => {
        return ticketObject.id != id;
      });
      allTickets = restofTickets;
      updateLocalStorage();
    }
  });
}

function updateLocalStorage() {
  localStorage.setItem("localTask", JSON.stringify(allTickets));
}

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
      const isPending =
        container.classList[0] === "pending-cont" ? true : false;
      const cId = draggedElement.querySelector(".ticket-id").innerText;
      const ticketObj = allTickets.find((ticket) => {
        return ticket.id === cId;
      });
      ticketObj.isPending = isPending;
      updateLocalStorage();
    }
  });
});
