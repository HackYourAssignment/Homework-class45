'use strict';

const InfoUserList = document.getElementById("list-item");

const newNickName = document.createElement('li');
newNickName.textContent = 'Delrio';

const newFavoriteFood = document.createElement('li');
newFavoriteFood.textContent = 'tacos';

const newHomeTown = document.createElement('li');
newHomeTown.textContent = 'Managua';

while (InfoUserList.firstChild) {
  InfoUserList.removeChild(InfoUserList.firstChild);
} 

InfoUserList.appendChild(newNickName);
InfoUserList.appendChild(newFavoriteFood);
InfoUserList.appendChild(newHomeTown);

const infoUserLi = InfoUserList.getElementsByTagName('li');

const newId = 'list-item';

for (let i = 0; i < infoUserLi.length; i++) {
  infoUserLi[i].className = newId;
}
