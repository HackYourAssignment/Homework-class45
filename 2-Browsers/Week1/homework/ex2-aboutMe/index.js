'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.
// Get references to the HTML elements where you want to insert the content
const nicknameElement = document.getElementById('nickname');
const favFoodElement = document.getElementById('fav-food');
const hometownElement = document.getElementById('hometown');

// Define your personal information
const nickname = 'Rama';
const favoriteFood = 'Pizza';
const hometown = 'Eindhoven';

// Set the text content of the HTML elements with your information
nicknameElement.textContent = nickname;
favFoodElement.textContent = favoriteFood;
hometownElement.textContent = hometown;

// Get a NodeList of all <li> elements
const listItems = document.querySelectorAll('li');

// Iterate through the NodeList and change the class to "list-item"
listItems.forEach((li) => {
  li.classList.add('list-item');
});
