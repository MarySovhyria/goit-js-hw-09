const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

let intervalId; // To store the interval ID

start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

function startTimer() {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stop.disabled = false;
  start.disabled = true;
}

function stopTimer() {
  clearInterval(intervalId); // Use the stored interval ID to clear the interval
  start.disabled = false;
  stop.disabled = true;
}
