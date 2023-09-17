'use strict';

const catElement = document.querySelector('img');
let startPoint = 0;
const maxWidth = window.innerWidth;
const middleScreen = Math.round((maxWidth - catElement.width) / 2 / 10) * 10;

let dancing = false;

function catWalk() {
  if (!dancing) {
    catElement.src = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    startPoint += 10;
    catElement.style.left = `${startPoint}px`;
  }

  if (startPoint === middleScreen) {
    catElement.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    dancing = true;
    setTimeout(() => {
      dancing = false;
    }, 5000);
  }

  if (startPoint >= maxWidth) {
    startPoint = 0;
  }
}

window.addEventListener('DOMContentLoaded', function () {
  setInterval(catWalk, 50);
  catWalk();
});
