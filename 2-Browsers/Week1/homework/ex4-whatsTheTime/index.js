'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
const timeCard = document.createElement('div');
function addCurrentTime() {
  const date = new Date().toLocaleTimeString();
  timeCard.textContent = date;
}
setInterval(addCurrentTime, 1000);
document.querySelector('body').appendChild(timeCard);

// TODO execute `addCurrentTime` when the browser has completed loading the page
