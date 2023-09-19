'use strict';

const nickname = document.getElementById('nickname');
const favFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');

nickname.textContent = 'Liz Luz';
favFood.textContent = 'Cheesecake';
hometown.textContent = 'Managua, Nicaragua';

const ulElement = document.querySelector('ul');
const liElements = ulElement.querySelectorAll('li');

liElements.forEach((liElement) => {
  liElement.setAttribute('class', 'list-item');
});
