const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body')

start.addEventListener('click',() => {
    const timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();;
    }, 1000);
    stop.disabled = false;
    start.disabled = true;
  });
stop.addEventListener('click', () => {
    clearInterval(timerId);
    start.disabled = false;
    stop.disabled = true;
})


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
