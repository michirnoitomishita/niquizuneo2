const two_btn = document.getElementById("two_btn");
const gu_btn = document.getElementById("gu_btn");
const three_btn = document.getElementById("three_btn");
const fore_btn = document.getElementById("four_btn");
const words = [two_btn, gu_btn, three_btn, fore_btn];
const startButton = document.getElementById("start_btn");
const stopButton = document.getElementById("stop_btn");

let intervalId;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function blinkWords() {
  const randomIndex = getRandomInt(words.length);

  words.forEach((word, index) => {
    if (index === randomIndex) {
      word.classList.remove("opacity-0");
      word.classList.add("opacity-1", "red-text");
    } else {
      word.classList.remove("opacity-1", "red-text");
      word.classList.add("opacity-0");
    }
  });
}


startButton.addEventListener("click", () => {
  intervalId = setInterval(blinkWords, 10); // 点滅の間隔を調整
  start_btn.disabled = true;
  stop_btn.disabled = false;
});

stopButton.addEventListener("click", () => {
  clearInterval(intervalId);
  start_btn.disabled = false;
  stop_btn.disabled = true;
});
