'use strict';

function catWalk() {
  console.log("helo")
  const catImg = document.getElementById("cat-img")
  catImg.classList.add("cat-image")
let currentPosition = 0
const interval = setInterval(() => {
   currentPosition += 10;
   catImg.style.left = `${currentPosition}px`;

   if (currentPosition == window.innerWidth/2) {

       catImg.src = "https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif"
   }
   if (currentPosition == window.innerWidth) {
     
      clearInterval(interval);
      catImg.style.left = "0px"
   }

}, 50);
  
}

document.getElementById("cat").onload = function() {catWalk()};
