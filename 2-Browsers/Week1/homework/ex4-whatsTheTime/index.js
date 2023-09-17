'use strict';

const watchElement = document.createElement('h1');
const bodyElement = document.querySelector('body');

watchElement.className = 'watch';
bodyElement.appendChild(watchElement);

function addCurrentTime() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const currentTime = `${hours}:${minutes}:${seconds}`;

  console.log(currentTime);

  watchElement.textContent = currentTime;
}

window.addEventListener('DOMContentLoaded', function () {
  setInterval(addCurrentTime, 1000);
  addCurrentTime();
});
