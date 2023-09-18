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
-----------------------------------------------------------------------------*/

// TODO complete this function

'use strict';

// Variable to store a reference to the <img> element
const catImage = document.getElementById('cat');

// Initial position of the cat
let catLeftPosition = 0;

// Flag to track whether the cat is dancing
let isDancing = false;

// Function to move the cat to the right
function catWalk() {
  if (!isDancing) {
    // Move the cat 10 pixels to the right
    catLeftPosition += 10;

    // Check if the cat has reached the middle of the screen
    if (catLeftPosition >= window.innerWidth / 2) {
      // Replace the image with a dancing cat
      catImage.src =
        'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
      isDancing = true;

      // After 5 seconds, reset to the original image and continue walking
      setTimeout(() => {
        catImage.src =
          'http://www.anniemation.com/clip_art/images/cat-walk.gif';
        isDancing = false;
      }, 5000);
    }

    // Check if the cat has reached the right-hand side
    if (catLeftPosition >= window.innerWidth) {
      // Reset the cat to the left-hand side
      catLeftPosition = 0;
    }

    // Update the cat's left style property
    catImage.style.left = catLeftPosition + 'px';
  }
}

// TODO execute `catWalk` when the browser has completed loading the page
window.addEventListener('load', () => {
  // Set the initial position of the cat
  catImage.style.left = '0px';

  // Call `catWalk` every 50 milliseconds
  setInterval(catWalk, 50);
});
