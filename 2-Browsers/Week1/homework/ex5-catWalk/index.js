'use strict';

let catPosition = 0;
let isDancing = false;
let catDancingTimer = null;

function catWalk() {
  const catWalking = document.getElementById("catWalking");
  
  
  if (!isDancing) {
    catPosition += 10;
    catWalking.style.left = catPosition + "px";
  }
  
  if (catPosition >= window.innerWidth) {
    catPosition = 0;
  } 
 
  if (Math.abs(catPosition - window.innerWidth / 2) <= 5 && !isDancing) {
    isDancing = true
    const catDancing = document.createElement("img");
    catDancing.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif";
    catDancing.alt = "cat dancing";
    catDancing.style.position = "absolute";
    catDancing.style.left = window.innerWidth / 2 + "px";
    document.body.appendChild(catDancing);

    catDancingTimer = setTimeout(function() {
      isDancing = false;
      catWalking.style.left = window.innerWidth / 2 + 10 + "px";
      catDancing.style.display = "none";
      clearTimeout(catDancingTimer);
    }, 5000);  
 }
}

setInterval(catWalk, 50);  


window.addEventListener('load', catWalk);
