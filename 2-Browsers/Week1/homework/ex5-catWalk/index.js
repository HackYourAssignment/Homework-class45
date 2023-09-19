'use strict';

const imgElement = document.querySelector('img');
imgElement.style.left = '0px';

function catWalk() {
  const initialLeft = parseInt(imgElement.style.left, 10);
  
  const setNewLeft = () => {
    const newLeft = `${initialLeft + 10}px`;
    imgElement.style.left = newLeft;
  };

  const resetWalkingCat = () => {
    const walkingCat =
      'http://www.anniemation.com/clip_art/images/cat-walk.gif';
    imgElement.src = walkingCat;
    setNewLeft();
    catWalkInterval = setInterval(catWalk, 50);
  };

  const screenWidth = window.innerWidth;
  const screenMiddle = screenWidth / 2;
  const imgWidth = imgElement.naturalWidth;
  const imgMiddle = imgWidth / 2;

  if (initialLeft >= screenWidth) {
    imgElement.style.left = '0px';
  } else if (initialLeft === screenMiddle) {
    imgElement.style.left = '50%';
    imgElement.style.marginLeft = `-${imgMiddle}px`;
    clearInterval(catWalkInterval);
    imgElement.src =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    setTimeout(resetWalkingCat, 5000);
  } else {
    setNewLeft();
  }
}

let catWalkInterval = setInterval(catWalk, 50);

window.onload = catWalk;
