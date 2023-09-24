'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickname = document.getElementById('nickname');
nickname.textContent = ' shorty';

const food = document.getElementById('fav-food');
food.textContent = ' lazanya';

const hometown = document.getElementById('hometown');
hometown.textContent = ' dnipro';

const liElements = document.querySelectorAll('li');

liElements.forEach((element) => {
  element.setAttribute('class', 'list-item');
});
