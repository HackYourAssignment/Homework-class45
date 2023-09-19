'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

const nickName = document.getElementById('nickname');
nickName.textContent = 'Marley Marl';
const favoriteFood = document.getElementById('fav-food');
favoriteFood.textContent = 'Pasta';
const homeTown = document.getElementById('hometown');
homeTown.textContent = 'Harare';

const listItems = document.getElementsByTagName('li');
listItems.forEach(item => {
   item.classList.add('list-item');
});
