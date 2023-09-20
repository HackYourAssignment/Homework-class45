'use strict';

function addCurrentTime() {
  const now = new Date()
  console.log(now)
  const current = document.getElementById("currenttime")
  current.textContent = now

}
document.getElementById("body").onload = function() {addCurrentTime()};
setInterval(addCurrentTime, 1000);
