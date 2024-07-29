const starContainer = document.querySelector("#star_container");
const countSpan = document.querySelector("#count");
const starArr = document.querySelectorAll(".star");

starContainer.addEventListener("click", (e) => {
  let elem = e.target;
  let isRequired = elem.hasAttribute("idx");
  if (!isRequired) {
    return;
  }
  let noOfStars = parseInt(elem.getAttribute("idx"));
  fillStar(noOfStars);
});

starContainer.addEventListener("mouseover", (e) => {
  let elem = e.target;
  let isRequired = elem.hasAttribute("idx");
  if (!isRequired) {
    return;
  }
  let noOfStars = parseInt(elem.getAttribute("idx"));
  changeStars(noOfStars);
});

starContainer.addEventListener("mouseleave", (e) => {
  changeStars(parseInt(countSpan.textContent));
});

// helpers function
function fillStar(idx) {
  countSpan.textContent = idx;
  changeStars(idx);
}

function changeStars(idx) {
  for (let i = 0; i < starArr.length; i++) {
    starArr[i].classList.remove("yellow");
  }
  for (let i = 0; i < idx; i++) {
    starArr[i].classList.add("yellow");
  }
}
