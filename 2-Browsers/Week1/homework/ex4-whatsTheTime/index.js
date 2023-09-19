'use strict';

function addCurrentTime() {
  const body = document.querySelector('body');
  const paragraphElement = document.createElement('p');
  body.prepend(paragraphElement);

  function getCurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10) {hours = `0${hours}`}
    if (minutes < 10) {minutes = `0${minutes}`}
    if (seconds < 10) {seconds = `0${seconds}`}

    const currentTime = `${hours}:${minutes}:${seconds}`;
    paragraphElement.textContent = currentTime;

    return currentTime;
  }

  console.log(getCurrentTime());
  setInterval(getCurrentTime, 1000);
}

window.onload = addCurrentTime;