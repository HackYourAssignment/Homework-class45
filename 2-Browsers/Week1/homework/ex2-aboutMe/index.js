'use strict';
const spans = document.querySelectorAll('span');
const lis = document.querySelectorAll('li');

const myDetails = ['Habtor', 'Mandi', 'Azzan'];

for (let x = 0; x < spans.length; x++) {
  spans[x].remove();
  lis[x].append(`${myDetails[x]}`);
  lis[x].classList.add('list-item');
}
