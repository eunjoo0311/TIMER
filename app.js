const startBtn = document.querySelector('button[type="button"]');
const resetBtn = document.querySelector('button[type="reset"]');
const hrsInput = document.querySelector(".hrs-input");
const minInput = document.querySelector(".min-input");
const secInput = document.querySelector(".sec-input");

let totalSeconds = 0;
let countdownInterval;

startBtn.addEventListener("click", function (event) {
  totalSeconds =
    hrsInput.value * 3600 + minInput.value * 60 + secInput.value * 1;
  if (totalSeconds <= 0) {
    return;
  }
  countdownInterval = setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  totalSeconds--;
  if (totalSeconds <= 0) {
    clearInterval(countdownInterval);
  }
  const hrs = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;
  hrsInput.value = hrs.toString().padStart(2, "0"); // 두자리로 보여주기
  minInput.value = min.toString().padStart(2, "0");
  secInput.value = sec.toString().padStart(2, "0");
}

resetBtn.addEventListener("click", function () {
  clearInterval(countdownInterval);
  totalSeconds = 0;
  hrsInput.value = "00";
  minInput.value = "00";
  secInput.value = "00";
});
