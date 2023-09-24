'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
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
