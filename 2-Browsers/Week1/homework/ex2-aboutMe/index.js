'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// Getting the span Elements by ID and modifying their content:
const nickName = document.getElementById('nickname');
nickName.textContent = 'Mo';

const favoriteFood = document.getElementById('fav-food');
favoriteFood.textContent = 'Ramen';

const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Syria';

// Giving a class name to the list:
const li = document.querySelectorAll('li');

li.forEach((element) => {
  element.className = 'list-item';
});
