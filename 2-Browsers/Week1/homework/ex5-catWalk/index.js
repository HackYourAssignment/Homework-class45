'use strict';
const imgElement = document.getElementsByTagName('img')[0];
let catPosition = 0;
const screenWidth = window.innerWidth;
const middleOfScreen = screenWidth / 2;
imgElement.style.left = `${catPosition}px`;
function catWalk() {
  catPosition += 10;
  imgElement.style.left = `${catPosition}px`;
  if (catPosition === middleOfScreen) {
    clearInterval(catInterval);
    catDance();
    setTimeout(() => {
      imgElement.src =
        'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      imgElement.alt = 'cat walking';
      catInterval = setInterval(catWalk, 50);
    }, 5000);
  }
  if (catPosition > screenWidth) {
    catPosition = 0;
  }
}
function catDance() {
  imgElement.src =
    'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
  imgElement.alt = 'cat is dancing';
}
let catInterval = setInterval(catWalk, 50);

// TODO execute `catWalk` when the browser has completed loading the page
document.addEventListener('DOMContentLoaded', catWalk);
