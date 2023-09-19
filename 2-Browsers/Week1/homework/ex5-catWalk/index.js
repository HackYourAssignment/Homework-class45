'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif

 
 Moving objects from left to right in a web page Basic example:

  ```
  let object = document.getElementById('theObject'); // Replace 'yourObject' with the ID of your HTML element
  let leftPosition = 0; // Initial left position

    function moveObject() {
     leftPosition += 1; // Adjust this value to control the speed
    object.style.left = leftPosition + 'px';

      if (leftPosition >= window.innerWidth) {
       clearInterval(interval); // Stop when it reaches the right edge
      }
    }

   const interval = setInterval(moveObject, 10); //  every 10 milliseconds update
 ```
-----------------------------------------------------------------------------*/

const imgCatWalk = document.querySelector('img');
let leftPosition = 0;

function catWalk() {
  leftPosition += 10;
  imgCatWalk.style.left = leftPosition + 'px';

  if (leftPosition >= window.innerWidth) {
    /// clearInterval((imgCatWalk.style.left = 0)); this one stop the cat
    leftPosition = 0; // Restart at the left-side
  }
  if (leftPosition === window.innerWidth / 2) {
    const dancingCatURL =
      'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
    imgCatWalk.src = dancingCatURL;
    setTimeout(() => {
      imgCatWalk.src =
        'http://www.anniemation.com/clip_art/images/cat-walk.gif';
      leftPosition = 0; // fix to img alt together when switching
    }, 5000); // Keep dancing for 5 seconds
  }
}

window.onload = () => {
  catWalk();
  setInterval(catWalk, 50);
};
