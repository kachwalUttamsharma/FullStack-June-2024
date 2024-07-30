const select = str => document.querySelector(str);
const selectAll = str => document.querySelectorAll(str);
const int = x => parseInt(x);

const starContainer = select("#star_container"), countSpan = select("#count");
const starArr = selectAll(".star");


starContainer.addEventListener("mouseover", (e) => {
    if(e.target.hasAttribute("idx")) {
        let starIdx = int(e.target.getAttribute("idx"));
        changeStars(starIdx);
    }
});

starContainer.addEventListener("click", (e) => {
    if(e.target.hasAttribute("idx")) {
        let starIdx = int(e.target.getAttribute("idx"));
        countSpan.textContent = starIdx;
        changeStars(starIdx);
    }
})

starContainer.addEventListener("mouseleave", () => {
    changeStars(int(countSpan.textContent));
})

function changeStars(idx) {
    let i = 0;
    while(i < idx) {
        starArr[i].classList.add("yellow");
        i++;
    }
    while(i < starArr.length) {
        starArr[i].classList.remove("yellow");
        i++;
    }
}