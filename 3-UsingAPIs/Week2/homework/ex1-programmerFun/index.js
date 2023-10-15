'use strict';

 function requestData(url) {
 return fetch(url).then((res) => {
   if (res.ok) {
     return res.json();
   } else {
     throw new Error(`Error! ${res.status}`);
   }
 });

}

function renderImage(data) {
  const imgElement = document.createElement('img');
  imgElement.src = data.img;
  imgElement.alt = data.name;
  document.body.appendChild(imgElement);
}

function renderError(error) {
  const h1Element = document.createElement('h1');
  h1Element.textContent = error;
  document.body.appendChild(h1Element); 
}

async function main() {

try{
  const data = await requestData('https://xkcd.now.sh/?comic=latest');
  renderImage(data);
}
catch(error){
  renderError(error);
}
}

window.addEventListener('load', main);
