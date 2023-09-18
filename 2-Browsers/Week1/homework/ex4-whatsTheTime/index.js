'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const body = document.querySelector('body');

  // Create a <p> element to display the time
  const timeAtTheMoment = document.createElement('p');
  body.appendChild(timeAtTheMoment);

  function updateTime() {
    const currentTime = new Date();
    const timeNow =
      currentTime.getHours().toString().padStart(2, '0') +
      ':' +
      currentTime.getMinutes().toString().padStart(2, '0') +
      ':' +
      currentTime.getSeconds().toString().padStart(2, '0');

    // Update the text content to display the current time
    timeAtTheMoment.textContent = timeNow;
    console.log(timeNow);
  }

  // Update the time immediately
  updateTime();

  // Update the time:
  setInterval(updateTime, 1000);
}

// Execute addCurrentTime when the browser has completed loading the page
window.addEventListener('load', addCurrentTime);
