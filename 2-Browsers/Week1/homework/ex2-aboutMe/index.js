'use strict';

// replace each of the spans (`nickname`, fav-food`,`hometown`) with your own information

const nickNAme = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const homeTown = document.getElementById('hometown');
nickNAme.textContent = 'Sanaz';
favFood.textContent = 'Pizza';
homeTown.textContent = 'Bojnurd';

// iterate through each `<li>` and change the class to `list-item`

const liElements = document.getElementsByTagName('li');
Array.from(liElements).forEach((li) => {
  li.classList.add('list-item');
});
