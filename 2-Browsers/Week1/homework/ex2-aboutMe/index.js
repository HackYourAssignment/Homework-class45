// 'use strict';

// const { log } = require('winston');

/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
2. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
3. Look in the css file!
------------------------------------------------------------------------------*/

// TODO add your JavaScript code here.

const nickName = 'abc';
const favFood = 'abcd';
const hometown = 'abcde';

const ulItems = document.querySelectorAll('li');

ulItems[0].innerText = nickName;
ulItems[1].innerText = favFood;
ulItems[2].innerText = hometown;

ulItems.forEach((item) => {
  item.classList.add('list-item');
});
