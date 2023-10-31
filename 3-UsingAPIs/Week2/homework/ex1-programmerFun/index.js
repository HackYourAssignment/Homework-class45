'use strict';

 async function requestData(url) {
try {
  const res = await fetch(url);
if(!res.ok){
  throw new Error(`Error! ${res.status}`);
}
  const data = await Response.json();
  return data;

} catch(error){
console.log(error);
}


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
