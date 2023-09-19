'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  htmlLess.textContent = currentTime;
  ///  Unnecessary: return currentTime;
}
setInterval(addCurrentTime, 1000);
// when these were inside above function addCurrentTime() time was to be typed constantly nonstop with each single update
const htmlLess = document.createElement('div');
document.body.appendChild(htmlLess);

window.onload = () => {
  addCurrentTime();
  setInterval(addCurrentTime, 1000);
};
