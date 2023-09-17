'use strict';
const listItems = document.querySelectorAll('ul li');
const spans = document.querySelectorAll('ul li span');

listItems.forEach((element) => {
  element.className = 'list-item';
});

console.log(document.querySelectorAll('ul li').className);
spans.forEach((item) => {
  if (item.id === 'nickname') {
    item.textContent = 'Kadir';
  } else if (item.id === 'fav-food') {
    item.textContent = 'Kebap';
  } else if (item.id === 'hometown') {
    item.textContent = 'İzmir';
  }
});
