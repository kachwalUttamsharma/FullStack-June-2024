// Approach
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const resetBtn = document.getElementById("reset");
const minInput = document.getElementById("min");
const hrsInput = document.getElementById("hr");
const secInput = document.getElementById("sec");
let counterID;
let saveTimeLeft;

startBtn.addEventListener("click", () => {
  const mins = parseInt(minInput?.value) || 0;
  const hrs = parseInt(hrsInput?.value) || 0;
  const sec = parseInt(secInput?.value) || 0;
  const result = validateInput(mins, hrs, sec);
  if (!result) {
    return;
  }
  const { transformedHrs, transformedMins, transformedSecs } =
    TransformedInputs(mins, hrs, sec);
  const timeInSeconds =
    transformedHrs * 3600 + transformedMins * 60 + transformedSecs;
  timer(timeInSeconds);
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  clearInterval(counterID);
  pauseBtn.style.display = "none";
  continueBtn.style.display = "block";
});
continueBtn.addEventListener("click", () => {
  timer(saveTimeLeft);
  continueBtn.style.display = "none";
  pauseBtn.style.display = "block";
});
resetBtn.addEventListener("click", () => {
  minInput.value = 00;
  hrsInput.value = 00;
  secInput.value = 00;
  saveTimeLeft = 0;
  startBtn.style.display = "block";
  pauseBtn.style.display = "none";
  continueBtn.style.display = "none";
  clearInterval(counterID);
});

// helpers functions

function timer(countDownTime) {
  counterID = setInterval(() => {
    countDownTime--;
    saveTimeLeft = countDownTime;
    updateUIEverySec(countDownTime);
  }, 1000);
}

function updateUIEverySec(countDownTime) {
  let hrs = Math.floor(countDownTime / 3600);
  let mins = Math.floor((countDownTime % 3600) / 60);
  let secs = countDownTime % 60;
  if (mins == 0 && secs == 0 && hrs == 0) {
    clearInterval(counterID);
    return;
  }

  if (secs > 0) {
    secs--;
    secInput.value = secs < 10 ? `0${secs}` : `${secs}`;
    minInput.value = mins;
    hrsInput.value = hrs;
    return;
  }
  if (mins > 0) {
    mins--;
    minInput.value = mins < 10 ? `0${mins}` : `${mins}`;
    secInput.value = 59;
    hrsInput.value = hrs;
    return;
  }

  if (hrs > 0) {
    hrs--;
    minInput.value = 59;
    secInput.value = 59;
    hrsInput.value = hrs < 10 ? `0${hrs}` : `${hrs}`;
  }
}

function validateInput(mins, hrs, sec) {
  if (mins === 0 && hrs === 0 && sec === 0) {
    alert("please enter valid time");
    return false;
  }
  if (mins < 0 || hrs < 0 || sec < 0 || hrs > 24) {
    alert("negative values / hrs > 24 not allowed");
    return false;
  }
  const { transformedHrs } = TransformedInputs(mins, hrs, sec);
  if (transformedHrs > 24) {
    alert("negative values / hrs > 24 not allowed");
    return false;
  }
  return true;
}

function TransformedInputs(mins, hrs, sec) {
  if (sec >= 60) {
    mins++;
    sec = sec - 60;
  }
  if (mins >= 60) {
    hrs++;
    mins = mins - 60;
  }
  if (sec === 0 && mins > 0) {
    mins--;
    sec = 59;
  } else if (mins == 0 && hrs > 0) {
    hrs--;
    mins = 59;
    sec = 59;
  }

  return {
    transformedSecs: sec,
    transformedMins: mins,
    transformedHrs: hrs,
  };
}
