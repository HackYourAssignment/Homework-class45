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
// URLs for the walking and dancing cat GIFs
const walkCatUrl = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';
const danceCatUrl =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';

function catWalk() {
  const catImage = document.querySelector('img');

  // Initialize the cat's starting position
  catImage.style.left = '0px';

  // Flags to track whether the cat is dancing and if it has danced
  let isDancing = false;
  let hasDanced = false;

  // store the middle position of the screen
  let middlePosition;

  function moveImage() {
    const currentPosition = parseInt(catImage.style.left);

    // If the cat is currently dancing, do not move
    if (isDancing) return;

    // Check if the cat has reached the end of the screen
    if (currentPosition >= window.innerWidth - catImage.width) {
      // Reset the cat's position to the beginning
      catImage.style.left = '0px';
      // Reset the "hasDanced" flag
      hasDanced = false;
      // Change the cat's image to the walking GIF
      catImage.src = walkCatUrl;
    } else {
      // Move the cat by 10 pixels to the right
      catImage.style.left = currentPosition + 10 + 'px';

      // Calculate the middle position of the screen
      middlePosition = (window.innerWidth - catImage.width) / 2;

      // If the cat reaches the middle:
      if (currentPosition >= middlePosition && !hasDanced) {
        // Set the cat to start dancing
        isDancing = true;
        catImage.src = danceCatUrl;

        // Set a timeout to stop dancing after 5 seconds
        setTimeout(() => {
          isDancing = false;
          hasDanced = true;
          // Change the cat's image back to the walking GIF
          catImage.src = walkCatUrl;
          // Call moveImage again to continue the walking
          moveImage();
        }, 5000);
      }
    }
  }

  // Set an interval to call moveImage every 50 milliseconds
  setInterval(moveImage, 50);
}

window.addEventListener('load', catWalk);
