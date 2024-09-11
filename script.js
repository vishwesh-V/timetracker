let startTime, timerInterval;
const timerDisplay = document.getElementById('timer');
const logList = document.getElementById('logList');

document.getElementById('startBtn').addEventListener('click', () => {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
});

document.getElementById('stopBtn').addEventListener('click', () => {
  clearInterval(timerInterval);
  logTime();
});

document.getElementById('resetBtn').addEventListener('click', resetTimer);

function updateTimer() {
  const elapsedTime = Date.now() - startTime;
  timerDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, '0');
}

function logTime() {
  const listItem = document.createElement('li');
  listItem.textContent = `Logged: ${timerDisplay.textContent}`;
  logList.appendChild(listItem);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = "00:00:00";
}

