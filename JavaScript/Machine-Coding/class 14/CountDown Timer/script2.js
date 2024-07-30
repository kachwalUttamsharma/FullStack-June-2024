const select = id => document.getElementById(id);
const int = x => parseInt(x);

const startBtn = select("start"), resetBtn = select("reset");
const pauseBtn = select("pause"), continueBtn = select("continue");
const hrsInput = select("hr"), minInput = select("min"), secInput = select("sec");
let counterID;
let timeInSeconds = 0;

startBtn.addEventListener("click", () => {
    const hrs = int(hrsInput?.value) || 0;
    const mins = int(minInput?.value) || 0;
    const secs = int(secInput?.value) || 0;
    timeInSeconds = hrs * 3600 + mins * 60 + secs;
    if(timeInSeconds === 0) {
        alert("please enter valid time");
        return;
    }
    if(timeInSeconds > 86400) {
        alert("hrs > 24 not allowed");
        return;
    }
    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
    timer();
});

pauseBtn.addEventListener("click", () => {
    clearInterval(counterID);
    pauseBtn.style.display = "none";
    continueBtn.style.display = "block";
});

continueBtn.addEventListener("click", () => {
    timer(timeInSeconds);
    continueBtn.style.display = "none";
    pauseBtn.style.display = "block";
});

resetBtn.addEventListener("click", resetFun);

function timer() {
    counterID = setInterval(() => {
        timeInSeconds--;
        updateUIEverySec();
    }, 1000);
};

function updateUIEverySec() {
    let hrs = Math.floor(timeInSeconds / 3600);
    let mins = Math.floor((timeInSeconds % 3600) / 60);
    let secs = timeInSeconds % 60;
    hrsInput.value = hrs < 10 ? '0' + hrs : hrs;
    minInput.value = mins < 10 ? '0' + mins : mins;
    secInput.value = secs < 10 ? '0' + secs : secs;
    if(secs == 0 && mins == 0 && hrs == 0) {
        resetFun();
    }
}

function resetFun() {
    minInput.value = "";
    hrsInput.value = "";
    secInput.value = "";
    timeInSeconds = 0;
    startBtn.style.display = "block";
    pauseBtn.style.display = "none";
    continueBtn.style.display = "none";
    clearInterval(counterID);
}