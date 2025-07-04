let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStop');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const laps = document.getElementById('laps');
const themeToggle = document.getElementById('themeToggle');

startStopBtn.addEventListener('click', () => {
  if (!running) {
    timer = setInterval(updateTime, 1000);
    startStopBtn.innerHTML = `<i class="fas fa-pause"></i>`;
    running = true;
  } else {
    clearInterval(timer);
    startStopBtn.innerHTML = `<i class="fas fa-play"></i>`;
    running = false;
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  startStopBtn.innerHTML = `<i class="fas fa-play"></i>`;
  running = false;
  laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  if (running) {
    const lap = document.createElement('div');
    lap.textContent = display.textContent;
    laps.appendChild(lap);
  }
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeToggle.innerHTML = isDark ? `<i class="fas fa-sun"></i>` : `<i class="fas fa-moon"></i>`;
});

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.textContent = `${h}:${m}:${s}`;
}
