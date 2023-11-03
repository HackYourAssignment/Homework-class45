'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

document.getElementById('nickname').textContent = 'Com8.';
document.getElementById('fav-food').textContent = 'Sushi "Among-Others".';
document.getElementById('hometown').textContent = 'Damascus.';

const listItems = document.querySelectorAll('li');
listItems.forEach((listItem) => {
  // not when we add `.` but when we call the class eg.('.list-item')
  listItem.classList.add('list-item');
  listItem.style.color = 'red';
});
