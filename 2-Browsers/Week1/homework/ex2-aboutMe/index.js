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

const spans = document.querySelectorAll('span');
const lis = document.querySelectorAll('li');

const myDetails = ['Habtor', 'Mandi', 'Azzan'];

for (let x = 0; x < spans.length; x++) {
  spans[x].remove();
  lis[x].append(`${myDetails[x]}`);
  lis[x].classList.add('list-item');
}
