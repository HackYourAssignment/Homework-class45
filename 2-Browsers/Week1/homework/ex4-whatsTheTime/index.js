'use strict';

let divElement;
function addCurrentTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const showTime = `${hour}:${minutes}:${seconds}`;

  //create html elements to display the time
  if (!divElement) {
    divElement = document.createElement('div');
    document.body.appendChild(divElement);
  }
  divElement.textContent = showTime;

  return divElement;
}
setInterval(addCurrentTime, 1000);
// TODO execute `addCurrentTime` when the browser has completed loading the page
document.addEventListener('DOMContentLoaded', addCurrentTime);
