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

// Define the URL of the dancing cat image.
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

// Set the number of pixels the cat moves in each animation step.
const STEP_SIZE_PX = 10;

// Set the time interval (in milliseconds) for updating the cat's position.
const STEP_TIME_MS = 50;

// Set the duration (in milliseconds) for the cat's dancing animation.
const DANCE_TIME_MS = 5000;

// Define a function named catWalk.
function catWalk() {
  // Select the <img> element on the web page and store it in a variable called image.
  const image = document.getElementById('cat');

  // Calculate the horizontal midpoint of the screen.
  const midPoint = window.innerWidth / 2;

  // Initialize a variable called position to a negative value to start the cat off the left side of the screen.
  let position = -image.width;

  // Start an interval and store its ID in a variable called intervalId.
  const intervalId = setInterval(function () {
    // Update the cat's position by changing the left CSS property of the image.
    image.style.left = position + 'px';

    // Increment the position variable by STEP_SIZE_PX pixels.
    position += STEP_SIZE_PX;

    // Check if the cat has reached or passed the midPoint.
    if (position >= midPoint) {
      // If yes, clear the current interval.
      clearInterval(intervalId);

      // Save the original image source in a variable called savedSrc.
      const savedSrc = image.src;

      // Replace the image source with the dancing cat URL to make the cat dance.
      image.src = DANCING_CAT_URL;

      // After a delay of DANCE_TIME_MS milliseconds:
      setTimeout(function () {
        // Restore the original image source.
        image.src = savedSrc;

        // Create a new interval to continue the cat's walk from where it left off.
        const continueIntervalId = setInterval(function () {
          // Update the cat's position by changing the left CSS property of the image.
          image.style.left = position + 'px';

          // Increment the position variable by STEP_SIZE_PX pixels.
          position += STEP_SIZE_PX;

          // Check if the cat has moved past the right edge of the screen.
          if (position >= window.innerWidth) {
            // If yes, clear the current interval and call the catWalk function to restart the animation.
            clearInterval(continueIntervalId);
            catWalk();
          }
        }, STEP_TIME_MS);
      }, DANCE_TIME_MS);
    }
  }, STEP_TIME_MS);
}

// Attach an event listener to the 'load' event of the window.
// When the window has fully loaded, call the catWalk function to start the animation.
window.addEventListener('load', catWalk);
